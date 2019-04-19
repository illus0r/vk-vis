function FormatNumberLength(num, length) {
	var r = "" + num;
	while (r.length < length) {
		r = "0" + r;
	}
	return r;
}

var msgs = []
var peopleRaw = []

//var limit = 20
var limit = 1 // for fake data
var terminated = 0

for(let i=0; i<limit; i++){
	//let filename = 'vk-hist-200-' + FormatNumberLength(i,2) + '.json'
	let filename = 'stripped.json'
	fetch('assets/data/' + filename)
		.then(response => response.text())
		.then(str => {
			//let json_str = str.replace(/(?<="(text|title|description|artist|name)": )".*?"(?=(,\n|\n}))/gs, 'true');
			let json_str = str.replace(/(?<="(?!(photo_100|photo_200|first_name|last_name))\w*": )".*?"(?=(,\n|\n}))/gs, 'true');
			//let json_str = str.replace(/(?<="\w+": )".*?"(?=(,\n|\n}))/gs, 'true');
			//console.log(filename)
			//console.log(json_str)
			let json = JSON.parse(json_str);
			msgs = msgs.concat(json.response.items)
			peopleRaw = peopleRaw.concat(json.response.profiles)
			terminated += 1
			if (terminated === limit) {
				process()
			}
})
}

