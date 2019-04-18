function FormatNumberLength(num, length) {
	var r = "" + num;
	while (r.length < length) {
		r = "0" + r;
	}
	return r;
}

var msgs = []
var peopleRaw = []

var limit = 20
var terminated = 0

for(let i=0; i<limit; i++){
//for(let i=9; i<=9; i++){
	let filename = 'vk-hist-200-' + FormatNumberLength(i,2) + '.json'
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

	// Group by users, then by date
	let msgGrouped = d3.nest()
		.key(function(d) { return d.person; })
		.key(function(d) { return d.date; })
		.rollup(leafs => leafs.length)
		.entries(msgs);

	//console.log(msgGrouped)

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
	console.log(msgGrouped)

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
	console.log('people')
	console.log(people)


	var dateScale = d3.scaleTime()
    .domain([new Date(2018, 8, 1), new Date(2019, 6, 1)])
    .range([0, 960])

	var dateSpan = d3.timeDay.range(new Date(2018, 8, 1), new Date(2019, 6, 1), 1)








	// p5 ================================================
	const sketch = (p) => {



		var canvasLines
		var canvasTest
		var fontMono



		p.preload = () => {
			//logo = p.loadImage('https://pp.userapi.com/c846121/v846121012/137080/hS3GMvGZEkI.jpg?ava=1');
			fontMono = p.loadFont('assets/fonts/ShareTechMono-Regular.ttf')
		}
		var canvasLines



		p.setup = () => {
			var canvas = p.createCanvas(p.windowWidth,512)
			canvas.parent('canvas-wrapper')
			canvasLines = p.createGraphics(p.width, p.height)
			canvasTest = p.createGraphics(10000, p.height)
			canvasTest.background('yellow')
			p.frameRate(30)
			p.colorMode(p.HSB, 100)
			canvasLines.colorMode(p.HSB, 100)
			canvasLines.blendMode(p.MULTIPLY)
		}



		function Label(){
			this.name = 'hello'
			this.color = 'red'
			this.value = 1234
			this.y = 50
		}


		function Model(graphDateSpan = 10){
			this.labels = []
			this.data = []
			this.currentDate = new Date(2000,0,2)
			this.currentDateStr = '2000.01.02'
			this.graphDateSpan = graphDateSpan

			// process
			this.process = function(){
				this.currentDate = dateSpan[p.frameCount]
				this.currentDateStr = this.currentDate.getFullYear() +
					'.' + (this.currentDate.getMonth()+1) +
					'.' + this.currentDate.getDate()
				// move labels
				// move lines
			}

			// draw
			this.draw = function(){
				// Big digits
				p.push()
					p.scale(1, 5);
					p.textFont(fontMono, 100)
					p.text(this.currentDateStr, 0, 100)
				p.pop()

				msgGrouped.forEach(msgPerson => {
					person = people[msgPerson.person]
					//console.log(person)
					let number = msgPerson.dates[this.currentDate]
					if(number){
						person.totalNumber += number
					}
					let dx = dateScale(new Date(2000,0,2)) - dateScale(new Date(2000,0,1))
					let xPrev = dateScale(this.currentDate) - dx
					let yPrev = person.totalNumberPrev
					let x = dateScale(this.currentDate)
					let y = person.totalNumber
					person.totalNumberPrev = person.totalNumber
					canvasLines.strokeWeight(1)
					canvasLines.stroke(person.color, 100, 80)
					canvasLines.line(xPrev, p.height - yPrev - 1, x, p.height - y - 1)
					p.text(person.name, x, p.height - y)
					p.image(canvasLines, 0, 0)
				})
			}

		}
		
		var model = new Model(10)



		p.draw = () => {
			p.background('white')

			model.process()
			model.draw()

		}



	}
	let myp5 = new p5(sketch)


}




