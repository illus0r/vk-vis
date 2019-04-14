

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
var people = []

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
	let filename = 'vk-hist-200-' + FormatNumberLength(i,2) + '.json'
	fetch('assets/data/' + filename)
		.then(response => response.text())
		.then(str => {
			//let json_str = str.replace(/(?<="(text|title|description|artist)": )".*?"(?=(,|\n}))/gs, 'true');
			let json_str = str.replace(/(?<="\w+": )".*?"(?=(,\n|\n}))/gs, 'true');
			//console.log(filename)
			//console.log(json_str)
			let json = JSON.parse(json_str);
			msgs = msgs.concat(json.response.items)
			people = people.concat(json.response.profiles)
			terminated += 1
			if (terminated === limit) {
				process()
			}
})
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
		console.log(e.values[0])
		e.values.forEach(d => {
			dates[d.key] = d.value
		})
		console.log(dates)
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

	people = people.map(e => {
		return {
			id: e.id,
			name: e.first_name + ' ' + e.last_name,
			img: e.photo_100,
		}
	})
	//console.log(people)
	//console.log(usrs.filter(u => u.id == 190348091))


	var peopleStates = []
	var dateScale = d3.scaleTime()
    .domain([new Date(2018, 8, 1), new Date(2019, 6, 1)])
    .range([0, 960])

	// p5
	const sketch = (p) => {
		p.preload = () => {
			//logo = p.loadImage('https://pp.userapi.com/c846121/v846121012/137080/hS3GMvGZEkI.jpg?ava=1');
		}
		p.setup = () => {
			var canvas = p.createCanvas(p.windowWidth,512)
			p.background('silver')
			p.frameRate(4)

			p.strokeWeight(3)
			msgGrouped.forEach(person => {
				var totalNumber = 0
				let dateSpan = d3.timeDay.range(new Date(2018, 8, 1), new Date(2019, 6, 1), 1)
				dateSpan.forEach(date =>{
					let number = person.dates[date]
					if(number){
						totalNumber += number
					}
					let x = dateScale(date)
					let y = totalNumber
					p.point(x, p.height - y)
				})
			})
		}
		p.draw = () => {
		}
	}
	let myp5 = new p5(sketch)






	// TODO
	// Анимировать появление.
	//	- Засунуть в draw. Чтобы с каждым фреймом рисовалась одна дата.
	//	- Рисовать эту дату на картинку
	// Нариовать имена и аватарки.
	//	- 
	// 

}