function randomIntFromInterval(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

function process(){
	// Stripping and formating the data
	msgs = msgs.map(e => {
		let date = new Date(e.date*1000)
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return {
			date: date,
			person: e.from_id,
			text: e.text,
		}
	})

	console.log("msgs")
	console.log(msgs[0])

	// Group by users, then by date
	let msgGrouped = d3.nest()
		.key(function(d) { return d.person; })
		.key(function(d) { return d.date; })
		.rollup(leafs => leafs.length)
		.entries(msgs);


	msgGrouped = msgGrouped.map(e => {
		var dates = {}
		//console.log(e.values[0])
		e.values.forEach(d => {
			dates[d.key] = d.value
		})
		//console.log(dates)
		return {
			person: e.key,
			dates: dates,
			//dates: e.values.map(d => {
			//let res = {}
			//res[d.key] = d.value
			//return res
			//}),
		}
	})

	var people = {}
	msgGrouped.forEach(p5 => {
		let personRaw = peopleRaw.filter(d => d.id == p5.person)[0]
		people[p5.person] = 
			{
				name: personRaw.first_name + ' ' + personRaw.last_name,
				img: personRaw.photo_100,
				color: randomIntFromInterval(0, 100),
				totalNumber: 0,
				totalNumberPrev: 0,
			}
	})
	//console.log('people')
	//console.log(people)










	// p5 ================================================
	const sketch = (p5) => {



		var canvasLines
		var fontMono
		var canvasWidth = 1024
		var canvasHeight = 480
		var canvasMargins = {
			top: 50,
			right: 240,
			bottom: 50,
			left: 25,
		}
		var canvasLabelPosX = canvasWidth - 210



		p5.preload = () => {
			//logo = p5.loadImage('https://pp.userapi.com/c846121/v846121012/137080/hS3GMvGZEkI.jpg?ava=1');
			fontMono = p5.loadFont('assets/fonts/ShareTechMono-Regular.ttf')
		}



		p5.setup = () => {
			var canvas = p5.createCanvas(canvasWidth, canvasHeight)
			canvas.parent('canvas-wrapper')
			canvasLines = p5.createGraphics(canvasWidth - canvasMargins.left - canvasMargins.right,
				canvasHeight - canvasMargins.top - canvasMargins.bottom)
			p5.frameRate(10)
			p5.colorMode(p5.HSB, 100)
			canvasLines.colorMode(p5.HSB, 100)
			p5.colorMode(p5.HSB, 100)
			canvasLines.strokeWeight(3)
		}



		function Label(){
			this.name = 'hello'
			this.color = 'red'
			this.value = 1234
			this.y = 50
			this.yAim = 50

			this.setYAim = function(yAim){
				this.yAim = yAim
			}

			this.setValue = function(value){
				this.value = value
			}

			this.process = function(){
				this.y = this.yAim
			}

			this.draw = function(){
				p5.push()
				p5.noStroke()
				p5.translate(canvasLabelPosX, canvasMargins.top+4)
				p5.fill('white')
				p5.rect(-25,this.y-11,200,14)
				//
				p5.fill('#AEAEAE')
				p5.text(this.name, 6, this.y + 0)
				//
				p5.fill(this.color, 100, 90)
				p5.textAlign(p5.RIGHT)
				p5.textStyle(p5.BOLD)
				p5.text(this.value, 0, this.y + 0)
				//
				p5.pop()
			}
		}

		var labels = []
		for (const [personId, person] of Object.entries(people)) {
			let l = new Label()
			l.name = person.name
			l.color = person.color
			l.personId = personId
			labels.push(l)
		}


		function Model(graphDateSpan = 10){
			this.labels = []
			this.data = []
			this.currentDate
			this.currentDateStr
			this.graphDateSpan = graphDateSpan
			this.dateScale
			this.dateArray = d3.timeDay.range(new Date(2018, 9, 1), new Date(2019, 3, 10), 1)
			//console.log('dates in array: ', this.dateArray.length)
			this.isPaused = false

			// Init
			// Fill cumulative data
			msgGrouped.forEach(msgPerson => {
				person = people[msgPerson.person]
				person.data = {}
				var totalNumber = 0
				// filling the cumulative array within every person
				this.dateArray.forEach(d => {
					let number = msgPerson.dates[d]
					if(number){
						totalNumber += number
					}
					person.data[d] = totalNumber
				})
			})

			// process
			this.process = function(){
				if(!this.isPaused){
					// date
					this.currentDate = this.dateArray[p5.frameCount]
					if(!this.currentDate){
						this.isPaused = true
					}
					else{
						this.currentDateStr =
							FormatNumberLength(this.currentDate.getDate(), 2) +	'.' +
							FormatNumberLength(this.currentDate.getMonth()+1, 2) + '.' +
							FormatNumberLength(this.currentDate.getFullYear() % 100, 2)

						// date range
						this.dateScale = d3.scaleTime()
							.domain([d3.timeDay.offset(this.currentDate, -this.graphDateSpan), this.currentDate])
							.range([0, canvasLines.width])
					}
				}
			}

			// draw
			this.draw = function(){
				if(!this.isPaused){
					p5.blendMode(p5.NORMAL)
					p5.background('white')
					//canvasLines.blendMode(p5.NORMAL)
					canvasLines.background('white')
					//canvasLines.blendMode(p5.MULTIPLY)

					// Big digits
					canvasLines.push()
					canvasLines.translate(-canvasMargins.left, -canvasMargins.top)
					canvasLines.noStroke()
					canvasLines.scale(1.01, 3)
					canvasLines.textFont(fontMono, 180)
					canvasLines.textStyle(p5.BOLD)
					canvasLines.text(this.currentDateStr, 10, 143)
					canvasLines.pop()

					//lines
					//
					// find the most productive person to normalize data:
					let maxPerson = Object.keys(people).reduce((a, b) =>
						people[a].data[this.currentDate] > people[b].data[this.currentDate]  ? a : b)
					var maxValue = people[maxPerson].data[this.currentDate]
					//console.log(maxValue)
					var yScale = d3.scaleLinear()
						.domain([0, maxValue])
						.range([canvasLines.height-3, 3])

					// for every person draw a line
					for (const [personId, person] of Object.entries(people)) {
						canvasLines.stroke(person.color, 100, 90)
						//p5.text(person.name, 20, 100)
						var xp = this.dateScale(this.currentDate)
						var yp = yScale(person.data[this.currentDate])
						for(let i = 0; i < this.graphDateSpan+2; i++){
							//let date = this.dateArray[p5.frameCount-i]
							//let date = new Date(this.currentDate - 86400000*i)
							let date = d3.timeDay.offset(this.currentDate, -i)
							var x = this.dateScale(date)
							var y = yScale(person.data[date])
							if(!y){
								//console.log('person.data', person.data)
								//console.log('date', date)
								//console.log('person.data[date]', person.data[date])
								//console.log('y', y)
							}
							if(x & y){
								canvasLines.line(x,y,xp,yp)
								xp = x
								yp = y		
							}
						}

						p5.push()
						//p5.blendMode(p5.MULTIPLY)
						p5.image(canvasLines, canvasMargins.left, canvasMargins.top)

						// labels
						//p5.text(person.name, 512, p5.height - person.data[this.currentDate] - 0)
						//p5.text(person.data[this.currentDate], 512, p5.height - person.data[this.currentDate] + 10)
						let l = labels.filter(l=>l.personId == personId)[0]
						l.setValue(person.data[this.currentDate])
						//l.setYAim(yScale(person.data[this.dateArray[p5.frameCount-1]]))
						l.setYAim(yScale(person.data[this.currentDate]))
						l.process()
						l.draw()
						p5.pop()
					}

				}
			}
		}

		var model = new Model(30)



		p5.draw = () => {
			model.process()
			model.draw()
		}
	}
	let myp5 = new p5(sketch)
}




