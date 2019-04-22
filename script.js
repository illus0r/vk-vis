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
			let json_str = str
			// Disabled the next string cause Safari doesn't support lookbehinds yet
			// json_str = json_str.replace(/(?<="(?!(photo_100|photo_200|first_name|last_name))\w*": )".*?"(?=(,\n|\n}))/gs, 'true');
			//
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

	//console.log("msgs")
	//console.log(msgs[0])

	// Group by users, then by date
	let msgGrouped = d3.nest()
		.key(function(d) { return d.person; })
		.key(function(d) { return d.date; })
		.rollup(leafs => leafs.length)
		.entries(msgs);


	msgGrouped = msgGrouped.map(e => {
		var dates = {}
		e.values.forEach(d => {
			dates[d.key] = d.value
		})
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
	msgGrouped.forEach(p => {
		let personRaw = peopleRaw.filter(d => d.id == p.person)[0]
		people[p.person] = 
			{
				name: personRaw.first_name + ' ' + personRaw.last_name,
				img: personRaw.photo_100,
				color: randomIntFromInterval(0, 100),
				totalNumber: 0,
				totalNumberPrev: 0,
			}
	})










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
			btnRestart = p5.loadImage('./assets/images/btn-restart.png');
			btnRestartHover = p5.loadImage('./assets/images/btn-restart-hover.png');
			fontMono = p5.loadFont('assets/fonts/ShareTechMono-Regular.ttf')
			//fontMono = p5.loadFont('assets/fonts/SourceCodePro-Black.ttf')
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
			p5.ellipseMode(p5.CENTER)
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
				p5.text(Math.floor(this.value), 0, this.y + 0)
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
			this.isPaused = false
			this.step = 0
			this.isBtnReplayHover = false

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
					person.data[d.getTime()] = totalNumber
				})
			})

			// process
			this.process = function(){
				if(!this.isPaused){
					// date
					var cd = this.dateArray[this.step]
					if(!cd){
						this.isPaused = true
					}
					else{
						this.currentDate = cd
						this.step+=1
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
				p5.blendMode(p5.NORMAL)
				p5.background('white')
				canvasLines.background('white')

				// Big digits
				canvasLines.push()
				canvasLines.translate(-canvasMargins.left, -canvasMargins.top)
				canvasLines.noStroke()
				canvasLines.scale(1.01, 3)
				canvasLines.textFont(fontMono, 180)
				canvasLines.textStyle(p5.BOLD)
				canvasLines.text(this.currentDateStr, 10, 143)
				canvasLines.pop()
				//canvasLines.push()
				////canvasLines.translate(-canvasMargins.left + 12, -canvasMargins.top - 80)
				//canvasLines.translate(-canvasMargins.left+ 105, -canvasMargins.top + 16)
				//console.log(p5.mouseX, p5.mouseY)
				//canvasLines.noStroke()
				//canvasLines.scale(1., 2)
				//canvasLines.textFont(fontMono, 120)
				//canvasLines.textStyle(p5.BOLD)
				//canvasLines.text(this.currentDateStr, 10, 143)
				//canvasLines.pop()

				//lines
				//
				// find the most productive person to normalize data:
				let maxPerson = Object.keys(people).reduce((a, b) =>
					people[a].data[this.currentDate.getTime()] > people[b].data[this.currentDate.getTime()]  ? a : b)
				var maxValue = people[maxPerson].data[this.currentDate.getTime()]
				//console.log(maxValue)
				var yScale = d3.scaleLinear()
					.domain([0, maxValue])
					.range([canvasLines.height-3, 3])

				// for every person draw a line
				for (const [personId, person] of Object.entries(people).sort((a, b) => {
					return a[1].data[this.currentDate.getTime()]-b[1].data[this.currentDate.getTime()]
				})){
					canvasLines.stroke(person.color, 100, 90)
					//p5.text(person.name, 20, 100)
					var xp = this.dateScale(this.currentDate)
					var yp = yScale(person.data[this.currentDate.getTime()])
					if(!yp){
						//console.log('person.data', person.data)
						//console.log('date', date)
						//console.log('person.data[date]', person.data[date])
						//console.log(person.data[date])
						console.log(person.name)
						console.log(person.data)
						console.log(this.currentDate)
						console.log(person.data[this.currentDate.getTime()])
					}
					for(let i = 0; i < this.graphDateSpan+2; i++){
						let date = d3.timeDay.offset(this.currentDate, -i)
						var x = this.dateScale(date)
						var y = yScale(person.data[date.getTime()])
						if(x & y){
							canvasLines.line(x,y,xp,yp)
							xp = x
							yp = y		
						}
						//if(!x || !y || !xp || !yp){
							//console.log(x,y,xp,yp)
						//}
					}

					p5.push()
					//p5.blendMode(p5.MULTIPLY)
					p5.image(canvasLines, canvasMargins.left, canvasMargins.top)

					// labels
					//p5.text(person.name, 512, p5.height - person.data[this.currentDate] - 0)
					//p5.text(person.data[this.currentDate], 512, p5.height - person.data[this.currentDate] + 10)
					let l = labels.filter(l=>l.personId == personId)[0]
					l.setValue(person.data[this.currentDate.getTime()])
					l.setYAim(yScale(person.data[this.currentDate.getTime()]))
					l.process()
					l.draw()
					p5.pop()
				}
				if(this.isPaused){
					var center ={
						x: (canvasWidth + canvasMargins.left - canvasMargins.right)/2,
						y: (canvasHeight + canvasMargins.top - canvasMargins.bottom)/2
					}
					var img
					if(p5.pow(p5.mouseX-center.x, 2)
						+p5.pow(p5.mouseY-center.y+10, 2) <= 27*27){
						img = btnRestart
						this.isBtnReplayHover = true
					}
					else{
						img = btnRestartHover
						this.isBtnReplayHover = false
					}
					p5.image(img, 
						center.x - img.width/4, 
					  center.y - img.height/4,
						img.width/2,
						img.height/2						
					)
				}
			}
		}

		var model = new Model(30)



		p5.draw = () => {
			model.process()
			model.draw()
		}

		p5.mouseClicked = (event) => {
			//console.log('yo1')
			if (model.isPaused == true && model.isBtnReplayHover == true ) {
				model.step = 1
				model.isPaused = false
				//console.log('yo2')
			}
		}

	}
	let myp5 = new p5(sketch)
}




