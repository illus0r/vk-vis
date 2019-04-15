

//const sketch = (p) => {
////function preload() {
////// Get the most recent earthquake in the database
////}

////function setup() {
////}

////function draw() {
////background(200)
////let earthquakeMag = earthquakes.features[0].properties.mag
////let earthquakeName = earthquakes.features[0].properties.place
////ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10)
////textAlign(CENTER)
////text(earthquakeName, 0, height - 30, width, 30)
////}
//let earthquakes;
//p.preload = () => {
//let url = 'assets/data/vk-hist-200.json'
//earthquake = p.loadJSON(url, () => {}, () => this._decrementPreload());
//}
//p.setup = () => {
//var canvas = p.createCanvas(p.windowWidth, p.windowHeight)
//console.log(earthquake)
//p.noLoop()
//}
//p.draw = () => {
//}
//}
//let myp5 = new p5(sketch)




function FormatNumberLength(num, length) {
	var r = "" + num;
	while (r.length < length) {
		r = "0" + r;
	}
	return r;
}

var msgs = []
var peopleRaw = []

//// regex prayground
//let str = `
//"city": "Батуми",
//"title": "Батуми, Грузия"
//}
//},
//"conversation_message_id": 32559,

//`
//let json_str = str.replace(/(?<="(text|title|description)": )".*?"(?=(,|\n}))/gs, 'true');
//console.log(json_str)


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
	//console.log(msgs)
	//console.log(people)

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
		//console.log(personRaw)
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
	//console.log(usrs.filter(u => u.id == 190348091))


	var dateScale = d3.scaleTime()
    .domain([new Date(2018, 8, 1), new Date(2019, 6, 1)])
    .range([0, 960])

	var dateSpan = d3.timeDay.range(new Date(2018, 8, 1), new Date(2019, 6, 1), 1)


	// p5 ================================================
	const sketch = (p) => {
		var canvasLines
		var fontMono
		p.preload = () => {
			//logo = p.loadImage('https://pp.userapi.com/c846121/v846121012/137080/hS3GMvGZEkI.jpg?ava=1');
			fontMono = p.loadFont('assets/fonts/ShareTechMono-Regular.ttf')
		}
		var canvasLines
		p.setup = () => {
			var canvas = p.createCanvas(p.windowWidth,512)
			canvasLines = p.createGraphics(p.width, p.height)
			p.frameRate(20)
			p.colorMode(p.HSB, 100)
			canvasLines.colorMode(p.HSB, 100)
			canvasLines.blendMode(p.MULTIPLY)

		}
		p.draw = () => {
			p.background('white')
			let date = dateSpan[p.frameCount]
			let dateStr = date.getFullYear() +
				'.' + (date.getMonth()+1) +
				'.' + date.getDate()
			p.push()
			  p.scale(1, 5);
				p.textFont(fontMono, 100)
				p.text(dateStr, 0, 100)
			p.pop()
			msgGrouped.forEach(msgPerson => {
				person = people[msgPerson.person]
				//console.log(person)
				let number = msgPerson.dates[date]
				if(number){
					person.totalNumber += number
				}
				let dx = dateScale(new Date(2000,0,2)) - dateScale(new Date(2000,0,1))
				let xPrev = dateScale(date) - dx
				let yPrev = person.totalNumberPrev
				let x = dateScale(date)
				let y = person.totalNumber
				person.totalNumberPrev = person.totalNumber
				canvasLines.strokeWeight(1)
				canvasLines.stroke(person.color, 100, 100)
				canvasLines.line(xPrev, p.height - yPrev, x, p.height - y)
				//canvasLines.noStroke()
				p.text(person.name, x, p.height - y)
				p.image(canvasLines, 0, 0)
			})
		}
	}
	let myp5 = new p5(sketch)






	// TODO
	// Анимировать появление.
	// Нариовать имена и аватарки.
	//	- рисовать через картинку `canvasLines`
	// 

}




