

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


json_str = `{
	"response": {
		"count": 24162,
		"items": [{
			"date": 1554559803,
			"from_id": 1302931,
			"id": 106982,
			"out": 0,
			"peer_id": 2000000071,
			"text": "ух ты, интересный подход)",
			"conversation_message_id": 33217,
			"fwd_messages": [],
			"important": false,
			"random_id": 0,
			"attachments": [],
			"is_hidden": false,
			"reply_message": {
				"date": 1554559670,
				"from_id": 85504912,
				"text": "пока не сделаем — не поймём, что делаем. Потом покажу :)",
				"attachments": [],
				"conversation_message_id": 33216,
				"peer_id": 2000000071,
				"id": 106980,
				"update_time": 0
			}
		}, {
		"date": 1554559670,
		"from_id": 85504912,
		"id": 106980,
		"out": 1,
		"peer_id": 2000000071,
		"text": "пока не сделаем — не поймём, что делаем. Потом покажу :)",
		"conversation_message_id": 33216,
		"fwd_messages": [],
		"important": false,
		"random_id": 1619124335,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554559169,
		"from_id": 1302931,
		"id": 106979,
		"out": 0,
		"peer_id": 2000000071,
		"text": "о, это как? кто с кем больше взаимодействует? а что это дает?",
		"conversation_message_id": 33215,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554558377,
		"from_id": 85504912,
		"id": 106977,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Спасибо, Маша! Это проект, который мы делаем в Парке Интуиции. Будет визуализировать переписку чатиков ВКонтакте",
		"conversation_message_id": 33214,
		"fwd_messages": [],
		"important": false,
		"random_id": 1166580489,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554529962,
			"from_id": 1302931,
			"text": "Работает!
			Вань, а зачем это?",
			"attachments": [],
			"conversation_message_id": 33207,
			"peer_id": 2000000071,
			"id": 106968,
			"update_time": 0
		}
		}, {
		"date": 1554555709,
		"from_id": 150837360,
		"id": 106976,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ро, красиво!",
		"conversation_message_id": 33213,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554555700,
		"from_id": 150837360,
		"id": 106975,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Сегодня, хоть сейчас!",
		"conversation_message_id": 33212,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554555693,
		"from_id": 150837360,
		"id": 106974,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Эй, попцы! Желаю испить кофия. Кто со мной хочет?",
		"conversation_message_id": 33211,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554551657,
		"from_id": 12318524,
		"id": 106973,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33210,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456241753,
				"album_id": -3,
				"owner_id": 12318524,
				"sizes": [{
					"type": "s",
					"url": "https://pp.userap...8f6/wyj-3Zm4quM.jpg",
					"width": 75,
					"height": 56
				}, {
				"type": "m",
				"url": "https://pp.userap...8f7/7AiEx5wVBG8.jpg",
				"width": 130,
				"height": 97
				}, {
				"type": "x",
				"url": "https://pp.userap...8f8/_hYCvgwpfxc.jpg",
				"width": 604,
				"height": 453
				}, {
				"type": "y",
				"url": "https://pp.userap...8f9/3yQYQGw-kMs.jpg",
				"width": 807,
				"height": 605
				}, {
				"type": "z",
				"url": "https://pp.userap...8fa/s33IlXoAzBY.jpg",
				"width": 1280,
				"height": 960
				}, {
				"type": "w",
				"url": "https://pp.userap...8fb/T0cXEawb7Mo.jpg",
				"width": 1600,
				"height": 1200
				}, {
				"type": "o",
				"url": "https://pp.userap...8fc/tTac4kGtVm8.jpg",
				"width": 130,
				"height": 98
				}, {
				"type": "p",
				"url": "https://pp.userap...8fd/aXKOKBVAEZA.jpg",
				"width": 200,
				"height": 150
				}, {
				"type": "q",
				"url": "https://pp.userap...8fe/wUWN5TrAUSs.jpg",
				"width": 320,
				"height": 240
				}, {
				"type": "r",
				"url": "https://pp.userap...8ff/rlvwleVcbtM.jpg",
				"width": 510,
				"height": 383
				}],
				"text": "",
				"date": 1554551657,
				"access_key": "308b27cf45193f4b84"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554550940,
		"from_id": 12318524,
		"id": 106972,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33209,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456241752,
				"album_id": -3,
				"owner_id": 12318524,
				"sizes": [{
					"type": "s",
					"url": "https://pp.userap...e15/7HRwCdrzYaY.jpg",
					"width": 75,
					"height": 56
				}, {
				"type": "m",
				"url": "https://pp.userap...e16/HaVtGtmyuu0.jpg",
				"width": 130,
				"height": 97
				}, {
				"type": "x",
				"url": "https://pp.userap...e17/D64DMCBmoPE.jpg",
				"width": 604,
				"height": 453
				}, {
				"type": "y",
				"url": "https://pp.userap...e18/tTERp4CJpV4.jpg",
				"width": 807,
				"height": 605
				}, {
				"type": "z",
				"url": "https://pp.userap...e19/-W8U4VmxcYQ.jpg",
				"width": 1280,
				"height": 960
				}, {
				"type": "w",
				"url": "https://pp.userap...e1a/M17K1FwK6PA.jpg",
				"width": 1600,
				"height": 1200
				}, {
				"type": "o",
				"url": "https://pp.userap...e1b/DzWYP-bPSaQ.jpg",
				"width": 130,
				"height": 98
				}, {
				"type": "p",
				"url": "https://pp.userap...e1c/sYoCny4fco4.jpg",
				"width": 200,
				"height": 150
				}, {
				"type": "q",
				"url": "https://pp.userap...e1d/s474q4LRT3U.jpg",
				"width": 320,
				"height": 240
				}, {
				"type": "r",
				"url": "https://pp.userap...e1e/Yu0HSfJf-y0.jpg",
				"width": 510,
				"height": 383
				}],
				"text": "",
				"date": 1554550940,
				"access_key": "6fee0d7e849ec6f1cf"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554530246,
		"from_id": 14369873,
		"id": 106970,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Родион на здоровье=)) Это Дима заботушка)",
		"conversation_message_id": 33208,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554529962,
		"from_id": 1302931,
		"id": 106968,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Работает!
		Вань, а зачем это?",
		"conversation_message_id": 33207,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554501529,
			"from_id": 85504912,
			"text": "vk.dianov.org
			Теперь должна работать! Помогите потестить, кто не спит :–)",
			"attachments": [{
				"type": "photo",
				"photo": {
					"id": 456240505,
					"album_id": -3,
					"owner_id": 85504912,
					"sizes": [{
						"type": "s",
						"url": "https://pp.userap...130/zrc4GebHl24.jpg",
						"width": 75,
						"height": 39
					}, {
					"type": "m",
					"url": "https://pp.userap...131/jkADNdgOvzU.jpg",
					"width": 130,
					"height": 68
					}, {
					"type": "x",
					"url": "https://pp.userap...132/AypSfnXbKW8.jpg",
					"width": 604,
					"height": 314
					}, {
					"type": "y",
					"url": "https://pp.userap...133/uX-AVL8a3Yw.jpg",
					"width": 807,
					"height": 420
					}, {
					"type": "z",
					"url": "https://pp.userap...134/SQfVEJn2B94.jpg",
					"width": 1280,
					"height": 666
					}, {
					"type": "w",
					"url": "https://pp.userap...135/QccfHsd9dFs.jpg",
					"width": 2560,
					"height": 1332
					}, {
					"type": "o",
					"url": "https://pp.userap...136/aSLvaXYt-hc.jpg",
					"width": 130,
					"height": 87
					}, {
					"type": "p",
					"url": "https://pp.userap...137/JOeNfaNIy9s.jpg",
					"width": 200,
					"height": 133
					}, {
					"type": "q",
					"url": "https://pp.userap...138/urTh0Cxzmr0.jpg",
					"width": 320,
					"height": 213
					}, {
					"type": "r",
					"url": "https://pp.userap...139/1JnmxRPZR4k.jpg",
					"width": 510,
					"height": 340
					}],
					"text": "",
					"date": 1554501527,
					"access_key": "ed0856717990a75dc9"
				}
			}],
			"conversation_message_id": 33205,
			"peer_id": 2000000071,
			"id": 106962,
			"update_time": 0
		}
		}, {
		"date": 1554529668,
		"from_id": 12318524,
		"id": 106967,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Друзья, спасибо за вареники &#128522;&#128591;
		Мы сегодня в «экспедицию» на бакалду поедем. Часов в 11:00. Если кто хочет - присоединяйтесь )",
		"conversation_message_id": 33206,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554501529,
		"from_id": 85504912,
		"id": 106962,
		"out": 1,
		"peer_id": 2000000071,
		"text": "vk.dianov.org
		Теперь должна работать! Помогите потестить, кто не спит :–)",
		"conversation_message_id": 33205,
		"fwd_messages": [],
		"important": false,
		"random_id": 1412381295,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456240505,
				"album_id": -3,
				"owner_id": 85504912,
				"sizes": [{
					"type": "s",
					"url": "https://pp.userap...130/zrc4GebHl24.jpg",
					"width": 75,
					"height": 39
				}, {
				"type": "m",
				"url": "https://pp.userap...131/jkADNdgOvzU.jpg",
				"width": 130,
				"height": 68
				}, {
				"type": "x",
				"url": "https://pp.userap...132/AypSfnXbKW8.jpg",
				"width": 604,
				"height": 314
				}, {
				"type": "y",
				"url": "https://pp.userap...133/uX-AVL8a3Yw.jpg",
				"width": 807,
				"height": 420
				}, {
				"type": "z",
				"url": "https://pp.userap...134/SQfVEJn2B94.jpg",
				"width": 1280,
				"height": 666
				}, {
				"type": "w",
				"url": "https://pp.userap...135/QccfHsd9dFs.jpg",
				"width": 2560,
				"height": 1332
				}, {
				"type": "o",
				"url": "https://pp.userap...136/aSLvaXYt-hc.jpg",
				"width": 130,
				"height": 87
				}, {
				"type": "p",
				"url": "https://pp.userap...137/JOeNfaNIy9s.jpg",
				"width": 200,
				"height": 133
				}, {
				"type": "q",
				"url": "https://pp.userap...138/urTh0Cxzmr0.jpg",
				"width": 320,
				"height": 213
				}, {
				"type": "r",
				"url": "https://pp.userap...139/1JnmxRPZR4k.jpg",
				"width": 510,
				"height": 340
				}],
				"text": "",
				"date": 1554501527,
				"access_key": "ed0856717990a75dc9"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554497222,
		"from_id": 7234126,
		"id": 106928,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Нет. Не будет.",
		"conversation_message_id": 33204,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554489327,
			"from_id": 14369873,
			"text": "Хмм, а посуду бариста не будет мыть?)",
			"attachments": [],
			"conversation_message_id": 33202,
			"peer_id": 2000000071,
			"id": 106923,
			"update_time": 0
		}
		}, {
		"date": 1554495104,
		"from_id": 156067771,
		"id": 106925,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Я бы пошла.)",
		"conversation_message_id": 33203,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554489327,
		"from_id": 14369873,
		"id": 106923,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Хмм, а посуду бариста не будет мыть?)",
		"conversation_message_id": 33202,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554488170,
		"from_id": 7234126,
		"id": 106922,
		"out": 0,
		"peer_id": 2000000071,
		"text": "В серфе ещё и туалеты, полы и посуда на бариста",
		"conversation_message_id": 33201,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554488111,
		"from_id": 7234126,
		"id": 106921,
		"out": 0,
		"peer_id": 2000000071,
		"text": "У нас оплата больше, чем в серфе по крайней мере. &#129300;",
		"conversation_message_id": 33200,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554486672,
			"from_id": 1334105,
			"text": "Сколько дегнев?",
			"attachments": [],
			"conversation_message_id": 33197,
			"peer_id": 2000000071,
			"id": 106918,
			"update_time": 0
		}
		}, {
		"date": 1554488070,
		"from_id": 7234126,
		"id": 106920,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Нет шефа. Мы типа больше кондитерская, не кофейня. Но я хочу, чтобы у нас с кофе круто было все",
		"conversation_message_id": 33199,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554486717,
		"from_id": 1334105,
		"id": 106919,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А шеф есть?",
		"conversation_message_id": 33198,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554479882,
			"from_id": 7234126,
			"text": "Дорогие, а мы ищем бариста",
			"attachments": [],
			"conversation_message_id": 33176,
			"peer_id": 2000000071,
			"id": 106897,
			"update_time": 0
		}
		}, {
		"date": 1554486672,
		"from_id": 1334105,
		"id": 106918,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Сколько дегнев?",
		"conversation_message_id": 33197,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554479882,
			"from_id": 7234126,
			"text": "Дорогие, а мы ищем бариста",
			"attachments": [],
			"conversation_message_id": 33176,
			"peer_id": 2000000071,
			"id": 106897,
			"update_time": 0
		}
		}, {
		"date": 1554485783,
		"from_id": 7234126,
		"id": 106917,
		"out": 0,
		"peer_id": 2000000071,
		"text": "хм) он еще немного под вопросом висит)",
		"conversation_message_id": 33196,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554485329,
		"from_id": 14369873,
		"id": 106916,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ириша, а высокий парень с бабочкой не подошёл? Сегодня приходил. Он вечатлил меня своим видом",
		"conversation_message_id": 33195,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554481388,
		"from_id": 7234126,
		"id": 106915,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Тортики резать
		Кофе варить 
		Форма красивая",
		"conversation_message_id": 33194,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554481333,
		"from_id": 7234126,
		"id": 106914,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Любого пола",
		"conversation_message_id": 33193,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554481325,
		"from_id": 7234126,
		"id": 106913,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Хотя троих я нашла 
		Нужен ещё один",
		"conversation_message_id": 33192,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554481310,
		"from_id": 7234126,
		"id": 106912,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Вот честно",
		"conversation_message_id": 33191,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554481305,
		"from_id": 7234126,
		"id": 106911,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Не свои люди, не такие прекрасные",
		"conversation_message_id": 33190,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554481287,
		"from_id": 7234126,
		"id": 106910,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Да мы уже делали",
		"conversation_message_id": 33189,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554481041,
		"from_id": 12318524,
		"id": 106909,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Наверное, если поговорить правильно, то можно и убедить. Главное дать человеку то, что он хочет. И сохранить свободу. 
		А если просто хороший человек, который обучится... то это можно объявление сделать. А мы его репостнем везде",
		"conversation_message_id": 33188,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554480880,
		"from_id": 7234126,
		"id": 106908,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Мы кофе мы обучим же",
		"conversation_message_id": 33187,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554480845,
		"from_id": 7234126,
		"id": 106907,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Просто человек хороший, ответственный, эстетику понимающий",
		"conversation_message_id": 33186,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554480807,
		"from_id": 7234126,
		"id": 106906,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Крутого",
		"conversation_message_id": 33185,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554480803,
		"from_id": 7234126,
		"id": 106905,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ну нам не обязательно такого крытого",
		"conversation_message_id": 33184,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554480766,
		"from_id": 7234126,
		"id": 106904,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Не представляю",
		"conversation_message_id": 33183,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554480761,
		"from_id": 7234126,
		"id": 106903,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Своё детище закроет и к нам пойдёт",
		"conversation_message_id": 33182,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554480749,
		"from_id": 7234126,
		"id": 106902,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ну как он",
		"conversation_message_id": 33181,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554480009,
		"from_id": 12318524,
		"id": 106901,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Может быть Рафа?",
		"conversation_message_id": 33180,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554479976,
		"from_id": 7234126,
		"id": 106900,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Может, у вас есть прекрасные знакомые, кого-то вы посоветуете?",
		"conversation_message_id": 33179,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554479948,
		"from_id": 7234126,
		"id": 106899,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Кто бы хотел? Работа красивая, приветливая, вкусная",
		"conversation_message_id": 33178,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554479929,
		"from_id": 7234126,
		"id": 106898,
		"out": 0,
		"peer_id": 2000000071,
		"text": "светлых красивых людей, парень или девушка",
		"conversation_message_id": 33177,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554479882,
		"from_id": 7234126,
		"id": 106897,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Дорогие, а мы ищем бариста",
		"conversation_message_id": 33176,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554479398,
		"from_id": 190348091,
		"id": 106896,
		"out": 0,
		"peer_id": 2000000071,
		"text": "?",
		"conversation_message_id": 33175,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554479389,
		"from_id": 190348091,
		"id": 106895,
		"out": 0,
		"peer_id": 2000000071,
		"text": "По-моему эти шарики - хранители Охапки. Типа тауэрских воронов. Лёш-Маш, заговоренные, признавайтесь",
		"conversation_message_id": 33174,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456240914,
				"album_id": -3,
				"owner_id": 190348091,
				"sizes": [{
					"type": "s",
					"url": "https://pp.userap...da8/oMUoHjaIqz4.jpg",
					"width": 56,
					"height": 75
				}, {
				"type": "m",
				"url": "https://pp.userap...da9/1NIixmupykc.jpg",
				"width": 97,
				"height": 130
				}, {
				"type": "x",
				"url": "https://pp.userap...daa/4D6yPx2luGc.jpg",
				"width": 452,
				"height": 604
				}, {
				"type": "y",
				"url": "https://pp.userap...dab/kF7OyY3yU3o.jpg",
				"width": 604,
				"height": 807
				}, {
				"type": "z",
				"url": "https://pp.userap...dac/fJ_ElMje5Ck.jpg",
				"width": 719,
				"height": 960
				}, {
				"type": "o",
				"url": "https://pp.userap...dad/f9rDHDYj8e0.jpg",
				"width": 130,
				"height": 174
				}, {
				"type": "p",
				"url": "https://pp.userap...dae/ui2oDwGXtBM.jpg",
				"width": 200,
				"height": 267
				}, {
				"type": "q",
				"url": "https://pp.userap...daf/pkWIKk_fP3o.jpg",
				"width": 320,
				"height": 427
				}, {
				"type": "r",
				"url": "https://pp.userap...db0/67THxbMzPag.jpg",
				"width": 510,
				"height": 681
				}],
				"text": "",
				"date": 1554479388,
				"access_key": "ab353abaf42c89ca7b"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554459021,
		"from_id": 14369873,
		"id": 106893,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Я знаю, просто иногда кажется это пластик, а это вообще не он, а смесь пластика с чем-нибудь. Я смотрю упаковку",
		"conversation_message_id": 33173,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554453122,
			"from_id": 85504912,
			"text": "[id14369873|Екатерина] и остальные экотаксисты. Оказывается экотакси принимает пластик всех видов, сортов и марок, можно не рассматривать упаковки :) Главное, чтобы пластик плавился. Его замешают с песком и сделают брусчатку.",
			"attachments": [],
			"conversation_message_id": 33169,
			"peer_id": 2000000071,
			"id": 106879,
			"update_time": 0
		}
		}, {
		"date": 1554457773,
		"from_id": 3772019,
		"id": 106892,
		"out": 0,
		"peer_id": 2000000071,
		"text": "это прекрасно!",
		"conversation_message_id": 33172,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 677,
				"from_id": -147596656,
				"to_id": -147596656,
				"date": 1554391018,
				"post_type": "post",
				"text": "Весенние Первоцветы...",
				"marked_as_ads": 0,
				"attachments": [{
					"type": "video",
					"video": {
						"id": 456239146,
						"owner_id": -147596656,
						"title": "РАСТИТЕЛЬНЫЙ ВЕСТНИК СЕЗОН 5 ВЫПУСК 2 || PLANT REPORTER SEASON 5 EPISODE 2 ENGLISH SUBTITLES",
						"duration": 100,
						"description": "https://vk.com/ohnepflanzengehtesnicht",
						"date": 1554390635,
						"comments": 0,
						"views": 184,
						"width": 1280,
						"height": 720,
						"photo_130": "https://pp.userap...528/dDkDDYhPv4E.jpg",
						"photo_320": "https://pp.userap...526/TFd8AibNeWE.jpg",
						"photo_800": "https://pp.userap...520/89u-Vf05-yo.jpg",
						"photo_1280": "https://pp.userap...521/9RozPIJxAJ8.jpg",
						"is_favorite": false,
						"first_frame_320": "https://pp.userap...1d1/rHBl3Xwt6Vc.jpg",
						"first_frame_160": "https://pp.userap...1d5/youL3IlTmhM.jpg",
						"first_frame_0": "https://pp.userap...1d0/gpKcq-JMc9w.jpg",
						"first_frame_130": "https://pp.userap...1d6/uwsEX_-7mhw.jpg",
						"first_frame_720": "https://pp.userap...1ce/_sjYW6SIvH8.jpg",
						"first_frame_1024": "https://pp.userap...1cf/r8n_aMMd_SY.jpg",
						"first_frame_1280": "https://pp.userap...1d2/16X2syOkGN0.jpg",
						"first_frame_800": "https://pp.userap...1d3/q9_z4DOB_d0.jpg",
						"access_key": "c17d9239c250912b53",
						"can_add": 1,
						"track_code": "video_33798391h9HQ1E-lHKDzHIPuS34li3mq2-MXZAPyrqo4C3XT-5Cw86LTTKUpmQ"
					}
				}],
				"post_source": {
					"type": "vk"
				},
				"comments": {
					"count": 1,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 11,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 1,
					"user_reposted": 0
				},
				"views": {
					"count": 194
				},
				"is_favorite": false,
				"access_key": "9d1f766790fcd2fb69"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554456688,
		"from_id": 85504912,
		"id": 106891,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Спасибо, вижу ошибку. Фикшу. Позже вернусь :)",
		"conversation_message_id": 33171,
		"fwd_messages": [],
		"important": false,
		"random_id": 144764853,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554456279,
		"from_id": 2918341,
		"id": 106884,
		"out": 0,
		"peer_id": 2000000071,
		"text": "тоже "Loading..." на пустой странице",
		"conversation_message_id": 33170,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554452597,
			"from_id": 85504912,
			"text": "Пишу супермегаприложение. Помогите потестить :) Надо открыть сайт, дать права, какие попросит. Должны замигать фотографии нескольких ваших друзей https://vk.dianov.org/",
			"attachments": [{
				"type": "link",
				"link": {
					"url": "https://vk.dianov.org/",
					"title": "VK chat vis",
					"caption": "vk.dianov.org",
					"description": "",
					"is_favorite": false
				}
			}],
			"conversation_message_id": 33163,
			"peer_id": 2000000071,
			"id": 106873,
			"update_time": 0
		}
		}, {
		"date": 1554453122,
		"from_id": 85504912,
		"id": 106879,
		"out": 1,
		"peer_id": 2000000071,
		"text": "[id14369873|Екатерина] и остальные экотаксисты. Оказывается экотакси принимает пластик всех видов, сортов и марок, можно не рассматривать упаковки :) Главное, чтобы пластик плавился. Его замешают с песком и сделают брусчатку.",
		"conversation_message_id": 33169,
		"fwd_messages": [],
		"important": false,
		"random_id": 551622619,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554452924,
		"from_id": 1302931,
		"id": 106878,
		"out": 0,
		"peer_id": 2000000071,
		"text": "хорошо)",
		"conversation_message_id": 33168,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554452892,
		"from_id": 85504912,
		"id": 106877,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Дай знать, если залоудит :)",
		"conversation_message_id": 33167,
		"fwd_messages": [],
		"important": false,
		"random_id": 21409440,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554452853,
		"from_id": 85504912,
		"id": 106876,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Хм. Спасибо.",
		"conversation_message_id": 33166,
		"fwd_messages": [],
		"important": false,
		"random_id": 302333144,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554452842,
		"from_id": 1302931,
		"id": 106875,
		"out": 0,
		"peer_id": 2000000071,
		"text": "и больше ничего не происходит",
		"conversation_message_id": 33165,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554452836,
		"from_id": 1302931,
		"id": 106874,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Loading...",
		"conversation_message_id": 33164,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554452597,
		"from_id": 85504912,
		"id": 106873,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Пишу супермегаприложение. Помогите потестить :) Надо открыть сайт, дать права, какие попросит. Должны замигать фотографии нескольких ваших друзей https://vk.dianov.org/",
		"conversation_message_id": 33163,
		"fwd_messages": [],
		"important": false,
		"random_id": 1505118348,
		"attachments": [{
			"type": "link",
			"link": {
				"url": "https://vk.dianov.org/",
				"title": "VK chat vis",
				"caption": "vk.dianov.org",
				"description": "",
				"is_favorite": false
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554389458,
		"from_id": 1302931,
		"id": 106832,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33162,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 349797,
				"from_id": -1672730,
				"to_id": -1672730,
				"date": 1554385626,
				"post_type": "post",
				"text": "Для создания такого поля переработали более 50 тыс. стаканчиков. &#128170;",
				"marked_as_ads": 0,
				"attachments": [{
					"type": "link",
					"link": {
						"url": "http://amp.gs/Rn23",
						"title": "В Сочи появилось футбольное поле из пластиковых стаканчиков ЧМ-2018",
						"caption": "amp.gs",
						"description": "В Сочи презентовали футбольное поле из пластиковых стаканчиков, которые болельщики оставили на площадках чемпионата мира по футболу-2018. Об этом «Афише Daily» рассказали представители ...",
						"photo": {
							"id": 456267087,
							"album_id": -26,
							"owner_id": 2000025524,
							"sizes": [{
								"type": "k",
								"url": "https://pp.userap...a5f/uDcBfx6J6Hc.jpg",
								"width": 1074,
								"height": 480
							}, {
							"type": "l",
							"url": "https://pp.userap...a5e/3Sco1wJAecI.jpg",
							"width": 537,
							"height": 240
							}, {
							"type": "m",
							"url": "https://pp.userap...a5b/3VuEQ3TZwoQ.jpg",
							"width": 130,
							"height": 70
							}, {
							"type": "p",
							"url": "https://pp.userap...a5d/AqzU7CU0M8o.jpg",
							"width": 260,
							"height": 140
							}, {
							"type": "s",
							"url": "https://pp.userap...a5a/EWjS54aSjbM.jpg",
							"width": 75,
							"height": 35
							}, {
							"type": "x",
							"url": "https://pp.userap...a5c/Wr7SCerGOXA.jpg",
							"width": 150,
							"height": 80
							}],
							"text": "",
							"date": 1554385633
						},
						"is_favorite": false
					}
				}],
				"post_source": {
					"type": "api"
				},
				"comments": {
					"count": 0,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 38,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 1,
					"user_reposted": 0
				},
				"views": {
					"count": 6084
				},
				"is_favorite": false,
				"access_key": "ae9330865e991e9d4b"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554370382,
		"from_id": 150837360,
		"id": 106827,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33161,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456243046,
				"album_id": -3,
				"owner_id": 150837360,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...f78/_B2OMzK9Qa8.jpg",
					"width": 111,
					"height": 130
				}, {
				"type": "o",
				"url": "https://pp.userap...f7c/7eY5pTml_bE.jpg",
				"width": 130,
				"height": 153
				}, {
				"type": "p",
				"url": "https://pp.userap...f7d/AMzb-Sq6Efw.jpg",
				"width": 200,
				"height": 235
				}, {
				"type": "q",
				"url": "https://pp.userap...f7e/LszBPQr81lA.jpg",
				"width": 320,
				"height": 376
				}, {
				"type": "r",
				"url": "https://pp.userap...f7f/gj8mVU6CDQo.jpg",
				"width": 510,
				"height": 599
				}, {
				"type": "s",
				"url": "https://pp.userap...f77/XR5mWfY41JE.jpg",
				"width": 64,
				"height": 75
				}, {
				"type": "x",
				"url": "https://pp.userap...f79/qCO4TQbzmi0.jpg",
				"width": 514,
				"height": 604
				}, {
				"type": "y",
				"url": "https://pp.userap...f7a/hK0rJDfIFMI.jpg",
				"width": 687,
				"height": 807
				}, {
				"type": "z",
				"url": "https://pp.userap...f7b/lpOeiRNyxyg.jpg",
				"width": 919,
				"height": 1080
				}],
				"text": "",
				"date": 1554370382,
				"access_key": "0fdf53a9102c76a03c"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554370352,
		"from_id": 150837360,
		"id": 106826,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Хочу фильм с таким постером!!!",
		"conversation_message_id": 33160,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456243044,
				"album_id": -3,
				"owner_id": 150837360,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...96c/CWJF95q38Xw.jpg",
					"width": 84,
					"height": 130
				}, {
				"type": "o",
				"url": "https://pp.userap...96f/Uy3R7BeG8sc.jpg",
				"width": 130,
				"height": 201
				}, {
				"type": "p",
				"url": "https://pp.userap...970/No8ypmAv60o.jpg",
				"width": 200,
				"height": 309
				}, {
				"type": "q",
				"url": "https://pp.userap...971/JKQKSH5hLgQ.jpg",
				"width": 320,
				"height": 494
				}, {
				"type": "r",
				"url": "https://pp.userap...972/ESRYWwWbhc8.jpg",
				"width": 466,
				"height": 720
				}, {
				"type": "s",
				"url": "https://pp.userap...96b/gGIgH6kUy-I.jpg",
				"width": 48,
				"height": 75
				}, {
				"type": "x",
				"url": "https://pp.userap...96d/b90f65VBpKI.jpg",
				"width": 391,
				"height": 604
				}, {
				"type": "y",
				"url": "https://pp.userap...96e/faftf8kM2Vg.jpg",
				"width": 466,
				"height": 720
				}],
				"text": "",
				"date": 1554370352,
				"access_key": "b1572f3bb0f0bca1bc"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554366295,
		"from_id": 85504912,
		"id": 106824,
		"out": 1,
		"peer_id": 2000000071,
		"text": "ми ми ми",
		"conversation_message_id": 33159,
		"fwd_messages": [],
		"important": false,
		"random_id": 1328986634,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554356591,
		"from_id": 1302931,
		"id": 106822,
		"out": 0,
		"peer_id": 2000000071,
		"text": "https://meduza.io...ya
		минутка умиления",
		"conversation_message_id": 33158,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "link",
			"link": {
				"url": "https://meduza.io...etim-i-proslavilsya",
				"title": "Ши-тцу все время спит на спине. Этим и прославился! &#128021;",
				"caption": "meduza.io",
				"description": "Ши-тцу по кличке Пэнинин спит в необычной позе: пес ложится на спину и смешно складывает лапки. Обычно животное отдыхает прямо посреди комнаты. А иногда он использует шторы вместо одеяла.",
				"photo": {
					"id": 456270493,
					"album_id": -28,
					"owner_id": 2000024878,
					"sizes": [{
						"type": "k",
						"url": "https://pp.userap...1de/J2FL5MiV3S8.jpg",
						"width": 1074,
						"height": 480
					}, {
					"type": "l",
					"url": "https://pp.userap...1dd/4CPAOA7VjaM.jpg",
					"width": 537,
					"height": 239
					}, {
					"type": "m",
					"url": "https://pp.userap...1d5/csr4gpOFt90.jpg",
					"width": 130,
					"height": 58
					}, {
					"type": "o",
					"url": "https://pp.userap...1d9/PTLe6aa18PM.jpg",
					"width": 130,
					"height": 87
					}, {
					"type": "p",
					"url": "https://pp.userap...1da/7hKAUoxoPdA.jpg",
					"width": 200,
					"height": 133
					}, {
					"type": "q",
					"url": "https://pp.userap...1db/U7UXbfphTto.jpg",
					"width": 320,
					"height": 213
					}, {
					"type": "r",
					"url": "https://pp.userap...1dc/LkAuoOAYw6M.jpg",
					"width": 510,
					"height": 340
					}, {
					"type": "s",
					"url": "https://pp.userap...1d4/EnSUcHd9UzM.jpg",
					"width": 75,
					"height": 33
					}, {
					"type": "x",
					"url": "https://pp.userap...1d6/yx8Mf1zuDPU.jpg",
					"width": 604,
					"height": 269
					}, {
					"type": "y",
					"url": "https://pp.userap...1d7/IgGsSDdJ9GA.jpg",
					"width": 807,
					"height": 360
					}, {
					"type": "z",
					"url": "https://pp.userap...1d8/KD5n8Fdkbus.jpg",
					"width": 1200,
					"height": 536
					}],
					"text": "",
					"date": 1554356576
				},
				"is_favorite": false
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554284264,
		"from_id": 150837360,
		"id": 106806,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А ещё есть кто рядом с Леруа, кто сможет сегодня заглянуть, приобрести? Первую позицию 2 шт. или вторую, 4 шт.",
		"conversation_message_id": 33157,
		"fwd_messages": [{
			"date": 1554279860,
			"from_id": 150837360,
			"text": "https://volgograd...t-chernyy-82035574/",
			"attachments": [{
				"type": "link",
				"link": {
					"url": "https://volgograd...t-chernyy-82035574/",
					"title": "Леруа Мерлен",
					"caption": "volgograd.leroymerlin.ru",
					"description": "Настольная лампа 3 Вт 3000 К цвет чёрный: отзывы, фото, характеристики и калькулятор расчета товара. Леруа Мерлен в Волгограде - это низкие цены каждый день, быстрая доставка и удобный самовывоз.",
					"photo": {
						"id": 456264125,
						"album_id": -27,
						"owner_id": 2000025022,
						"sizes": [{
							"type": "m",
							"url": "https://pp.userap...81e/U8cuIXaN4Bw.jpg",
							"width": 130,
							"height": 130
						}, {
						"type": "o",
						"url": "https://pp.userap...820/nduUUPQXlDQ.jpg",
						"width": 130,
						"height": 130
						}, {
						"type": "p",
						"url": "https://pp.userap...821/9qkPqkeaj1k.jpg",
						"width": 200,
						"height": 200
						}, {
						"type": "q",
						"url": "https://pp.userap...822/5OkY1-3fsdY.jpg",
						"width": 320,
						"height": 320
						}, {
						"type": "r",
						"url": "https://pp.userap...823/POeoJyhBFlE.jpg",
						"width": 500,
						"height": 500
						}, {
						"type": "s",
						"url": "https://pp.userap...81d/2pJkucm49mM.jpg",
						"width": 75,
						"height": 75
						}, {
						"type": "x",
						"url": "https://pp.userap...81f/dFfE03PJIJc.jpg",
						"width": 500,
						"height": 500
						}],
						"text": "",
						"date": 1554266366
					},
					"is_favorite": false
				}
			}],
			"conversation_message_id": 304,
			"peer_id": 0,
			"id": 0,
			"update_time": 0
		}, {
		"date": 1554279882,
		"from_id": 150837360,
		"text": "https://volgograd...e27h40-vt-14027052/",
		"attachments": [{
			"type": "link",
			"link": {
				"url": "https://volgograd...e27h40-vt-14027052/",
				"title": "Леруа Мерлен",
				"caption": "volgograd.leroymerlin.ru",
				"description": "Настольная лампа Inspire Пикс 1xE27х40 Вт, металл/пластик, цвет голубой: отзывы, фото, характеристики и калькулятор расчета товара. Леруа Мерлен в Волгограде - это низкие цены каждый день, быстрая доставка и удобный самовывоз.",
				"photo": {
					"id": 456269436,
					"album_id": -26,
					"owner_id": 2000024469,
					"sizes": [{
						"type": "m",
						"url": "https://pp.userap...0b9/MSJ5wYo-g9M.jpg",
						"width": 130,
						"height": 130
					}, {
					"type": "o",
					"url": "https://pp.userap...0bb/wHJXpur9YkA.jpg",
					"width": 130,
					"height": 130
					}, {
					"type": "p",
					"url": "https://pp.userap...0bc/XkitFptLoXI.jpg",
					"width": 200,
					"height": 200
					}, {
					"type": "q",
					"url": "https://pp.userap...0bd/JjexFEbUU2Y.jpg",
					"width": 320,
					"height": 320
					}, {
					"type": "r",
					"url": "https://pp.userap...0be/e0OynFLCZ0k.jpg",
					"width": 500,
					"height": 500
					}, {
					"type": "s",
					"url": "https://pp.userap...0b8/W7pALtIPQSs.jpg",
					"width": 75,
					"height": 75
					}, {
					"type": "x",
					"url": "https://pp.userap...0ba/mTxJdqWKxeA.jpg",
					"width": 500,
					"height": 500
					}],
					"text": "",
					"date": 1554279884
				},
				"is_favorite": false
			}
		}],
		"conversation_message_id": 306,
		"peer_id": 0,
		"id": 0,
		"update_time": 0
		}],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554283363,
		"from_id": 150837360,
		"id": 106804,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Дети с синдромом Дауна, РАС, тугоухостью.",
		"conversation_message_id": 33156,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554283330,
		"from_id": 150837360,
		"id": 106803,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ку! Кто хочет поучаствовать?",
		"conversation_message_id": 33155,
		"fwd_messages": [{
			"date": 1554281843,
			"from_id": 150837360,
			"text": "Нужны волонтёры на мастерскую - чуткие, внимательные, общительные, тактичные студенты, ответственные, которым было бы полезно и интересно взаимодействие с особенными детьми в рамках анимационной мастерской, для возможной помощи в выполнении заданий особенными детками, других моментах во время занятий. Нужно 5 человек. 
			Расписание будет таким: 
			4 апреля - 1 занятие - 16:00 - 18:00; 
			5 апреля - 1 занятия - 16:00 - 18:00; 
			6 апреля - 2 занятия - 11:00 - 13:00, 16:00 - 18:00; 
			7 апреля - 1 занятие - 11:00 - 13:00 

			Есть ребята, которые смогут быть тьютерами, среди ваших знакомых, НЕ родители участников? Возможна оплата.",
			"attachments": [],
			"conversation_message_id": 67,
			"peer_id": 0,
			"id": 0,
			"update_time": 0
		}, {
		"date": 1554283278,
		"from_id": 150837360,
		"text": "Спасибо! Будет здорово, если тьютерами станут те, кто имеет опыт общения с такими ребятами.",
		"attachments": [],
		"conversation_message_id": 69,
		"peer_id": 0,
		"id": 0,
		"update_time": 0
		}],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554282487,
		"from_id": 1302931,
		"id": 106800,
		"out": 0,
		"peer_id": 2000000071,
		"text": "https://vk.com/al...и просто красота же",
		"conversation_message_id": 33154,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"update_time": 1554282494
		}, {
		"date": 1554282170,
		"from_id": 85504912,
		"id": 106794,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Ещё бы, без носа.",
		"conversation_message_id": 33153,
		"fwd_messages": [],
		"important": false,
		"random_id": 1617027645,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554281156,
		"from_id": 12318524,
		"id": 106788,
		"out": 0,
		"peer_id": 2000000071,
		"text": "&#128513;",
		"conversation_message_id": 33152,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554280724,
		"from_id": 1302931,
		"id": 106787,
		"out": 0,
		"peer_id": 2000000071,
		"text": "она как будто поет)",
		"conversation_message_id": 33151,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456244057,
				"album_id": -3,
				"owner_id": 1302931,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...b61/aN1yq9KwiLc.jpg",
					"width": 101,
					"height": 130
				}, {
				"type": "o",
				"url": "https://pp.userap...b66/rZv4ZBC6IbA.jpg",
				"width": 130,
				"height": 168
				}, {
				"type": "p",
				"url": "https://pp.userap...b67/ZN8BjYifd7o.jpg",
				"width": 200,
				"height": 258
				}, {
				"type": "q",
				"url": "https://pp.userap...b68/QE4dU13lrbE.jpg",
				"width": 320,
				"height": 413
				}, {
				"type": "r",
				"url": "https://pp.userap...b69/iyFjJ88kaaU.jpg",
				"width": 510,
				"height": 659
				}, {
				"type": "s",
				"url": "https://pp.userap...b60/hc6xUIOc728.jpg",
				"width": 58,
				"height": 75
				}, {
				"type": "w",
				"url": "https://pp.userap...b65/1cFSkUR3OyE.jpg",
				"width": 1621,
				"height": 2093
				}, {
				"type": "x",
				"url": "https://pp.userap...b62/cEelg-eOQms.jpg",
				"width": 468,
				"height": 604
				}, {
				"type": "y",
				"url": "https://pp.userap...b63/RMXPrJybGGg.jpg",
				"width": 625,
				"height": 807
				}, {
				"type": "z",
				"url": "https://pp.userap...b64/HvPYIfdgOcg.jpg",
				"width": 836,
				"height": 1080
				}],
				"text": "",
				"date": 1554280724,
				"access_key": "1affdec5d7a55de232"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554269995,
		"from_id": 1302931,
		"id": 106783,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33150,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "sticker",
			"sticker": {
				"product_id": 272,
				"sticker_id": 8780,
				"images": [{
					"url": "https://vk.com/sticker/1-8780-64-7",
					"width": 64,
					"height": 64
				}, {
				"url": "https://vk.com/sticker/1-8780-128-7",
				"width": 128,
				"height": 128
				}, {
				"url": "https://vk.com/sticker/1-8780-256-7",
				"width": 256,
				"height": 256
				}, {
				"url": "https://vk.com/sticker/1-8780-352-7",
				"width": 352,
				"height": 352
				}, {
				"url": "https://vk.com/sticker/1-8780-512-7",
				"width": 512,
				"height": 512
				}],
				"images_with_background": [{
					"url": "https://vk.com/sticker/1-8780-64b-7",
					"width": 64,
					"height": 64
				}, {
				"url": "https://vk.com/sticker/1-8780-128b-7",
				"width": 128,
				"height": 128
				}, {
				"url": "https://vk.com/sticker/1-8780-256b-7",
				"width": 256,
				"height": 256
				}, {
				"url": "https://vk.com/sticker/1-8780-352b-7",
				"width": 352,
				"height": 352
				}, {
				"url": "https://vk.com/sticker/1-8780-512b-7",
				"width": 512,
				"height": 512
				}],
				"animation_url": "https://vk.com/im...8780/animation.json"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554269810,
		"from_id": 3772019,
		"id": 106782,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А это я",
		"conversation_message_id": 33149,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554269806,
		"from_id": 3772019,
		"id": 106781,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Актуально для всех, кому приходится делать тестовые задания",
		"conversation_message_id": 33148,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554269785,
		"from_id": 3772019,
		"id": 106780,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33147,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 4149,
				"from_id": 1675874,
				"to_id": 1675874,
				"date": 1554244410,
				"post_type": "post",
				"text": "В последний раз я делала тестовое два года назад. Меня взяли. 

				В последний раз отказывалась его делать — две недели назад. Задание было нормальное, но я выбрала подготовиться к выступлению. А не вот это вот всё... 

				Я не люблю тестовые. Не знаю, в какой бубен постучать, чтобы убедить себя в их важности, нужности и незаменимости. 

				Стучу в этот бубен. Вдруг поможет?",
				"attachments": [{
					"type": "link",
					"link": {
						"url": "https://m.vk.com/...ovoe-zadanie-ne-zlo",
						"title": "Тестовое задание — не зло",
						"caption": "m.vk.com",
						"description": "Статья",
						"photo": {
							"id": 456245520,
							"album_id": -66,
							"owner_id": 1675874,
							"sizes": [{
								"type": "m",
								"url": "https://pp.userap...cf2/gNON7GDeaIU.jpg",
								"width": 130,
								"height": 87
							}, {
							"type": "o",
							"url": "https://pp.userap...cf7/FpOWrX-4ge8.jpg",
							"width": 130,
							"height": 87
							}, {
							"type": "p",
							"url": "https://pp.userap...cf8/2g2jCO9uXLU.jpg",
							"width": 200,
							"height": 133
							}, {
							"type": "q",
							"url": "https://pp.userap...cf9/EQLPRrxq4w0.jpg",
							"width": 320,
							"height": 213
							}, {
							"type": "r",
							"url": "https://pp.userap...cfa/oaP7ZHxXJsM.jpg",
							"width": 510,
							"height": 340
							}, {
							"type": "s",
							"url": "https://pp.userap...cf1/PnXWIY_wsAg.jpg",
							"width": 75,
							"height": 50
							}, {
							"type": "w",
							"url": "https://pp.userap...cf6/cAupn5yRNmI.jpg",
							"width": 1500,
							"height": 1000
							}, {
							"type": "x",
							"url": "https://pp.userap...cf3/LsZOBEuMA-Y.jpg",
							"width": 604,
							"height": 403
							}, {
							"type": "y",
							"url": "https://pp.userap...cf4/2LumaIJArZY.jpg",
							"width": 807,
							"height": 538
							}, {
							"type": "z",
							"url": "https://pp.userap...cf5/CzSd_Ia0ZtA.jpg",
							"width": 1280,
							"height": 853
							}],
							"text": "",
							"date": 1554242710
						},
						"button": {
							"title": "Читать",
							"action": {
								"type": "open_url",
								"url": "https://m.vk.com/...ovoe-zadanie-ne-zlo"
							}
						}
					}
				}],
				"post_source": {
					"type": "vk"
				},
				"comments": {
					"count": 0,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 17,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 0,
					"user_reposted": 0
				},
				"views": {
					"count": 183
				},
				"is_favorite": false,
				"access_key": "206051c4f686fc57b2"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554232510,
		"from_id": 9889375,
		"id": 106770,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Интернет состоит на 99% из чьих-то выдумок и откровенных фальсификаций. Цензуры-то нет...
		Вот каждый диванный идиот и стремится показать свою "гениальность" всем!",
		"conversation_message_id": 33146,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554231985,
		"from_id": 933479,
		"id": 106769,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Думаешь, не правда?",
		"conversation_message_id": 33145,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554230933,
			"from_id": 9889375,
			"text": "Первый раз слышу термин "загрязнение желудка"... &#128527;
			И 22 кг мусора для объемов кита, это как-то маловато.",
			"attachments": [],
			"conversation_message_id": 33144,
			"peer_id": 2000000071,
			"id": 106768,
			"update_time": 0
		}
		}, {
		"date": 1554230933,
		"from_id": 9889375,
		"id": 106768,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Первый раз слышу термин "загрязнение желудка"... &#128527;
		И 22 кг мусора для объемов кита, это как-то маловато.",
		"conversation_message_id": 33144,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554219432,
			"from_id": 1302931,
			"text": "",
			"attachments": [{
				"type": "wall",
				"wall": {
					"id": 349395,
					"from_id": -1672730,
					"to_id": -1672730,
					"date": 1554218223,
					"post_type": "post",
					"text": "По предварительным данным, самка умерла из&#8209;за загрязнения желудка. В ее теле обнаружили мусорные мешки, рыболовные сети и упаковку из-под жидкости для стиральной машины.",
					"marked_as_ads": 0,
					"attachments": [{
						"type": "link",
						"link": {
							"url": "http://amp.gs/RmDa",
							"title": "В Италии на берег выбросило мертвую самку кита. В ее желудке нашли 22 килограмма пластика",
							"caption": "amp.gs",
							"description": "На берег итальянской Сардинии выбросило труп беременной самки кита. В ее желудке нашли 22 килограмма пластика, пишет CNN.",
							"photo": {
								"id": 456269411,
								"album_id": -28,
								"owner_id": 2000024215,
								"sizes": [{
									"type": "k",
									"url": "https://pp.userap...b1d/50zX_3ZDJ8I.jpg",
									"width": 1074,
									"height": 480
								}, {
								"type": "l",
								"url": "https://pp.userap...b1c/UClHlEneDjo.jpg",
								"width": 537,
								"height": 240
								}, {
								"type": "m",
								"url": "https://pp.userap...b19/xdf9UpY6A2o.jpg",
								"width": 130,
								"height": 70
								}, {
								"type": "p",
								"url": "https://pp.userap...b1b/Dufu4sNHuNw.jpg",
								"width": 260,
								"height": 140
								}, {
								"type": "s",
								"url": "https://pp.userap...b18/sxNGuBcWgIY.jpg",
								"width": 75,
								"height": 35
								}, {
								"type": "x",
								"url": "https://pp.userap...b1a/mbi_fW8G_Lw.jpg",
								"width": 150,
								"height": 80
								}],
								"text": "",
								"date": 1554218228
							},
							"is_favorite": false
						}
					}],
					"post_source": {
						"type": "api"
					},
					"comments": {
						"count": 4,
						"can_post": 1,
						"groups_can_post": true
					},
					"likes": {
						"count": 45,
						"user_likes": 0,
						"can_like": 1,
						"can_publish": 1
					},
					"reposts": {
						"count": 7,
						"user_reposted": 0
					},
					"views": {
						"count": 7321
					},
					"is_favorite": false,
					"access_key": "61a7cf96895957db1a"
				}
			}],
			"conversation_message_id": 33142,
			"peer_id": 2000000071,
			"id": 106762,
			"update_time": 0
		}
		}, {
		"date": 1554221169,
		"from_id": 1302931,
		"id": 106763,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33143,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 4446,
				"from_id": -90065320,
				"to_id": -90065320,
				"date": 1554220460,
				"post_type": "post",
				"text": "Простые весенние радости 
				#kosmonozhka #космоножка",
				"marked_as_ads": 0,
				"attachments": [{
					"type": "photo",
					"photo": {
						"id": 456240276,
						"album_id": -7,
						"owner_id": -90065320,
						"user_id": 100,
						"sizes": [{
							"type": "m",
							"url": "https://pp.userap...df9/RHLuIJv3Pfg.jpg",
							"width": 130,
							"height": 95
						}, {
						"type": "o",
						"url": "https://pp.userap...dfe/umHMT9Ijg7A.jpg",
						"width": 130,
						"height": 95
						}, {
						"type": "p",
						"url": "https://pp.userap...dff/8IidaJrghL4.jpg",
						"width": 200,
						"height": 146
						}, {
						"type": "q",
						"url": "https://pp.userap...e00/rFWdXVqFA0Y.jpg",
						"width": 320,
						"height": 234
						}, {
						"type": "r",
						"url": "https://pp.userap...e01/f3VBGUIUTVE.jpg",
						"width": 510,
						"height": 373
						}, {
						"type": "s",
						"url": "https://pp.userap...df8/8nPJrnM-Vmw.jpg",
						"width": 75,
						"height": 55
						}, {
						"type": "w",
						"url": "https://pp.userap...dfd/aoJfORNSYZY.jpg",
						"width": 2560,
						"height": 1875
						}, {
						"type": "x",
						"url": "https://pp.userap...dfa/pO1-K4FvRh0.jpg",
						"width": 604,
						"height": 442
						}, {
						"type": "y",
						"url": "https://pp.userap...dfb/yUceFEVJ_so.jpg",
						"width": 807,
						"height": 591
						}, {
						"type": "z",
						"url": "https://pp.userap...dfc/Log0pXwnJd0.jpg",
						"width": 1280,
						"height": 937
						}],
						"text": "",
						"date": 1554220460,
						"access_key": "4fb1ee605d7b863bf2"
					}
				}, {
				"type": "photo",
				"photo": {
					"id": 456240277,
					"album_id": -7,
					"owner_id": -90065320,
					"user_id": 100,
					"sizes": [{
						"type": "m",
						"url": "https://pp.userap...ddb/U1XvPLXdiFg.jpg",
						"width": 130,
						"height": 95
					}, {
					"type": "o",
					"url": "https://pp.userap...de0/RCPWv3yxry8.jpg",
					"width": 130,
					"height": 95
					}, {
					"type": "p",
					"url": "https://pp.userap...de1/rzQYyu3Madw.jpg",
					"width": 200,
					"height": 146
					}, {
					"type": "q",
					"url": "https://pp.userap...de2/7aXLWBI22IE.jpg",
					"width": 320,
					"height": 234
					}, {
					"type": "r",
					"url": "https://pp.userap...de3/nYFzNCuVfVI.jpg",
					"width": 510,
					"height": 372
					}, {
					"type": "s",
					"url": "https://pp.userap...dda/rknHYULrqPk.jpg",
					"width": 75,
					"height": 55
					}, {
					"type": "w",
					"url": "https://pp.userap...ddf/FrnicEZU6KQ.jpg",
					"width": 2560,
					"height": 1868
					}, {
					"type": "x",
					"url": "https://pp.userap...ddc/XuAQxM5sqMk.jpg",
					"width": 604,
					"height": 441
					}, {
					"type": "y",
					"url": "https://pp.userap...ddd/bOMvT5SOumM.jpg",
					"width": 807,
					"height": 589
					}, {
					"type": "z",
					"url": "https://pp.userap...dde/vkcnRINAidU.jpg",
					"width": 1280,
					"height": 934
					}],
					"text": "",
					"date": 1554220460,
					"access_key": "1c14f948a041e74e90"
				}
				}, {
				"type": "photo",
				"photo": {
					"id": 456240278,
					"album_id": -7,
					"owner_id": -90065320,
					"user_id": 100,
					"sizes": [{
						"type": "m",
						"url": "https://pp.userap...de5/2krG6fKpD6M.jpg",
						"width": 130,
						"height": 93
					}, {
					"type": "o",
					"url": "https://pp.userap...dea/gKfwhVZg8zU.jpg",
					"width": 130,
					"height": 93
					}, {
					"type": "p",
					"url": "https://pp.userap...deb/HV2WX_fXfr0.jpg",
					"width": 200,
					"height": 142
					}, {
					"type": "q",
					"url": "https://pp.userap...dec/mEt3IgBMp0o.jpg",
					"width": 320,
					"height": 228
					}, {
					"type": "r",
					"url": "https://pp.userap...ded/AWUdG8-8yJ8.jpg",
					"width": 510,
					"height": 363
					}, {
					"type": "s",
					"url": "https://pp.userap...de4/6gfveJTUs6E.jpg",
					"width": 75,
					"height": 54
					}, {
					"type": "w",
					"url": "https://pp.userap...de9/Gj5jaotOEYM.jpg",
					"width": 2560,
					"height": 1822
					}, {
					"type": "x",
					"url": "https://pp.userap...de6/eJzBntlGY3I.jpg",
					"width": 604,
					"height": 430
					}, {
					"type": "y",
					"url": "https://pp.userap...de7/DIGW7Ba3Btk.jpg",
					"width": 807,
					"height": 574
					}, {
					"type": "z",
					"url": "https://pp.userap...de8/_uAfzzTKI58.jpg",
					"width": 1280,
					"height": 911
					}],
					"text": "",
					"date": 1554220460,
					"access_key": "1b3a1a25614067763e"
				}
				}, {
				"type": "photo",
				"photo": {
					"id": 456240279,
					"album_id": -7,
					"owner_id": -90065320,
					"user_id": 100,
					"sizes": [{
						"type": "m",
						"url": "https://pp.userap...def/oBQ0rj2ePa8.jpg",
						"width": 130,
						"height": 93
					}, {
					"type": "o",
					"url": "https://pp.userap...df4/Veg7WQSBA78.jpg",
					"width": 130,
					"height": 93
					}, {
					"type": "p",
					"url": "https://pp.userap...df5/boXrEB6JueQ.jpg",
					"width": 200,
					"height": 143
					}, {
					"type": "q",
					"url": "https://pp.userap...df6/IWOth-f_11Y.jpg",
					"width": 320,
					"height": 229
					}, {
					"type": "r",
					"url": "https://pp.userap...df7/wxJraosjxLg.jpg",
					"width": 510,
					"height": 365
					}, {
					"type": "s",
					"url": "https://pp.userap...dee/Q4Cs5bdZBks.jpg",
					"width": 75,
					"height": 54
					}, {
					"type": "w",
					"url": "https://pp.userap...df3/SPsbCSQBggY.jpg",
					"width": 2560,
					"height": 1833
					}, {
					"type": "x",
					"url": "https://pp.userap...df0/_616V7GEFdM.jpg",
					"width": 604,
					"height": 433
					}, {
					"type": "y",
					"url": "https://pp.userap...df1/HqGHR0TmRgQ.jpg",
					"width": 807,
					"height": 578
					}, {
					"type": "z",
					"url": "https://pp.userap...df2/hkNO2xQCr2o.jpg",
					"width": 1280,
					"height": 916
					}],
					"text": "",
					"date": 1554220460,
					"access_key": "16fe8fb365cefa3fc0"
				}
				}],
				"post_source": {
					"type": "vk"
				},
				"comments": {
					"count": 14,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 784,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 46,
					"user_reposted": 0
				},
				"views": {
					"count": 23435
				},
				"is_favorite": false,
				"access_key": "df00f26ee2c99aed57"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554219432,
		"from_id": 1302931,
		"id": 106762,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33142,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 349395,
				"from_id": -1672730,
				"to_id": -1672730,
				"date": 1554218223,
				"post_type": "post",
				"text": "По предварительным данным, самка умерла из&#8209;за загрязнения желудка. В ее теле обнаружили мусорные мешки, рыболовные сети и упаковку из-под жидкости для стиральной машины.",
				"marked_as_ads": 0,
				"attachments": [{
					"type": "link",
					"link": {
						"url": "http://amp.gs/RmDa",
						"title": "В Италии на берег выбросило мертвую самку кита. В ее желудке нашли 22 килограмма пластика",
						"caption": "amp.gs",
						"description": "На берег итальянской Сардинии выбросило труп беременной самки кита. В ее желудке нашли 22 килограмма пластика, пишет CNN.",
						"photo": {
							"id": 456269411,
							"album_id": -28,
							"owner_id": 2000024215,
							"sizes": [{
								"type": "k",
								"url": "https://pp.userap...b1d/50zX_3ZDJ8I.jpg",
								"width": 1074,
								"height": 480
							}, {
							"type": "l",
							"url": "https://pp.userap...b1c/UClHlEneDjo.jpg",
							"width": 537,
							"height": 240
							}, {
							"type": "m",
							"url": "https://pp.userap...b19/xdf9UpY6A2o.jpg",
							"width": 130,
							"height": 70
							}, {
							"type": "p",
							"url": "https://pp.userap...b1b/Dufu4sNHuNw.jpg",
							"width": 260,
							"height": 140
							}, {
							"type": "s",
							"url": "https://pp.userap...b18/sxNGuBcWgIY.jpg",
							"width": 75,
							"height": 35
							}, {
							"type": "x",
							"url": "https://pp.userap...b1a/mbi_fW8G_Lw.jpg",
							"width": 150,
							"height": 80
							}],
							"text": "",
							"date": 1554218228
						},
						"is_favorite": false
					}
				}],
				"post_source": {
					"type": "api"
				},
				"comments": {
					"count": 4,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 45,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 7,
					"user_reposted": 0
				},
				"views": {
					"count": 7321
				},
				"is_favorite": false,
				"access_key": "61a7cf96895957db1a"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554119405,
		"from_id": 789684,
		"id": 106721,
		"out": 0,
		"peer_id": 2000000071,
		"text": "&#129315;&#129315;&#129315;",
		"conversation_message_id": 33141,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554109682,
			"from_id": 933479,
			"text": "",
			"attachments": [],
			"fwd_messages": [{
				"date": 1554109669,
				"from_id": 933479,
				"text": "Вы мой самый любимый чатик! С праздником вас!",
				"attachments": [],
				"conversation_message_id": 9,
				"peer_id": 85504912,
				"id": 51631,
				"update_time": 0
			}],
			"conversation_message_id": 33136,
			"peer_id": 2000000071,
			"id": 106715,
			"update_time": 0
		}
		}, {
		"date": 1554114803,
		"from_id": 9889375,
		"id": 106720,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33140,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "sticker",
			"sticker": {
				"product_id": 141,
				"sticker_id": 4394,
				"images": [{
					"url": "https://vk.com/sticker/1-4394-64-7",
					"width": 64,
					"height": 64
				}, {
				"url": "https://vk.com/sticker/1-4394-128-7",
				"width": 128,
				"height": 128
				}, {
				"url": "https://vk.com/sticker/1-4394-256-7",
				"width": 256,
				"height": 256
				}, {
				"url": "https://vk.com/sticker/1-4394-352-7",
				"width": 352,
				"height": 352
				}, {
				"url": "https://vk.com/sticker/1-4394-512-7",
				"width": 512,
				"height": 512
				}],
				"images_with_background": [{
					"url": "https://vk.com/sticker/1-4394-64b-7",
					"width": 64,
					"height": 64
				}, {
				"url": "https://vk.com/sticker/1-4394-128b-7",
				"width": 128,
				"height": 128
				}, {
				"url": "https://vk.com/sticker/1-4394-256b-7",
				"width": 256,
				"height": 256
				}, {
				"url": "https://vk.com/sticker/1-4394-352b-7",
				"width": 352,
				"height": 352
				}, {
				"url": "https://vk.com/sticker/1-4394-512b-7",
				"width": 512,
				"height": 512
				}]
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554112534,
		"from_id": 1302931,
		"id": 106719,
		"out": 0,
		"peer_id": 2000000071,
		"text": "лучшая новость дня)",
		"conversation_message_id": 33139,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554110201,
		"from_id": 933479,
		"id": 106717,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Спасибо)",
		"conversation_message_id": 33138,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554110189,
		"from_id": 15304482,
		"id": 106716,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Вот так разыграл, пха- ха-ха!!И тебя с первым апреля!!!",
		"conversation_message_id": 33137,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554109682,
		"from_id": 933479,
		"id": 106715,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33136,
		"fwd_messages": [{
			"date": 1554109669,
			"from_id": 933479,
			"text": "Вы мой самый любимый чатик! С праздником вас!",
			"attachments": [],
			"conversation_message_id": 9,
			"peer_id": 85504912,
			"id": 51631,
			"update_time": 0
		}],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554108173,
		"from_id": 9889375,
		"id": 106714,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Не, это не шутка была. 
		А они себя сами называют "пожарные". &#128526;",
		"conversation_message_id": 33135,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554108116,
		"from_id": 14274643,
		"id": 106713,
		"out": 0,
		"peer_id": 2000000071,
		"text": "первого апреля?)",
		"conversation_message_id": 33134,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554108084,
		"from_id": 9889375,
		"id": 106712,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Пожарник - это тот, кто устроил пожар!
		Это мне сотрудник пожарной охраны рассказывал. :)",
		"conversation_message_id": 33133,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554107995,
			"from_id": 14274643,
			"text": "первого апреля пожарнику можно отвечать "хахаха шутник")))",
			"attachments": [],
			"conversation_message_id": 33131,
			"peer_id": 2000000071,
			"id": 106710,
			"update_time": 0
		}
		}, {
		"date": 1554108076,
		"from_id": 14274643,
		"id": 106711,
		"out": 0,
		"peer_id": 2000000071,
		"text": "это так делают бумагу из дерева))",
		"conversation_message_id": 33132,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1554009868,
			"from_id": 1302931,
			"text": "",
			"attachments": [{
				"type": "wall",
				"wall": {
					"id": 15774,
					"from_id": -48127009,
					"to_id": -48127009,
					"date": 1553977427,
					"post_type": "post",
					"text": "",
					"marked_as_ads": 0,
					"attachments": [{
						"type": "video",
						"video": {
							"id": 456239056,
							"owner_id": -48127009,
							"title": "Строгание по японски",
							"duration": 42,
							"description": "",
							"date": 1553977410,
							"comments": 0,
							"views": 3905,
							"width": 480,
							"height": 480,
							"photo_130": "https://pp.userap...15b/WZ6PrJA44aM.jpg",
							"photo_320": "https://pp.userap...159/HGWKuyQXQLo.jpg",
							"photo_800": "https://pp.userap...155/HG0vTIB7GaA.jpg",
							"photo_1280": "https://pp.userap...156/X9s5Xx11uCk.jpg",
							"is_favorite": false,
							"first_frame_320": "https://pp.userap...4b8/RGS2s67XcHY.jpg",
							"first_frame_160": "https://pp.userap...4bb/rOhYwy0fRkI.jpg",
							"first_frame_130": "https://pp.userap...4bc/ge59b0Lkpuo.jpg",
							"first_frame_720": "https://pp.userap...4b9/MFKcHARdHRs.jpg",
							"first_frame_1280": "https://pp.userap...4b7/1RNXQXjEMnQ.jpg",
							"first_frame_800": "https://pp.userap...4b6/i9eH48ruLmc.jpg",
							"access_key": "2bf83a792a267077bd",
							"can_add": 1,
							"track_code": "video_b624235dsLO3QU6qjgoGne5mlwYCpdv9VQzJg8l-kxv2eJJCGCvtka9CQa-8PQ"
						}
					}],
					"post_source": {
						"type": "vk"
					},
					"comments": {
						"count": 5,
						"can_post": 1,
						"groups_can_post": true
					},
					"likes": {
						"count": 101,
						"user_likes": 0,
						"can_like": 1,
						"can_publish": 1
					},
					"reposts": {
						"count": 3,
						"user_reposted": 0
					},
					"views": {
						"count": 8972
					},
					"is_favorite": false,
					"access_key": "57cb94f44f0c910a1b"
				}
			}],
			"conversation_message_id": 33117,
			"peer_id": 2000000071,
			"id": 106684,
			"update_time": 0
		}
		}, {
		"date": 1554107995,
		"from_id": 14274643,
		"id": 106710,
		"out": 0,
		"peer_id": 2000000071,
		"text": "первого апреля пожарнику можно отвечать "хахаха шутник")))",
		"conversation_message_id": 33131,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554097640,
		"from_id": 190348091,
		"id": 106709,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Вчера был март, мы успели)) папа пугает вечно нас штрафами. Но пока все обходилось)",
		"conversation_message_id": 33130,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554097207,
		"from_id": 1334105,
		"id": 106708,
		"out": 0,
		"peer_id": 2000000071,
		"text": "С первого апреля до 31 октября за это штраф пять тышь",
		"conversation_message_id": 33129,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554093425,
		"from_id": 1334105,
		"id": 106707,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Аккуратнее с кострами пожалуйста",
		"conversation_message_id": 33128,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554054867,
		"from_id": 12318524,
		"id": 106702,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33127,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456241740,
				"album_id": -3,
				"owner_id": 12318524,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...5e5/S1NPxoQYilU.jpg",
					"width": 97,
					"height": 130
				}, {
				"type": "o",
				"url": "https://pp.userap...5ea/6C9wlrA1PCU.jpg",
				"width": 130,
				"height": 173
				}, {
				"type": "p",
				"url": "https://pp.userap...5eb/gj8XVzDMkyM.jpg",
				"width": 200,
				"height": 267
				}, {
				"type": "q",
				"url": "https://pp.userap...5ec/59TsN-QxyVQ.jpg",
				"width": 320,
				"height": 427
				}, {
				"type": "r",
				"url": "https://pp.userap...5ed/hO-AUmOW0a4.jpg",
				"width": 510,
				"height": 680
				}, {
				"type": "s",
				"url": "https://pp.userap...5e4/nS1b6uwX_m0.jpg",
				"width": 56,
				"height": 75
				}, {
				"type": "w",
				"url": "https://pp.userap...5e9/yNe2BH3SOuI.jpg",
				"width": 1200,
				"height": 1600
				}, {
				"type": "x",
				"url": "https://pp.userap...5e6/28IV_ZyzCwQ.jpg",
				"width": 453,
				"height": 604
				}, {
				"type": "y",
				"url": "https://pp.userap...5e7/WDOwNDxa0l8.jpg",
				"width": 605,
				"height": 807
				}, {
				"type": "z",
				"url": "https://pp.userap...5e8/PM86R1ag-9Q.jpg",
				"width": 810,
				"height": 1080
				}],
				"text": "",
				"date": 1554054865,
				"access_key": "a1db81c2320d627208"
			}
		}, {
		"type": "photo",
		"photo": {
			"id": 456241741,
			"album_id": -3,
			"owner_id": 12318524,
			"sizes": [{
				"type": "m",
				"url": "https://pp.userap...254/ygTmxsbBtJY.jpg",
				"width": 97,
				"height": 130
			}, {
			"type": "o",
			"url": "https://pp.userap...259/IC0DMEg1D20.jpg",
			"width": 130,
			"height": 173
			}, {
			"type": "p",
			"url": "https://pp.userap...25a/6DYp5UqeyAk.jpg",
			"width": 200,
			"height": 267
			}, {
			"type": "q",
			"url": "https://pp.userap...25b/-S8SJBzlKbU.jpg",
			"width": 320,
			"height": 427
			}, {
			"type": "r",
			"url": "https://pp.userap...25c/jppgbbZTsaQ.jpg",
			"width": 510,
			"height": 680
			}, {
			"type": "s",
			"url": "https://pp.userap...253/XTFHe4qHaAo.jpg",
			"width": 56,
			"height": 75
			}, {
			"type": "w",
			"url": "https://pp.userap...258/H2y03i9bmqI.jpg",
			"width": 1200,
			"height": 1600
			}, {
			"type": "x",
			"url": "https://pp.userap...255/uxmjxlbsP-k.jpg",
			"width": 453,
			"height": 604
			}, {
			"type": "y",
			"url": "https://pp.userap...256/JEQK1zHjFLc.jpg",
			"width": 605,
			"height": 807
			}, {
			"type": "z",
			"url": "https://pp.userap...257/_aUdMF7ek2E.jpg",
			"width": 810,
			"height": 1080
			}],
			"text": "",
			"date": 1554054866,
			"access_key": "b62688a7123e9d4f59"
		}
		}],
		"is_hidden": false
		}, {
		"date": 1554032555,
		"from_id": 1302931,
		"id": 106699,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33126,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "link",
			"link": {
				"url": "https://mel.fm/wo...s/6294375-city_farm",
				"title": "Как сити-фермеры выращивают руколу в подвалах",
				"caption": "mel.fm",
				"description": "И почему этому стоит научиться",
				"photo": {
					"id": 456265551,
					"album_id": -25,
					"owner_id": 2000023366,
					"sizes": [{
						"type": "l",
						"url": "https://pp.userap...fc3/Sf8KtHZYqXg.jpg",
						"width": 537,
						"height": 240
					}, {
					"type": "m",
					"url": "https://pp.userap...fbd/ZcvNjltaj_k.jpg",
					"width": 130,
					"height": 68
					}, {
					"type": "o",
					"url": "https://pp.userap...fbf/ca577xfOZCY.jpg",
					"width": 130,
					"height": 87
					}, {
					"type": "p",
					"url": "https://pp.userap...fc0/grTlPeygwps.jpg",
					"width": 200,
					"height": 133
					}, {
					"type": "q",
					"url": "https://pp.userap...fc1/vj7Xww5Mq-g.jpg",
					"width": 320,
					"height": 213
					}, {
					"type": "r",
					"url": "https://pp.userap...fc2/nhq-I1F278E.jpg",
					"width": 510,
					"height": 315
					}, {
					"type": "s",
					"url": "https://pp.userap...fbc/iO2R2tGhLPs.jpg",
					"width": 75,
					"height": 39
					}, {
					"type": "x",
					"url": "https://pp.userap...fbe/mIEWfwwICdI.jpg",
					"width": 600,
					"height": 315
					}],
					"text": "",
					"date": 1553955629
				},
				"is_favorite": false
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554021628,
		"from_id": 150837360,
		"id": 106692,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33125,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 121838,
				"from_id": -68171501,
				"to_id": -68171501,
				"date": 1554020099,
				"post_type": "post",
				"text": "",
				"marked_as_ads": 0,
				"attachments": [{
					"type": "photo",
					"photo": {
						"id": 456253604,
						"album_id": -7,
						"owner_id": -68171501,
						"user_id": 100,
						"sizes": [{
							"type": "m",
							"url": "https://pp.userap...7c2/WV34Udr2x6o.jpg",
							"width": 130,
							"height": 115
						}, {
						"type": "o",
						"url": "https://pp.userap...7c5/71dTKfB3t9s.jpg",
						"width": 130,
						"height": 115
						}, {
						"type": "p",
						"url": "https://pp.userap...7c6/BphRXU9GPRU.jpg",
						"width": 200,
						"height": 177
						}, {
						"type": "q",
						"url": "https://pp.userap...7c7/_ma59QSk2TI.jpg",
						"width": 320,
						"height": 282
						}, {
						"type": "r",
						"url": "https://pp.userap...7c8/HWP1MXfHG20.jpg",
						"width": 510,
						"height": 450
						}, {
						"type": "s",
						"url": "https://pp.userap...7c1/NC3ws054LoU.jpg",
						"width": 75,
						"height": 66
						}, {
						"type": "x",
						"url": "https://pp.userap...7c3/pDbaH_Ms5PI.jpg",
						"width": 604,
						"height": 533
						}, {
						"type": "y",
						"url": "https://pp.userap...7c4/7-kR2tSGTfQ.jpg",
						"width": 750,
						"height": 662
						}],
						"text": "",
						"date": 1554020099,
						"post_id": 121838,
						"access_key": "9f3b03676ec214b06c"
					}
				}],
				"post_source": {
					"type": "api",
					"platform": "iphone"
				},
				"comments": {
					"count": 33,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 763,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 34,
					"user_reposted": 0
				},
				"views": {
					"count": 22293
				},
				"is_favorite": false,
				"access_key": "7b1fb407f0fe246e12"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554019561,
		"from_id": 1302931,
		"id": 106691,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33124,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "audio",
			"audio": {
				"id": 456270045,
				"owner_id": 474499267,
				"artist": "Хадн Дадн",
				"title": "Мы сегодня дома",
				"duration": 204,
				"date": 1530439736,
				"url": "https://cs7-1v4.v...defG91PDgoSH3crHJ6Q",
				"is_hq": true,
				"track_code": "bb18d354FhCKRPAlB33CSod-C5I",
				"is_explicit": false,
				"main_artists": [{
					"name": "Хадн Дадн",
					"id": "7376087147778685014",
					"domain": "7376087147778685014"
				}]
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554019395,
		"from_id": 12318524,
		"id": 106690,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Мы за более дикую природу )",
		"conversation_message_id": 33123,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554019356,
		"from_id": 7234126,
		"id": 106689,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Мы поехали в парк баку",
		"conversation_message_id": 33122,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554016531,
		"from_id": 12318524,
		"id": 106688,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А кто сегодня за волгу гулять ?",
		"conversation_message_id": 33121,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554014344,
		"from_id": 12318524,
		"id": 106687,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Просто впечатлило )",
		"conversation_message_id": 33120,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554011382,
		"from_id": 9889375,
		"id": 106686,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Интересовался японской столяркой в детстве?",
		"conversation_message_id": 33119,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554009934,
		"from_id": 12318524,
		"id": 106685,
		"out": 0,
		"peer_id": 2000000071,
		"text": "О видео из моего детства )))",
		"conversation_message_id": 33118,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554009868,
		"from_id": 1302931,
		"id": 106684,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33117,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 15774,
				"from_id": -48127009,
				"to_id": -48127009,
				"date": 1553977427,
				"post_type": "post",
				"text": "",
				"marked_as_ads": 0,
				"attachments": [{
					"type": "video",
					"video": {
						"id": 456239056,
						"owner_id": -48127009,
						"title": "Строгание по японски",
						"duration": 42,
						"description": "",
						"date": 1553977410,
						"comments": 0,
						"views": 3905,
						"width": 480,
						"height": 480,
						"photo_130": "https://pp.userap...15b/WZ6PrJA44aM.jpg",
						"photo_320": "https://pp.userap...159/HGWKuyQXQLo.jpg",
						"photo_800": "https://pp.userap...155/HG0vTIB7GaA.jpg",
						"photo_1280": "https://pp.userap...156/X9s5Xx11uCk.jpg",
						"is_favorite": false,
						"first_frame_320": "https://pp.userap...4b8/RGS2s67XcHY.jpg",
						"first_frame_160": "https://pp.userap...4bb/rOhYwy0fRkI.jpg",
						"first_frame_130": "https://pp.userap...4bc/ge59b0Lkpuo.jpg",
						"first_frame_720": "https://pp.userap...4b9/MFKcHARdHRs.jpg",
						"first_frame_1280": "https://pp.userap...4b7/1RNXQXjEMnQ.jpg",
						"first_frame_800": "https://pp.userap...4b6/i9eH48ruLmc.jpg",
						"access_key": "2bf83a792a267077bd",
						"can_add": 1,
						"track_code": "video_6763d2b2EYvaVDXf0GVVc47zGDAcfikriR2ajIoGy4Z8ZnpQrwFMqcJXOtriUg"
					}
				}],
				"post_source": {
					"type": "vk"
				},
				"comments": {
					"count": 5,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 101,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 3,
					"user_reposted": 0
				},
				"views": {
					"count": 8972
				},
				"is_favorite": false,
				"access_key": "57cb94f44f0c910a1b"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1554007981,
		"from_id": 1334105,
		"id": 106683,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Доброе утро, дорогуши",
		"conversation_message_id": 33116,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1554007879,
		"from_id": 1334105,
		"id": 106682,
		"out": 0,
		"peer_id": 2000000071,
		"text": "&#128525;",
		"conversation_message_id": 33115,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1553955288,
			"from_id": 12318524,
			"text": "Привет из",
			"attachments": [{
				"type": "photo",
				"photo": {
					"id": 456241739,
					"album_id": -3,
					"owner_id": 12318524,
					"sizes": [{
						"type": "m",
						"url": "https://pp.userap...3a6/JRVDlbM-Ewg.jpg",
						"width": 97,
						"height": 130
					}, {
					"type": "o",
					"url": "https://pp.userap...3ab/qIIJPFrrV1c.jpg",
					"width": 130,
					"height": 173
					}, {
					"type": "p",
					"url": "https://pp.userap...3ac/Ijh0UkioIDE.jpg",
					"width": 200,
					"height": 267
					}, {
					"type": "q",
					"url": "https://pp.userap...3ad/WlUrlT7L7UE.jpg",
					"width": 320,
					"height": 427
					}, {
					"type": "r",
					"url": "https://pp.userap...3ae/VnB4ZKIuxhY.jpg",
					"width": 510,
					"height": 680
					}, {
					"type": "s",
					"url": "https://pp.userap...3a5/n-kgmaabUnk.jpg",
					"width": 56,
					"height": 75
					}, {
					"type": "w",
					"url": "https://pp.userap...3aa/FeaW3x39anU.jpg",
					"width": 1200,
					"height": 1600
					}, {
					"type": "x",
					"url": "https://pp.userap...3a7/B9cFe_iNr3o.jpg",
					"width": 453,
					"height": 604
					}, {
					"type": "y",
					"url": "https://pp.userap...3a8/VL5jkVypPgQ.jpg",
					"width": 605,
					"height": 807
					}, {
					"type": "z",
					"url": "https://pp.userap...3a9/CqA4pCwxIqI.jpg",
					"width": 810,
					"height": 1080
					}],
					"text": "",
					"date": 1553955288,
					"access_key": "89b91a85524cc8e1d7"
				}
			}],
			"conversation_message_id": 33101,
			"peer_id": 2000000071,
			"id": 106664,
			"update_time": 0
		}
		}, {
		"date": 1554005282,
		"from_id": 9889375,
		"id": 106681,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А ещё, у цифр горизонт завален!",
		"conversation_message_id": 33114,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553977962,
		"from_id": 2918341,
		"id": 106678,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Боже мой! &#128561;
		Какие чётные цифры!!",
		"conversation_message_id": 33113,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553973856,
		"from_id": 7234126,
		"id": 106677,
		"out": 0,
		"peer_id": 2000000071,
		"text": "&#128514;",
		"conversation_message_id": 33112,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553973832,
		"from_id": 150837360,
		"id": 106676,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Какой кошмар!!! Там совсем не поют.))))",
		"conversation_message_id": 33111,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553965539,
		"from_id": 12318524,
		"id": 106674,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Вкусно - это главное )",
		"conversation_message_id": 33110,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553965397,
		"from_id": 9889375,
		"id": 106673,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Подозреваю, что ещё и ужасно вкусно...&#128546;",
		"conversation_message_id": 33109,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553965343,
		"from_id": 14274643,
		"id": 106672,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Боже мой&#128561; Как ужасно... (направление професии) ))))",
		"conversation_message_id": 33108,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553965302,
		"from_id": 14274643,
		"id": 106671,
		"out": 0,
		"peer_id": 2000000071,
		"text": "это эстафета профессий)))",
		"conversation_message_id": 33107,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553965242,
		"from_id": 9889375,
		"id": 106670,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А стаканчик! &#128576;
		Он-же одноразовый!
		Засоритель природы и убийца деревьев!",
		"conversation_message_id": 33106,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553965173,
		"from_id": 9889375,
		"id": 106669,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Да ваще! Совершенно плоский, невнятный.",
		"conversation_message_id": 33105,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1553965118,
			"from_id": 14274643,
			"text": "Боже мой! &#128561;
			Как ужасно выставлен свет!",
			"attachments": [],
			"conversation_message_id": 33103,
			"peer_id": 2000000071,
			"id": 106667,
			"update_time": 0
		}
		}, {
		"date": 1553965119,
		"from_id": 14274643,
		"id": 106668,
		"out": 0,
		"peer_id": 2000000071,
		"text": ")))))))",
		"conversation_message_id": 33104,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553965118,
		"from_id": 14274643,
		"id": 106667,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Боже мой! &#128561;
		Как ужасно выставлен свет!",
		"conversation_message_id": 33103,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553964758,
		"from_id": 9889375,
		"id": 106666,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Боже мой! &#128561;
		Как ужасно пошлифована столешница!",
		"conversation_message_id": 33102,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553955288,
		"from_id": 12318524,
		"id": 106664,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Привет из",
		"conversation_message_id": 33101,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456241739,
				"album_id": -3,
				"owner_id": 12318524,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...3a6/JRVDlbM-Ewg.jpg",
					"width": 97,
					"height": 130
				}, {
				"type": "o",
				"url": "https://pp.userap...3ab/qIIJPFrrV1c.jpg",
				"width": 130,
				"height": 173
				}, {
				"type": "p",
				"url": "https://pp.userap...3ac/Ijh0UkioIDE.jpg",
				"width": 200,
				"height": 267
				}, {
				"type": "q",
				"url": "https://pp.userap...3ad/WlUrlT7L7UE.jpg",
				"width": 320,
				"height": 427
				}, {
				"type": "r",
				"url": "https://pp.userap...3ae/VnB4ZKIuxhY.jpg",
				"width": 510,
				"height": 680
				}, {
				"type": "s",
				"url": "https://pp.userap...3a5/n-kgmaabUnk.jpg",
				"width": 56,
				"height": 75
				}, {
				"type": "w",
				"url": "https://pp.userap...3aa/FeaW3x39anU.jpg",
				"width": 1200,
				"height": 1600
				}, {
				"type": "x",
				"url": "https://pp.userap...3a7/B9cFe_iNr3o.jpg",
				"width": 453,
				"height": 604
				}, {
				"type": "y",
				"url": "https://pp.userap...3a8/VL5jkVypPgQ.jpg",
				"width": 605,
				"height": 807
				}, {
				"type": "z",
				"url": "https://pp.userap...3a9/CqA4pCwxIqI.jpg",
				"width": 810,
				"height": 1080
				}],
				"text": "",
				"date": 1553955288,
				"access_key": "89b91a85524cc8e1d7"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553946427,
		"from_id": 9889375,
		"id": 106663,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Эх, я бы покоординировал. Но очень занят.",
		"conversation_message_id": 33100,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553943553,
		"from_id": 150837360,
		"id": 106662,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33099,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456243033,
				"album_id": -15,
				"owner_id": 150837360,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...655/Uz_Kxa2296w.jpg",
					"width": 87,
					"height": 130
				}, {
				"type": "o",
				"url": "https://pp.userap...65a/kc0NezOT0dw.jpg",
				"width": 130,
				"height": 195
				}, {
				"type": "p",
				"url": "https://pp.userap...65b/gj6TmPYZzTM.jpg",
				"width": 200,
				"height": 300
				}, {
				"type": "q",
				"url": "https://pp.userap...65c/felY-eW4LMQ.jpg",
				"width": 320,
				"height": 480
				}, {
				"type": "r",
				"url": "https://pp.userap...65d/3by7QvUtV6Q.jpg",
				"width": 510,
				"height": 765
				}, {
				"type": "s",
				"url": "https://pp.userap...654/FkSyBtV316c.jpg",
				"width": 50,
				"height": 75
				}, {
				"type": "w",
				"url": "https://pp.userap...659/3LVC2Qz9Tu8.jpg",
				"width": 960,
				"height": 1440
				}, {
				"type": "x",
				"url": "https://pp.userap...656/AZtq2XWlgRM.jpg",
				"width": 403,
				"height": 604
				}, {
				"type": "y",
				"url": "https://pp.userap...657/j1AtBi9FY1A.jpg",
				"width": 538,
				"height": 807
				}, {
				"type": "z",
				"url": "https://pp.userap...658/1Y7iaQySPoM.jpg",
				"width": 720,
				"height": 1080
				}],
				"text": "",
				"date": 1553672429,
				"access_key": "36e8a18096847ef72f"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553943546,
		"from_id": 150837360,
		"id": 106661,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Друзья, добрый день! Посоветуй, пожалуйста, ответственного координатора, который сможет с 8 по 14 апреля целый рабочий день уделять время проекту, в котором, важно находиться в одном месте каждый день с обедом, ужином. Задачи - общаться, координировать, направлять, решать вопросы на месте. &#128155; Работа оплачивается. Может, кто - то из вас свободен.",
		"conversation_message_id": 33098,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553927027,
		"from_id": 1334105,
		"id": 106653,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Уже смотрел. Ревел. Прям как мы.",
		"conversation_message_id": 33097,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1553851019,
			"from_id": 150837360,
			"text": "Лёша, тебе, думаю, точно понравится.",
			"attachments": [],
			"conversation_message_id": 33085,
			"peer_id": 2000000071,
			"id": 106626,
			"update_time": 0
		}
		}, {
		"date": 1553923072,
		"from_id": 7234126,
		"id": 106650,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Хм )) я написала ему )",
		"conversation_message_id": 33096,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553920843,
		"from_id": 3772019,
		"id": 106649,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33095,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 11316,
				"from_id": 2643072,
				"to_id": 2643072,
				"date": 1553900518,
				"post_type": "post",
				"text": "Друзья мои, а кто живет в Волгограде?
				Я планирую быть там 12го апреля с лекциями :)
				У кого можно переночевать с 11го на 12е? Подскажите вписку пожалуйста :) И буду рад пообщаться!
				Спасибо за репост!
				Ваш Назаров Сергей.",
				"attachments": [{
					"type": "photo",
					"photo": {
						"id": 456243272,
						"album_id": -7,
						"owner_id": 2643072,
						"sizes": [{
							"type": "m",
							"url": "https://pp.userap...50b/MNYnf9YIxBY.jpg",
							"width": 130,
							"height": 85
						}, {
						"type": "o",
						"url": "https://pp.userap...50e/TEHEk99AIEE.jpg",
						"width": 130,
						"height": 87
						}, {
						"type": "p",
						"url": "https://pp.userap...50f/ic_9q3vLCLk.jpg",
						"width": 200,
						"height": 133
						}, {
						"type": "q",
						"url": "https://pp.userap...510/gFtaWZ29P1g.jpg",
						"width": 320,
						"height": 213
						}, {
						"type": "r",
						"url": "https://pp.userap...511/bOeA7bhzfyc.jpg",
						"width": 510,
						"height": 340
						}, {
						"type": "s",
						"url": "https://pp.userap...50a/h5MtJq-ba7g.jpg",
						"width": 75,
						"height": 49
						}, {
						"type": "x",
						"url": "https://pp.userap...50c/PHYDe78Q6Bk.jpg",
						"width": 604,
						"height": 395
						}, {
						"type": "y",
						"url": "https://pp.userap...50d/r1pp6BkuqL0.jpg",
						"width": 692,
						"height": 452
						}],
						"text": "",
						"date": 1553900506,
						"access_key": "adae401fb141c20ddb"
					}
				}],
				"post_source": {
					"type": "vk"
				},
				"comments": {
					"count": 0,
					"can_post": 0,
					"groups_can_post": true
				},
				"likes": {
					"count": 52,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 7,
					"user_reposted": 0
				},
				"views": {
					"count": 2492
				},
				"is_favorite": false,
				"access_key": "78cd6b7b701942fb21"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553869423,
		"from_id": 7234126,
		"id": 106646,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Мы с Паррусом едем!))",
		"conversation_message_id": 33094,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553868244,
		"from_id": 190348091,
		"id": 106645,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А то мы уже уезжать собрались, ты вовремя",
		"conversation_message_id": 33093,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553868222,
		"from_id": 190348091,
		"id": 106644,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Где?)",
		"conversation_message_id": 33092,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553868156,
		"from_id": 7234126,
		"id": 106643,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Я хочу!!!",
		"conversation_message_id": 33091,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553866505,
		"from_id": 12318524,
		"id": 106642,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Друзья, возможно кто-то сейчас в центре и хочет поиграть в каркассона или просто увидеться и почаевничать в хангри ? ) Конечно, Хангри не Охапка ))) а вообще у нас свободный вечер выдался и каркассон под рукой )",
		"conversation_message_id": 33090,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553855799,
		"from_id": 150837360,
		"id": 106639,
		"out": 0,
		"peer_id": 2000000071,
		"text": "&#9786;",
		"conversation_message_id": 33089,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553854750,
		"from_id": 156067771,
		"id": 106634,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ты знаешь, Жень, мне тоже интересно стало посмотреть этот фильм.)",
		"conversation_message_id": 33088,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553854664,
		"from_id": 156067771,
		"id": 106633,
		"out": 0,
		"peer_id": 2000000071,
		"text": "У вас уже прям весна, прям сухо...",
		"conversation_message_id": 33087,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553854642,
		"from_id": 9889375,
		"id": 106632,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ну вот, началось...",
		"conversation_message_id": 33086,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456241881,
				"album_id": -3,
				"owner_id": 9889375,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...719/U5b7WY5lEBA.jpg",
					"width": 130,
					"height": 97
				}, {
				"type": "o",
				"url": "https://pp.userap...71e/9l4MzJp4SvM.jpg",
				"width": 130,
				"height": 98
				}, {
				"type": "p",
				"url": "https://pp.userap...71f/SH9K5zNnRQI.jpg",
				"width": 200,
				"height": 150
				}, {
				"type": "q",
				"url": "https://pp.userap...720/OopHbU0Yykk.jpg",
				"width": 320,
				"height": 240
				}, {
				"type": "r",
				"url": "https://pp.userap...721/Jeuyx70m2kA.jpg",
				"width": 510,
				"height": 383
				}, {
				"type": "s",
				"url": "https://pp.userap...718/ZZ6iRmF2gDw.jpg",
				"width": 75,
				"height": 56
				}, {
				"type": "w",
				"url": "https://pp.userap...71d/ZHF3KwYL4Ts.jpg",
				"width": 1600,
				"height": 1200
				}, {
				"type": "x",
				"url": "https://pp.userap...71a/F3JAWxNay8c.jpg",
				"width": 604,
				"height": 453
				}, {
				"type": "y",
				"url": "https://pp.userap...71b/A6I4zIe-AzI.jpg",
				"width": 807,
				"height": 605
				}, {
				"type": "z",
				"url": "https://pp.userap...71c/EjAx26D3FIU.jpg",
				"width": 1280,
				"height": 960
				}],
				"text": "",
				"date": 1553854642,
				"access_key": "61dd8648a707a0b656"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553851019,
		"from_id": 150837360,
		"id": 106626,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Лёша, тебе, думаю, точно понравится.",
		"conversation_message_id": 33085,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553851011,
		"from_id": 150837360,
		"id": 106625,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Годнота.",
		"conversation_message_id": 33084,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553851009,
		"from_id": 150837360,
		"id": 106624,
		"out": 0,
		"peer_id": 2000000071,
		"text": "https://www.kinopoisk.ru/film/1040690/",
		"conversation_message_id": 33083,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "video",
			"video": {
				"id": 456239146,
				"owner_id": 150837360,
				"title": "«Середина 90-х» (Mid90s, 2018)",
				"duration": 149,
				"description": "Калифорния, середина 90-х: компакт-диски еще не вытеснили аудио-кассеты, скейт-бордисты еще не засветились на MTV, а малыша Стиви все еще держат за ребенка и мама, и старший брат. Все меняется, когда Стиви принимают во взрослую тусовку скейтеров-отщепенцев, и чтобы доказать свою крутость, ...",
				"date": 1553851010,
				"comments": 0,
				"views": 80,
				"photo_130": "https://pp.userap...9c3/dS41Rh2EqHQ.jpg",
				"photo_320": "https://pp.userap...9c5/wgiasvBvTA0.jpg",
				"photo_800": "https://pp.userap...9c6/lwjimLM0YYo.jpg",
				"is_favorite": false,
				"access_key": "27d8194ad543e06f92",
				"platform": "Kinopoisk",
				"can_add": 0
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553848989,
		"from_id": 12318524,
		"id": 106623,
		"out": 0,
		"peer_id": 2000000071,
		"text": "13% обычно не платится. Я тоже никогда их в ип не платил. Это только если виды деятельности не совпадают. Например, если пекарь получает официальную оплату за что-то совсем другое... за юридическую консультацию например. И то, это если заметят.",
		"conversation_message_id": 33082,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553848818,
		"from_id": 12318524,
		"id": 106622,
		"out": 0,
		"peer_id": 2000000071,
		"text": "24 был несколько лет назад. В 2019 - 36 тыс. Он растет каждый год на 4000",
		"conversation_message_id": 33081,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553845724,
		"from_id": 7234126,
		"id": 106621,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А ещё взнос в год 36 тыс - был несколько лет назад, он сейчас меньше, 24, кажется",
		"conversation_message_id": 33080,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553845693,
		"from_id": 7234126,
		"id": 106620,
		"out": 0,
		"peer_id": 2000000071,
		"text": "И никто из моих знакомых ип",
		"conversation_message_id": 33079,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553845683,
		"from_id": 7234126,
		"id": 106619,
		"out": 0,
		"peer_id": 2000000071,
		"text": "У нас было ип, мы не платили 13 % дополнительно &#128561; никогда",
		"conversation_message_id": 33078,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553844432,
		"from_id": 150837360,
		"id": 106618,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А девочки - ах!",
		"conversation_message_id": 33077,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553844423,
		"from_id": 150837360,
		"id": 106617,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Мужчины, вы такие прекрасные!",
		"conversation_message_id": 33076,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553844347,
		"from_id": 150837360,
		"id": 106616,
		"out": 0,
		"peer_id": 2000000071,
		"text": "О, это все очень полезно. Спасибо, что делитесь. &#128522;",
		"conversation_message_id": 33075,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553844178,
		"from_id": 12318524,
		"id": 106615,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Она определенно там. Внешнее является лишь следствием )",
		"conversation_message_id": 33074,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553844119,
		"from_id": 9889375,
		"id": 106614,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Все забывают о том, что разруху победить сразу не получится. Сначала нужно преодолеть разруху в головах...",
		"conversation_message_id": 33073,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553843947,
		"from_id": 12318524,
		"id": 106613,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Про налоги, Россию и Европу: 
		Например, в скандинавских странах налоги значительно выше, чем в РФ. И люди там готовы платить ещё больше, потому что понимают что сбор налогов - это просто функция государства - перераспределение денег на нужды общества (дороги, школы, больницы и т.д.)

		Думаю всё дело в прозрачности и понимании на что идут деньги. 
		Многим в Волгограде знакома ситуация, что люди платят налоги, коммунальные платежи, а в результате видят убогие дворы с огромными ямами на дорогах, обветшалые здания, разруху даже в центральном районе... 
		От этого и возникают вопросы.",
		"conversation_message_id": 33072,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553843434,
		"from_id": 12318524,
		"id": 106612,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Если человек работает где-то как ИП, то он платит обязательные взносы за себя 36000 руб./год + налог 6% с дохода, если работает по упрощенке. + ежемесячное обслуживание р/с в банке. И если доход получен от вида деятельности не прописанного в егрип предпринимателя, то платится ещё 13% ндфл как у обычного сотрудника.",
		"conversation_message_id": 33071,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553840162,
		"from_id": 7234126,
		"id": 106611,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Да",
		"conversation_message_id": 33070,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553840142,
		"from_id": 9889375,
		"id": 106610,
		"out": 0,
		"peer_id": 2000000071,
		"text": "В смысле, что все сотрудники компании как ИП сотрудничают с этой компанией?",
		"conversation_message_id": 33069,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1553840037,
			"from_id": 7234126,
			"text": "Я где работаю, там все ип в компании, и так много лет уже. В смысле сотрудников",
			"attachments": [],
			"conversation_message_id": 33068,
			"peer_id": 2000000071,
			"id": 106609,
			"update_time": 0
		}
		}, {
		"date": 1553840037,
		"from_id": 7234126,
		"id": 106609,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Я где работаю, там все ип в компании, и так много лет уже. В смысле сотрудников",
		"conversation_message_id": 33068,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553839950,
		"from_id": 9889375,
		"id": 106608,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Блин, а так хочется про политику ответить...&#128530;
		Ладно, давайте про налоги.
		Аня, почему ты задумываешься о регистрации самозанятым? Что тебя побудило интересоваться этим?",
		"conversation_message_id": 33067,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553839705,
		"from_id": 789684,
		"id": 106607,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Я как раз писала)))",
		"conversation_message_id": 33066,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553839693,
		"from_id": 1302931,
		"id": 106606,
		"out": 0,
		"peer_id": 2000000071,
		"text": "все, давайте не про политику",
		"conversation_message_id": 33065,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456244042,
				"album_id": -15,
				"owner_id": 1302931,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...c91/bJUkQRjwMh0.jpg",
					"width": 130,
					"height": 94
				}, {
				"type": "o",
				"url": "https://pp.userap...c95/bFeoZS3FJRo.jpg",
				"width": 130,
				"height": 94
				}, {
				"type": "p",
				"url": "https://pp.userap...c96/J24w01_0gQQ.jpg",
				"width": 200,
				"height": 144
				}, {
				"type": "q",
				"url": "https://pp.userap...c97/tutcSB9L5oY.jpg",
				"width": 320,
				"height": 231
				}, {
				"type": "r",
				"url": "https://pp.userap...c98/mmQr1qZmKv8.jpg",
				"width": 510,
				"height": 368
				}, {
				"type": "s",
				"url": "https://pp.userap...c90/ATP_d3Hfnyc.jpg",
				"width": 75,
				"height": 54
				}, {
				"type": "x",
				"url": "https://pp.userap...c92/mt1cjkzooT8.jpg",
				"width": 604,
				"height": 436
				}, {
				"type": "y",
				"url": "https://pp.userap...c93/hwSzBjNRzXU.jpg",
				"width": 807,
				"height": 583
				}, {
				"type": "z",
				"url": "https://pp.userap...c94/gz4C_3nfzIg.jpg",
				"width": 886,
				"height": 640
				}],
				"text": "",
				"date": 1553837320,
				"access_key": "7282ce9c89eb1e2ad6"
			}
		}, {
		"type": "audio",
		"audio": {
			"id": 456239939,
			"owner_id": 1302931,
			"artist": "Полина Осетинская",
			"title": "Sketch VII",
			"duration": 245,
			"date": 1539698124,
			"url": "https://cs1-69v4....lsCgIbWzQhIwLA0vHOw",
			"genre_id": 1001,
			"is_hq": true,
			"track_code": "3d0cf19dai27h1xIbmSSymbVjdM",
			"is_explicit": false
		}
		}],
		"is_hidden": false
		}, {
		"date": 1553839495,
		"from_id": 1302931,
		"id": 106605,
		"out": 0,
		"peer_id": 2000000071,
		"text": "да, в Росии лучше, чем на Западе обстоят дела с интернетом, онлайн-банкингом и бесплатной медициной. Но хуже - с налогами. Во-первых, у нас скрытых налогов и открытых налогов суммарно набегает 47% (в союзе было 90%, но 47% - это как во Франции). Во-вторых, какой смысл их платить, если все равно разворуют? 
		> Если кто-то хочет пожить как в заграницах, то поздравляю, мы смело идём к этому. - Насколько я понимаю, риторика внешней и внутренней политики РФ сейчас как раз строится от противного, мы идем не в заграницу, а в собственное средневековье. 
		Уйдет Путин - придет другой такой же (или другой, если запрос будет другим). Посмотри видео с политологом Екатериной Шульман на ещенепознере, она подробно отвечает на этот вопрос",
		"conversation_message_id": 33064,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553839182,
		"from_id": 9889375,
		"id": 106604,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Я про пенсию вообще не думаю, т. к. за последние несколько лет всё сильно поменялось, а как дальше будет - вообще не известно!
		Всё больше грамотных людей говорит о том, что сейчас лучше не скрываться от налоговой. Всё больше платежей происходит онлайн. А это значит, что всё можно проследить. 
		Если хотите в дальнейшем работать не по найму а на себя (самозанятый, ИП, ...), то по-любому придется платить налоги, ставить онлайн кассу и пр. Ещё и потому, что всё больше людей регистрируются и требуют от других того-же, иначе у них проблемы с отчетностью.
		Вот я выяснил, что мне как ИП намного лучше привлекать на работу не физлиц, а тоже ИП!

		А любителям попроклинать Путина и порекламировать райскую заграницу, могу сказать следующее. Если кто-то хочет пожить как в заграницах, то поздравляю, мы смело идём к этому. А за такой уровень жизни нужно платить... всем! За границей как-раз все за всё платят, а ещё принято "стучать" на тех, кто не платит! &#128529;
		И ещё, мне очень хочется получить ответ на вопрос - "Если Путина не станет, то кто будет, и что будет, и как будет?" 
		Блин, ну почему тут все имеют твёрдую политическую позицию, но никто не хочет об этом подискутировать? &#128546;

		P. S. 
		Лёша, я помню ты запрещал здесь политические обсуждения, но твоя картинка была расценена мной как временное разрешение. &#128513;
		На этом заканчиваю. Мне ещё кассу надо выбрать, а сегодня на них последний скидочный день.

		P. P. S.
		А ещё, я много смотрю трансляций всяких инфо-предпринимателей из разных уголков планеты. Так выясняется, что в России с интернетом дела обстоят, кажется, лучше, чем в остальном мире! &#128526;",
		"conversation_message_id": 33063,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553838771,
		"from_id": 789684,
		"id": 106603,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Да, пенсия считается очень странно, они забывают с ней про инфляцию, у меня тётя всю жизнь была ип и хорошие делала отчисления и за себя и за сотрудников своих в пенсионный фонд, теперь у неё пенсия 8 тыщ что ли",
		"conversation_message_id": 33062,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553838663,
		"from_id": 7234126,
		"id": 106602,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Реально очень мизерная. Один раз читала статью парень - рассчитал, что если он будет с ип уплачивать этот взнос за пенсию, 25 лет или 30 не помню, и потом сколько будет его пенсия. И сколько будет, если он просто будет в год столько же просто для себя откладывать на счёт столько же лет. Даже с поправкой на инфляцию",
		"conversation_message_id": 33061,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1553836822,
			"from_id": 1302931,
			"text": "а пенсионный стаж на ип идет, и пенсия откладывается",
			"attachments": [],
			"conversation_message_id": 33058,
			"peer_id": 2000000071,
			"id": 106599,
			"update_time": 0
		}
		}, {
		"date": 1553836942,
		"from_id": 1302931,
		"id": 106601,
		"out": 0,
		"peer_id": 2000000071,
		"text": "мне кажется, оформляться самозанятым выгодно только когда ты работаешь на основной работе и иногда берешь шабашку
		и то, если прям очень хочется платить налоги с шабашки",
		"conversation_message_id": 33060,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553836863,
		"from_id": 9889375,
		"id": 106600,
		"out": 0,
		"peer_id": 2000000071,
		"text": "У самозанятых множество ограничений!
		А на ИП пенсия откладывается мизерная, если отдельно не доплачивать в пенсионный.",
		"conversation_message_id": 33059,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553836822,
		"from_id": 1302931,
		"id": 106599,
		"out": 0,
		"peer_id": 2000000071,
		"text": "а пенсионный стаж на ип идет, и пенсия откладывается",
		"conversation_message_id": 33058,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553836789,
		"from_id": 1302931,
		"id": 106598,
		"out": 0,
		"peer_id": 2000000071,
		"text": "кажется, на ИП если у тебя сумма дохода меньше определенной, то можно вообще налог списать",
		"conversation_message_id": 33057,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553836741,
		"from_id": 1302931,
		"id": 106597,
		"out": 0,
		"peer_id": 2000000071,
		"text": "ей по каким-то причинам (не помню, по каким), было выгоднее открыть ип",
		"conversation_message_id": 33056,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false,
		"reply_message": {
			"date": 1553836496,
			"from_id": 14369873,
			"text": "Маша, а почему не очень?",
			"attachments": [],
			"conversation_message_id": 33055,
			"peer_id": 2000000071,
			"id": 106596,
			"update_time": 0
		}
		}, {
		"date": 1553836496,
		"from_id": 14369873,
		"id": 106596,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Маша, а почему не очень?",
		"conversation_message_id": 33055,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553836430,
		"from_id": 1334105,
		"id": 106595,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33054,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456240859,
				"album_id": -3,
				"owner_id": 1334105,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...264/tRT_BKcIQic.jpg",
					"width": 130,
					"height": 89
				}, {
				"type": "o",
				"url": "https://pp.userap...268/8tySyOP_-7k.jpg",
				"width": 130,
				"height": 89
				}, {
				"type": "p",
				"url": "https://pp.userap...269/AqZ3XFLJnWE.jpg",
				"width": 200,
				"height": 137
				}, {
				"type": "q",
				"url": "https://pp.userap...26a/FOYyeHdo93g.jpg",
				"width": 320,
				"height": 220
				}, {
				"type": "r",
				"url": "https://pp.userap...26b/ZAjB-0Jxpmw.jpg",
				"width": 510,
				"height": 350
				}, {
				"type": "s",
				"url": "https://pp.userap...263/JMba8zxn-hc.jpg",
				"width": 75,
				"height": 51
				}, {
				"type": "x",
				"url": "https://pp.userap...265/lAX745yvzX8.jpg",
				"width": 604,
				"height": 415
				}, {
				"type": "y",
				"url": "https://pp.userap...266/zsFNzKLFtVg.jpg",
				"width": 807,
				"height": 554
				}, {
				"type": "z",
				"url": "https://pp.userap...267/6z_fquUCr7c.jpg",
				"width": 1080,
				"height": 742
				}],
				"text": "",
				"date": 1553836430,
				"access_key": "20e994b4e023cf8db2"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553836415,
		"from_id": 1302931,
		"id": 106594,
		"out": 0,
		"peer_id": 2000000071,
		"text": "и че-т ей пока не очень",
		"conversation_message_id": 33053,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553836409,
		"from_id": 1302931,
		"id": 106593,
		"out": 0,
		"peer_id": 2000000071,
		"text": "моя знакомая работает самозанятым тестировщиком",
		"conversation_message_id": 33052,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553836343,
		"from_id": 1334105,
		"id": 106592,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Да не переживайте вы так",
		"conversation_message_id": 33051,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456240858,
				"album_id": -3,
				"owner_id": 1334105,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...465/CStC4z9HL3Q.jpg",
					"width": 130,
					"height": 127
				}, {
				"type": "o",
				"url": "https://pp.userap...469/KILga8tKeq8.jpg",
				"width": 130,
				"height": 127
				}, {
				"type": "p",
				"url": "https://pp.userap...46a/zei8GrYnsZo.jpg",
				"width": 200,
				"height": 195
				}, {
				"type": "q",
				"url": "https://pp.userap...46b/e9CSbJ9bH8I.jpg",
				"width": 320,
				"height": 311
				}, {
				"type": "r",
				"url": "https://pp.userap...46c/1tMgYiuG-Uk.jpg",
				"width": 510,
				"height": 496
				}, {
				"type": "s",
				"url": "https://pp.userap...464/4cBAkvFK2L4.jpg",
				"width": 75,
				"height": 73
				}, {
				"type": "x",
				"url": "https://pp.userap...466/HN_WlmK7-NQ.jpg",
				"width": 604,
				"height": 588
				}, {
				"type": "y",
				"url": "https://pp.userap...467/NJCZIsjyMSs.jpg",
				"width": 807,
				"height": 785
				}, {
				"type": "z",
				"url": "https://pp.userap...468/ikvu4Ys1ADI.jpg",
				"width": 1080,
				"height": 1051
				}],
				"text": "",
				"date": 1553836343,
				"access_key": "b2ef0384ebd9bbfa61"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553836273,
		"from_id": 789684,
		"id": 106591,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ну она прям конечно рассказывает так, что очень выгодно, надо брать)) но да, это не пенсия",
		"conversation_message_id": 33050,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553834291,
		"from_id": 9889375,
		"id": 106585,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Алиса, ты на пенсию надеешься? &#128516;",
		"conversation_message_id": 33049,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553832516,
		"from_id": 3772019,
		"id": 106584,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Налог, который платят самозанятые - в никуда, он не идёт в пенсионные накопления",
		"conversation_message_id": 33048,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553832328,
		"from_id": 3772019,
		"id": 106583,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Я чёт прям не знаю",
		"conversation_message_id": 33047,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553832319,
		"from_id": 3772019,
		"id": 106582,
		"out": 0,
		"peer_id": 2000000071,
		"text": "&#128556;",
		"conversation_message_id": 33046,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553830417,
		"from_id": 14369873,
		"id": 106580,
		"out": 0,
		"peer_id": 2000000071,
		"text": "ну это же пока не на всю россию только Москва и ещё какая-то область",
		"conversation_message_id": 33045,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553808806,
		"from_id": 789684,
		"id": 106574,
		"out": 0,
		"peer_id": 2000000071,
		"text": "кто-нибудь работает как самозанятый?
		иллюстратора нет",
		"conversation_message_id": 33044,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "link",
			"link": {
				"url": "https://meduza.io...u-i-zachem-eto-nado",
				"title": "Говорят, теперь легко стать «самозанятым». Кому и зачем это надо?",
				"caption": "meduza.io",
				"description": "Илья Красильщик и Саша Поливанов обсуждают с экономистом и редактором «Тинькофф-журнала» Екатериной Мирошкиной, как будет работать новый налог для самозанятых, как и зачем регистрироваться, сколько платить, для кого придуман этот эксперимент, и какие есть сложности и опасности.",
				"photo": {
					"id": 456267860,
					"album_id": -25,
					"owner_id": 2000022291,
					"sizes": [{
						"type": "k",
						"url": "https://pp.userap...b87/ELbFjq0jRZ4.jpg",
						"width": 1074,
						"height": 480
					}, {
					"type": "l",
					"url": "https://pp.userap...b86/W0f7R_XJ4iw.jpg",
					"width": 537,
					"height": 239
					}, {
					"type": "m",
					"url": "https://pp.userap...b7e/zlIUXe24RNg.jpg",
					"width": 130,
					"height": 58
					}, {
					"type": "o",
					"url": "https://pp.userap...b82/8OytEcszuY4.jpg",
					"width": 130,
					"height": 87
					}, {
					"type": "p",
					"url": "https://pp.userap...b83/BX6qH2UQibY.jpg",
					"width": 200,
					"height": 133
					}, {
					"type": "q",
					"url": "https://pp.userap...b84/RVv8Qk9eXMU.jpg",
					"width": 320,
					"height": 213
					}, {
					"type": "r",
					"url": "https://pp.userap...b85/bKMbdLP6HAc.jpg",
					"width": 510,
					"height": 340
					}, {
					"type": "s",
					"url": "https://pp.userap...b7d/46KF9GthNO4.jpg",
					"width": 75,
					"height": 33
					}, {
					"type": "x",
					"url": "https://pp.userap...b7f/1rti8XNF_Nk.jpg",
					"width": 604,
					"height": 269
					}, {
					"type": "y",
					"url": "https://pp.userap...b80/3DYkHB4ykTk.jpg",
					"width": 807,
					"height": 360
					}, {
					"type": "z",
					"url": "https://pp.userap...b81/B020yTb7PFw.jpg",
					"width": 1200,
					"height": 536
					}],
					"text": "",
					"date": 1553808787
				},
				"is_favorite": false
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553792621,
		"from_id": 14369873,
		"id": 106562,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Ванюша, я сейчас попробую открыть",
		"conversation_message_id": 33043,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553784915,
		"from_id": 190348091,
		"id": 106552,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Могу завтра или сегодня после 10, если оч надо",
		"conversation_message_id": 33042,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553783244,
		"from_id": 85504912,
		"id": 106551,
		"out": 1,
		"peer_id": 2000000071,
		"text": "А вдруг у кого-то стоит Иллюстратор? Надо открыть файл и заскриншотить, что в нём есть.",
		"conversation_message_id": 33041,
		"fwd_messages": [],
		"important": false,
		"random_id": 1192784802,
		"attachments": [{
			"type": "doc",
			"doc": {
				"id": 497541395,
				"owner_id": 85504912,
				"title": "ONDER.ai",
				"size": 170362,
				"ext": "ai",
				"url": "https://vk.com/do...=1&no_preview=1",
				"date": 1553783231,
				"type": 4,
				"access_key": "bef3b5180db3c4f8b6"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553777423,
		"from_id": 85504912,
		"id": 106524,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Спасибо огромное!",
		"conversation_message_id": 33040,
		"fwd_messages": [],
		"important": false,
		"random_id": 150404991,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553777084,
		"from_id": 2479410,
		"id": 106523,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33039,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "doc",
			"doc": {
				"id": 496353686,
				"owner_id": 2479410,
				"title": "Waves_logo.cdr",
				"size": 59042,
				"ext": "cdr",
				"url": "https://vk.com/do...=1&no_preview=1",
				"date": 1553777081,
				"type": 4,
				"access_key": "bd29dccf86e38498b1"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553776981,
		"from_id": 2479410,
		"id": 106522,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Могу, ван момент)",
		"conversation_message_id": 33038,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553776893,
		"from_id": 85504912,
		"id": 106521,
		"out": 1,
		"peer_id": 2000000071,
		"text": "[id2479410|@lena.gnedkova]",
		"conversation_message_id": 33037,
		"fwd_messages": [],
		"important": false,
		"random_id": 1281230757,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553776867,
		"from_id": 85504912,
		"id": 106520,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Ура, спасибо! А можешь ещё и этот?",
		"conversation_message_id": 33036,
		"fwd_messages": [],
		"important": false,
		"random_id": 1460361366,
		"attachments": [{
			"type": "doc",
			"doc": {
				"id": 497526556,
				"owner_id": 85504912,
				"title": "Waves+logo.svg",
				"size": 117694,
				"ext": "svg",
				"url": "https://vk.com/do...=1&no_preview=1",
				"date": 1553776859,
				"type": 4,
				"access_key": "218da628d07000a11b"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553776760,
		"from_id": 2479410,
		"id": 106519,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Я могу)",
		"conversation_message_id": 33035,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "doc",
			"doc": {
				"id": 496352918,
				"owner_id": 2479410,
				"title": "logo-black.cdr",
				"size": 21530,
				"ext": "cdr",
				"url": "https://vk.com/do...=1&no_preview=1",
				"date": 1553776750,
				"type": 4,
				"access_key": "80196323a011d1d451"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553775082,
		"from_id": 85504912,
		"id": 106518,
		"out": 1,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33034,
		"fwd_messages": [],
		"important": false,
		"random_id": 42033971,
		"attachments": [{
			"type": "doc",
			"doc": {
				"id": 497522725,
				"owner_id": 85504912,
				"title": "logo-black.svg",
				"size": 5529,
				"ext": "svg",
				"url": "https://vk.com/do...=1&no_preview=1",
				"date": 1553775079,
				"type": 4,
				"access_key": "957b84b39d0a072cd0"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553775054,
		"from_id": 85504912,
		"id": 106517,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Аааааа! Кто может сохранить векторный файл в AI или CDR?",
		"conversation_message_id": 33033,
		"fwd_messages": [],
		"important": false,
		"random_id": 1300206696,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553774664,
		"from_id": 9889375,
		"id": 106516,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А не надо нарушать правила техники безопасности! &#9757;&#127995;&#128526;",
		"conversation_message_id": 33032,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553773203,
		"from_id": 2918341,
		"id": 106515,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33031,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456242176,
				"album_id": -3,
				"owner_id": 2918341,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...d2e/o8Ot_hW_1tY.jpg",
					"width": 130,
					"height": 128
				}, {
				"type": "o",
				"url": "https://pp.userap...d32/bS7s9ypLJw0.jpg",
				"width": 130,
				"height": 128
				}, {
				"type": "p",
				"url": "https://pp.userap...d33/P2ES7kwqz1I.jpg",
				"width": 200,
				"height": 198
				}, {
				"type": "q",
				"url": "https://pp.userap...d34/FsdrPl2cLfE.jpg",
				"width": 320,
				"height": 316
				}, {
				"type": "r",
				"url": "https://pp.userap...d35/S4luKy9QoZg.jpg",
				"width": 510,
				"height": 504
				}, {
				"type": "s",
				"url": "https://pp.userap...d2d/udFOf6ccwcM.jpg",
				"width": 75,
				"height": 74
				}, {
				"type": "x",
				"url": "https://pp.userap...d2f/A2cBoARVbG0.jpg",
				"width": 604,
				"height": 597
				}, {
				"type": "y",
				"url": "https://pp.userap...d30/Tgph2rEu_aw.jpg",
				"width": 807,
				"height": 798
				}, {
				"type": "z",
				"url": "https://pp.userap...d31/Fbj0Z8Jcoxc.jpg",
				"width": 1092,
				"height": 1080
				}],
				"text": "",
				"date": 1553773202,
				"access_key": "5da056c0ab1921dc52"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553689504,
		"from_id": 150837360,
		"id": 106514,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Друзья, если есть кто - то среди ваших знакомых человеков - детей 9 - 13 лет желающие поучаствовать, пригласите, пожалуйста, их родителей заполнить заявку на участие - https://docs.google.com/forms/d/e/1FAIpQLSewu3z1WhM-oWPAZFgxj3TjVF66q9d_wrwQKE4bYNeyNVtm-g/viewform Спасибо! 
		&#128153;",
		"conversation_message_id": 33030,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 857,
				"from_id": -49428448,
				"to_id": -49428448,
				"date": 1553685448,
				"post_type": "post",
				"text": "&#128204; Открыт набор в инклюзивную группу для создания анимационного кино! &#128515; 

				С 4 по 8 апреля пройдёт мастерская анимационного кино для детей с педагогами Санкт-Петербургского арт-центра «Да» (благотворительный проект, существующий с 2008 года. http://www.studio-da.info). &#128591;&#127995; 

				8 апреля состоится показ по итогам мастерской.&#9786; 
				Кинофестиваль «Вкратце!» приглашает вас на воображаемую прогулку по любимому городу, где правда и вымысел соединятся в одну историю. За 4 дня мастерской участники вместе с опытными педагогами-режиссерами, пройдут все этапы создания мультфильма. Каждый сможет попробовать себя в роли настоящего режиссера, аниматора и художника. &#129498;&#8205;&#9794; 

				Вместе мы придумаем, нарисуем, снимем и с нетерпением будем ждать итоговой премьеры, которая станет кульминацией нашей мастерской. &#128079;&#127995; 

				Участие смогут принять 10 детей в возрасте 9 - 13 лет (для здоровых ребят) и 5 детей 9 - 15 лет (для детей с особенностями развития, кроме детей с особенностями зрения). В случае большого числа заявок организаторами будет проведён отбор. 

				Проект реализуется Некоммерческой организацией Фондом содействия детскому творчеству «Юные таланты» и Автономной некоммерческой организацией развития человеческого капитала «Открытый город» с использованием гранта Президента Российской Федерации на развитие гражданского общества, предоставленного Фондом президентских грантов президентскиегранты.рф [club88765619|@prokhorovfund] #ФондМихаилаПрохорова 

				&#10071;Мастерская проводится БЕСПЛАТНО. Заполняйте заявку на участие по ссылке &#128073;&#127995; https://docs.google.com/forms/d/e/1FAIpQLSewu3z1WhM-oWPAZFgxj3TjVF66q9d_wrwQKE4bYNeyNVtm-g/viewform

				Остались вопросы? &#128521; — Обращайтесь к координатору проекта [id150837360|Евгении Потихониной] 

				#Волгоград #Волжский #vkratze #vkratze2019 #вкратце2019 #фестиваль #ФондЮныеТаланты #открытыйгородвлг #ФондМихаилаПрохорова",
				"marked_as_ads": 0,
				"attachments": [{
					"type": "photo",
					"photo": {
						"id": 456239699,
						"album_id": -7,
						"owner_id": -49428448,
						"user_id": 100,
						"sizes": [{
							"type": "m",
							"url": "https://pp.userap...c66/7LklsQWFgwE.jpg",
							"width": 130,
							"height": 130
						}, {
						"type": "o",
						"url": "https://pp.userap...c6b/s2z4rP8cqq8.jpg",
						"width": 130,
						"height": 130
						}, {
						"type": "p",
						"url": "https://pp.userap...c6c/v3IWXuJ0JGs.jpg",
						"width": 200,
						"height": 200
						}, {
						"type": "q",
						"url": "https://pp.userap...c6d/R16covEsYWc.jpg",
						"width": 320,
						"height": 320
						}, {
						"type": "r",
						"url": "https://pp.userap...c6e/Mm5QTEQroRE.jpg",
						"width": 510,
						"height": 510
						}, {
						"type": "s",
						"url": "https://pp.userap...c65/4zcSA0rjCwI.jpg",
						"width": 75,
						"height": 75
						}, {
						"type": "w",
						"url": "https://pp.userap...c6a/3Sdu3DVuw9c.jpg",
						"width": 2160,
						"height": 2160
						}, {
						"type": "x",
						"url": "https://pp.userap...c67/fOHqHFlh1-g.jpg",
						"width": 604,
						"height": 604
						}, {
						"type": "y",
						"url": "https://pp.userap...c68/4OPt-xjN5zg.jpg",
						"width": 807,
						"height": 807
						}, {
						"type": "z",
						"url": "https://pp.userap...c69/QznyWYQcT74.jpg",
						"width": 1080,
						"height": 1080
						}],
						"text": "",
						"date": 1553685447,
						"access_key": "813eb63e0c2cca4245"
					}
				}, {
				"type": "link",
				"link": {
					"url": "http://xn--80afcd...afooklqi5o.xn--p1ai",
					"title": "Главная",
					"description": "",
					"target": "internal",
					"photo": {
						"id": 456265496,
						"album_id": -26,
						"owner_id": 2000021529,
						"sizes": [{
							"type": "m",
							"url": "https://pp.userap...1c2/37yq_Kn0aVA.jpg",
							"width": 130,
							"height": 83
						}, {
						"type": "s",
						"url": "https://pp.userap...1c1/LFxeSihQo_c.jpg",
						"width": 75,
						"height": 48
						}, {
						"type": "x",
						"url": "https://pp.userap...1c3/8sjPvMLbECs.jpg",
						"width": 150,
						"height": 96
						}],
						"text": "",
						"date": 1553687379
					},
					"is_favorite": false
				}
				}],
				"post_source": {
					"type": "vk"
				},
				"comments": {
					"count": 0,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 40,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 5,
					"user_reposted": 0
				},
				"views": {
					"count": 1181
				},
				"is_favorite": false,
				"access_key": "85c1bf7a19ea37da5b"
			}
		}, {
		"type": "link",
		"link": {
			"url": "https://docs.goog...YNeyNVtm-g/viewform",
			"title": "Заявка на участие в детской мастерской анимационного кино от студии "ДА!"",
			"caption": "docs.google.com",
			"description": "Дата проведения: 4-8 апреля 2019 года. Адрес: уточняется (планируется "Россия - моя история"). Справки по тел. +7-937-723-55-69, Инесса Тропина Инклюзивная мастерская предполагает равное участие детей как без инвалидности так и с инвалидностью, особенностями развития. Мастерская проводится бесплатно.",
			"photo": {
				"id": 456268655,
				"album_id": -28,
				"owner_id": 2000021105,
				"sizes": [{
					"type": "k",
					"url": "https://pp.userap...1f8/6KvLfVDzMhQ.jpg",
					"width": 1074,
					"height": 480
				}, {
				"type": "l",
				"url": "https://pp.userap...1f7/TLDWcjbAHDc.jpg",
				"width": 537,
				"height": 240
				}, {
				"type": "m",
				"url": "https://pp.userap...1ef/vBY9TVS83-w.jpg",
				"width": 130,
				"height": 68
				}, {
				"type": "o",
				"url": "https://pp.userap...1f3/CDnluasAx-Y.jpg",
				"width": 130,
				"height": 87
				}, {
				"type": "p",
				"url": "https://pp.userap...1f4/5AokyXILnsE.jpg",
				"width": 200,
				"height": 133
				}, {
				"type": "q",
				"url": "https://pp.userap...1f5/bBLiDZKn9GA.jpg",
				"width": 320,
				"height": 213
				}, {
				"type": "r",
				"url": "https://pp.userap...1f6/RX9g69__ZsY.jpg",
				"width": 510,
				"height": 340
				}, {
				"type": "s",
				"url": "https://pp.userap...1ee/fWEqjiXVTjI.jpg",
				"width": 75,
				"height": 39
				}, {
				"type": "x",
				"url": "https://pp.userap...1f0/nLyk5zQBnvE.jpg",
				"width": 604,
				"height": 317
				}, {
				"type": "y",
				"url": "https://pp.userap...1f1/70WBwXPA7NE.jpg",
				"width": 807,
				"height": 424
				}, {
				"type": "z",
				"url": "https://pp.userap...1f2/s8kxDvC2rHo.jpg",
				"width": 1200,
				"height": 630
				}],
				"text": "",
				"date": 1553681630
			},
			"is_favorite": false
		}
		}],
		"is_hidden": false
		}, {
		"date": 1553688945,
		"from_id": 150837360,
		"id": 106512,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Будет приятно, мур!",
		"conversation_message_id": 33029,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553665089,
		"from_id": 7234126,
		"id": 106505,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Класс класс ))",
		"conversation_message_id": 33028,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553664811,
		"from_id": 190348091,
		"id": 106504,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А ещё это значит, что можно караулить его в центре где-нибудь и, вероятно, попасть на бесплатный концерт)",
		"conversation_message_id": 33027,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553657760,
		"from_id": 190348091,
		"id": 106503,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Да-да! Я тоже видела и прям хотела скинуть, но что-то меня остановило... а кто-то хочет?",
		"conversation_message_id": 33026,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553626946,
		"from_id": 7234126,
		"id": 106500,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33025,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "wall",
			"wall": {
				"id": 213,
				"from_id": -68727386,
				"to_id": -68727386,
				"date": 1553590179,
				"post_type": "post",
				"text": "26.05.2019 19:00 "ЦКЗ" 
				[club180212668|АКВАРИУМ. БГ65. ]

				Билеты (от 1200 р) уже в продаже: 
				- без комиссии на сайте: 
				https://fasttickets.online/city/volgograd/ 
				- во всех кассах kassir.ru и на сайте 
				https://vlg.kassir.ru/koncert/akvarium-bg-65-dveri-travyi (+10% комиссия) 

				«Человек, делающий музыку» — именно так предпочитает называть себя сам Гребенщиков. И именно в этих простых словах, по-видимому, кроется разгадка его феноменального успеха. БГ удается всего несколькими словами, несколькими аккордами затронуть самые потаенные струны души, достучаться до сердца и заставить работать разум. 

				В свои годы Борис Гребенщиков умудрился сохранить не только способность писать актуальные, задевающие за живое песни, но и юношески открытые отношением к жизни. 

				А Не так давно Патриарху исполнилось 65 лет.... 
				Чем не повод встретиться друзьям ? 
				Такое событие - пропустить нельзя !!!",
				"marked_as_ads": 0,
				"attachments": [{
					"type": "photo",
					"photo": {
						"id": 456239018,
						"album_id": -7,
						"owner_id": -68727386,
						"user_id": 100,
						"sizes": [{
							"type": "m",
							"url": "https://pp.userap...989/stSNXjxd1oc.jpg",
							"width": 130,
							"height": 130
						}, {
						"type": "o",
						"url": "https://pp.userap...98d/wptNg3eqw9k.jpg",
						"width": 130,
						"height": 130
						}, {
						"type": "p",
						"url": "https://pp.userap...98e/WlhjOsMuTHs.jpg",
						"width": 200,
						"height": 200
						}, {
						"type": "q",
						"url": "https://pp.userap...98f/y6UFc_HlPNc.jpg",
						"width": 320,
						"height": 320
						}, {
						"type": "r",
						"url": "https://pp.userap...990/mw4yKaBEnk8.jpg",
						"width": 510,
						"height": 510
						}, {
						"type": "s",
						"url": "https://pp.userap...988/UDA4wy3wENI.jpg",
						"width": 75,
						"height": 75
						}, {
						"type": "x",
						"url": "https://pp.userap...98a/AlvHX_c3nmE.jpg",
						"width": 604,
						"height": 604
						}, {
						"type": "y",
						"url": "https://pp.userap...98b/YknZpN1OhJk.jpg",
						"width": 807,
						"height": 807
						}, {
						"type": "z",
						"url": "https://pp.userap...98c/YhOZaVX--bc.jpg",
						"width": 1000,
						"height": 1000
						}],
						"text": "",
						"date": 1553590179,
						"post_id": 213,
						"access_key": "f2b9c9c667bf7e2a36"
					}
				}, {
				"type": "link",
				"link": {
					"url": "https://fastticke...ine/city/volgograd/",
					"title": "Волгоград | Купить билеты на концерты - Быстрые билеты",
					"description": "",
					"target": "internal",
					"photo": {
						"id": 456266399,
						"album_id": -28,
						"owner_id": 2000020747,
						"sizes": [{
							"type": "a",
							"url": "https://pp.userap...c12/jMDHKkRKIl4.jpg",
							"width": 200,
							"height": 90
						}, {
						"type": "b",
						"url": "https://pp.userap...c10/SDR_OnAVKdg.jpg",
						"width": 400,
						"height": 180
						}, {
						"type": "c",
						"url": "https://pp.userap...c14/gHJ60BENE2M.jpg",
						"width": 200,
						"height": 200
						}, {
						"type": "d",
						"url": "https://pp.userap...c15/sBl9xcKPYY8.jpg",
						"width": 100,
						"height": 100
						}, {
						"type": "e",
						"url": "https://pp.userap...c16/mNWAECOYXlU.jpg",
						"width": 50,
						"height": 50
						}, {
						"type": "k",
						"url": "https://pp.userap...c11/47mJMONWGSg.jpg",
						"width": 1067,
						"height": 480
						}, {
						"type": "l",
						"url": "https://pp.userap...c13/pHdrl5M6PQs.jpg",
						"width": 537,
						"height": 240
						}, {
						"type": "o",
						"url": "https://pp.userap...c0f/vRpPpYJ9C0A.jpg",
						"width": 656,
						"height": 295
						}],
						"text": "",
						"date": 1553590179
					},
					"is_favorite": false
				}
				}],
				"post_source": {
					"type": "vk"
				},
				"comments": {
					"count": 0,
					"can_post": 1,
					"groups_can_post": true
				},
				"likes": {
					"count": 8,
					"user_likes": 0,
					"can_like": 1,
					"can_publish": 1
				},
				"reposts": {
					"count": 1,
					"user_reposted": 0
				},
				"views": {
					"count": 309
				},
				"is_favorite": false,
				"access_key": "75342803553aa9cf0b"
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553611167,
		"from_id": 156067771,
		"id": 106498,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Так вот где Серёжа!)",
		"conversation_message_id": 33024,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553610725,
		"from_id": 9889375,
		"id": 106497,
		"out": 0,
		"peer_id": 2000000071,
		"text": "А я скоро рядом буду проходить! &#128513;",
		"conversation_message_id": 33023,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553610068,
		"from_id": 12318524,
		"id": 106496,
		"out": 0,
		"peer_id": 2000000071,
		"text": "Друзья, у нас здесь в Охапке торт есть ) отмечаем ДР Серёжи Лебедева )",
		"conversation_message_id": 33022,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [],
		"is_hidden": false
		}, {
		"date": 1553607578,
		"from_id": 1302931,
		"id": 106495,
		"out": 0,
		"peer_id": 2000000071,
		"text": "http://stoneovenhouse.com/",
		"conversation_message_id": 33021,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "link",
			"link": {
				"url": "http://stoneovenhouse.com/",
				"title": "Stone Oven House",
				"caption": "stoneovenhouse.com",
				"description": "",
				"photo": {
					"id": 456267997,
					"album_id": -28,
					"owner_id": 2000020586,
					"sizes": [{
						"type": "k",
						"url": "https://pp.userap...1ee/yGxzlkHqZpM.jpg",
						"width": 844,
						"height": 480
					}, {
					"type": "l",
					"url": "https://pp.userap...1ed/mBkfjnAxSS0.jpg",
					"width": 537,
					"height": 240
					}, {
					"type": "m",
					"url": "https://pp.userap...1e5/bptk0HfGCEc.jpg",
					"width": 130,
					"height": 84
					}, {
					"type": "o",
					"url": "https://pp.userap...1e9/95lPe841_QY.jpg",
					"width": 130,
					"height": 87
					}, {
					"type": "p",
					"url": "https://pp.userap...1ea/pWQa4adxpWo.jpg",
					"width": 200,
					"height": 133
					}, {
					"type": "q",
					"url": "https://pp.userap...1eb/bB4VonXZ-mg.jpg",
					"width": 320,
					"height": 213
					}, {
					"type": "r",
					"url": "https://pp.userap...1ec/8l0cvXDUxbQ.jpg",
					"width": 510,
					"height": 340
					}, {
					"type": "s",
					"url": "https://pp.userap...1e4/xhri24dnJrQ.jpg",
					"width": 75,
					"height": 48
					}, {
					"type": "x",
					"url": "https://pp.userap...1e6/FsvN4-s3BWA.jpg",
					"width": 604,
					"height": 391
					}, {
					"type": "y",
					"url": "https://pp.userap...1e7/Q1ozp0jELcg.jpg",
					"width": 807,
					"height": 523
					}, {
					"type": "z",
					"url": "https://pp.userap...1e8/CdNvZ_jO2Zo.jpg",
					"width": 844,
					"height": 547
					}],
					"text": "",
					"date": 1553607580
				},
				"is_favorite": false
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553607563,
		"from_id": 1302931,
		"id": 106494,
		"out": 0,
		"peer_id": 2000000071,
		"text": "https://batenka.r...tm_content=27741455",
		"conversation_message_id": 33020,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "link",
			"link": {
				"url": "https://batenka.r...tm_content=27741455",
				"title": "Как без денег дважды объехать весь мир и даром получить четыре дома в Альпах",
				"caption": "batenka.ru",
				"description": "История воронежского художника Сергея Баловина, который разбогател, разорился, дважды объехал мир без денег и бесплатно получил четыре дома в Альпах",
				"photo": {
					"id": 456268893,
					"album_id": -27,
					"owner_id": 2000020482,
					"sizes": [{
						"type": "k",
						"url": "https://pp.userap...265/syM6NFCiAa0.jpg",
						"width": 1074,
						"height": 480
					}, {
					"type": "l",
					"url": "https://pp.userap...264/ewlvkeLVNS8.jpg",
					"width": 537,
					"height": 240
					}, {
					"type": "m",
					"url": "https://pp.userap...25b/vdclRKeHjvY.jpg",
					"width": 130,
					"height": 87
					}, {
					"type": "o",
					"url": "https://pp.userap...260/A2zjkubDQws.jpg",
					"width": 130,
					"height": 87
					}, {
					"type": "p",
					"url": "https://pp.userap...261/CvUwqsy6daE.jpg",
					"width": 200,
					"height": 133
					}, {
					"type": "q",
					"url": "https://pp.userap...262/CHANsULdVuk.jpg",
					"width": 320,
					"height": 213
					}, {
					"type": "r",
					"url": "https://pp.userap...263/l_BWUJoZxOY.jpg",
					"width": 510,
					"height": 340
					}, {
					"type": "s",
					"url": "https://pp.userap...25a/gGSh4zpLFC4.jpg",
					"width": 75,
					"height": 50
					}, {
					"type": "w",
					"url": "https://pp.userap...25f/Ga0hFF1Z6pY.jpg",
					"width": 1300,
					"height": 867
					}, {
					"type": "x",
					"url": "https://pp.userap...25c/FnkL3FBYpa4.jpg",
					"width": 604,
					"height": 403
					}, {
					"type": "y",
					"url": "https://pp.userap...25d/VgX7s4euiRA.jpg",
					"width": 807,
					"height": 538
					}, {
					"type": "z",
					"url": "https://pp.userap...25e/cDZQrXVBUO0.jpg",
					"width": 1280,
					"height": 854
					}],
					"text": "",
					"date": 1553607564
				},
				"is_favorite": false
			}
		}],
		"is_hidden": false
		}, {
		"date": 1553602705,
		"from_id": 85504912,
		"id": 106486,
		"out": 1,
		"peer_id": 2000000071,
		"text": "Ангелок тупит :(",
			"conversation_message_id": 33019,
			"fwd_messages": [],
			"important": false,
			"random_id": 1968527904,
			"attachments": [],
			"is_hidden": false
		}, {
		"date": 1553600903,
		"from_id": 9889375,
		"id": 106484,
		"out": 0,
		"peer_id": 2000000071,
		"text": "",
		"conversation_message_id": 33018,
		"fwd_messages": [],
		"important": false,
		"random_id": 0,
		"attachments": [{
			"type": "photo",
			"photo": {
				"id": 456241865,
				"album_id": -3,
				"owner_id": 9889375,
				"sizes": [{
					"type": "m",
					"url": "https://pp.userap...7bd/to5_roFlBdk.jpg",
					"width": 130,
					"height": 130
				}, {
				"type": "o",
				"url": "https://pp.userap...7c2/xU2pvknpMcw.jpg",
				"width": 130,
				"height": 130
				}, {
				"type": "p",
				"url": "https://pp.userap...7c3/Nm94cVHZ32k.jpg",
				"width": 200,
				"height": 200
				}, {
				"type": "q",
				"url": "https://pp.userap...7c4/LUyglplqVO4.jpg",
				"width": 320,
				"height": 320
				}, {
				"type": "r",
				"url": "https://pp.userap...7c5/PkCiIoNTjgs.jpg",
				"width": 510,
				"height": 510
				}, {
				"type": "s",
				"url": "https://pp.userap...7bc/8FBCHzN9gBY.jpg",
				"width": 75,
				"height": 75
				}, {
				"type": "w",
				"url": "https://pp.userap...7c1/BozEWWpPH6g.jpg",
				"width": 2000,
				"height": 2000
				}, {
				"type": "x",
				"url": "https://pp.userap...7be/bV5y1zL1XBo.jpg",
				"width": 604,
				"height": 604
				}, {
				"type": "y",
				"url": "https://pp.userap...7bf/5NYAjvhZLEE.jpg",
				"width": 807,
				"height": 807
				}, {
				"type": "z",
				"url": "https://pp.userap...7c0/HCj0BpPFrko.jpg",
				"width": 1080,
				"height": 1080
				}],
				"text": "",
				"date": 1553600899,
				"access_key": "3da50cc7f520002314"
			}
		}],
		"is_hidden": false
		}],
		"conversations": [{
			"peer": {
				"id": 2000000071,
				"type": "chat",
				"local_id": 71
			},
			"in_read": 106982,
			"out_read": 106982,
			"last_message_id": 106982,
			"can_write": {
				"allowed": true
			},
			"chat_settings": {
				"title": "3 попы, 4 стула",
				"members_count": 23,
				"state": "in",
				"photo": {
					"photo_50": "https://pp.userap...XNwdpzqno.jpg?ava=1",
					"photo_100": "https://pp.userap...5r9q_-sZ0.jpg?ava=1",
					"photo_200": "https://pp.userap...DZoNFWk-k.jpg?ava=1"
				},
				"active_ids": [1302931, 150837360, 12318524, 9889375],
				"acl": {
					"can_invite": true,
					"can_change_info": true,
					"can_change_pin": true,
					"can_promote_users": false,
					"can_see_invite_link": false,
					"can_change_invite_link": false
				},
				"is_group_channel": false,
				"owner_id": 789684
			},
			"push_settings": {
				"no_sound": false,
				"disabled_until": 0,
				"disabled_forever": true
			}
		}],
		"profiles": [{
			"id": 789684,
			"first_name": "Анна",
			"last_name": "Кичигина",
			"is_closed": false,
			"can_access_closed": true,
			"sex": 1,
			"screen_name": "anna_ki",
			"photo_50": "https://pp.userap...0yBhX8Buk.jpg?ava=1",
			"photo_100": "https://pp.userap...Gd78CKeMM.jpg?ava=1",
			"online": 0
		}, {
		"id": 933479,
		"first_name": "Илья",
		"last_name": "Тураев",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 2,
		"screen_name": "ilkins",
		"photo_50": "https://pp.userap...-PhQP5-7k.jpg?ava=1",
		"photo_100": "https://pp.userap...tVdt65uY0.jpg?ava=1",
		"online": 0
		}, {
		"id": 1302931,
		"first_name": "Маша",
		"last_name": "Малова",
		"is_closed": true,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "poltora.zemlekopa",
		"photo_50": "https://pp.userap...IG5b8xBDo.jpg?ava=1",
		"photo_100": "https://pp.userap...r8IYG1jAE.jpg?ava=1",
		"online": 1
		}, {
		"id": 1334105,
		"first_name": "Алексей",
		"last_name": "Архипов",
		"is_closed": true,
		"can_access_closed": true,
		"sex": 2,
		"screen_name": "archipovalex",
		"photo_50": "https://pp.userap...3DfBJniKg.jpg?ava=1",
		"photo_100": "https://pp.userap...k50PgdoJE.jpg?ava=1",
		"online": 0
		}, {
		"id": 2479410,
		"first_name": "Лена",
		"last_name": "Гнедкова",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "lena.gnedkova",
		"photo_50": "https://pp.userap...4Uj7XDGpY.jpg?ava=1",
		"photo_100": "https://pp.userap...QdQOcY9Dw.jpg?ava=1",
		"online": 0
		}, {
		"id": 2918341,
		"first_name": "Дмитрий",
		"last_name": "Седлецкий",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 2,
		"screen_name": "poimnepoimenya",
		"photo_50": "https://pp.userap...u-FAlqRxE.jpg?ava=1",
		"photo_100": "https://pp.userap...Mer7kew58.jpg?ava=1",
		"online": 0
		}, {
		"id": 3772019,
		"first_name": "Алиса",
		"last_name": "Сербиненко",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "alisaserbinenko",
		"photo_50": "https://sun7-2.us...Vzp-mzp5M.jpg?ava=1",
		"photo_100": "https://sun7-3.us..._jQbHfdFI.jpg?ava=1",
		"online": 0
		}, {
		"id": 7234126,
		"first_name": "Ирина",
		"last_name": "Дианова",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "irinadianova",
		"photo_50": "https://pp.userap...Mx7ImdFag.jpg?ava=1",
		"photo_100": "https://pp.userap...QbV-_pWWA.jpg?ava=1",
		"online": 0
		}, {
		"id": 9889375,
		"first_name": "Александр",
		"last_name": "Рябчун",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 2,
		"screen_name": "dobroederevo",
		"photo_50": "https://pp.userap...iJZvk2WKQ.jpg?ava=1",
		"photo_100": "https://pp.userap...wmnzyXYhM.jpg?ava=1",
		"online": 0
		}, {
		"id": 12318524,
		"first_name": "Родион",
		"last_name": "Коржов",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 2,
		"screen_name": "rodion_pirat",
		"photo_50": "https://pp.userap...DcaBlWyMs.jpg?ava=1",
		"photo_100": "https://pp.userap...U0qCUu0cs.jpg?ava=1",
		"online": 0
		}, {
		"id": 14274643,
		"first_name": "Александр",
		"last_name": "Ивлев",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 2,
		"screen_name": "id14274643",
		"photo_50": "https://pp.userap...vj21-O9ks.jpg?ava=1",
		"photo_100": "https://pp.userap...AGQq0wWV4.jpg?ava=1",
		"online": 0
		}, {
		"id": 14369873,
		"first_name": "Екатерина",
		"last_name": "Ракшенко",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "id14369873",
		"photo_50": "https://pp.userap...ddxKZflR0.jpg?ava=1",
		"photo_100": "https://pp.userap...sLOsi3OwE.jpg?ava=1",
		"online": 0
		}, {
		"id": 15304482,
		"first_name": "Ирина",
		"last_name": "Ивлева",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "id15304482",
		"photo_50": "https://pp.userap...3YVe2Z5ws.jpg?ava=1",
		"photo_100": "https://pp.userap...LC1_3Cdpo.jpg?ava=1",
		"online": 0
		}, {
		"id": 85504912,
		"first_name": "Иван",
		"last_name": "Дианов",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 2,
		"screen_name": "ivan_dianov",
		"photo_50": "https://pp.userap...YOYWufb1Q.jpg?ava=1",
		"photo_100": "https://pp.userap...luWxnRmPE.jpg?ava=1",
		"online": 0
		}, {
		"id": 150837360,
		"first_name": "Евгения",
		"last_name": "Потихонина",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "id150837360",
		"photo_50": "https://sun7-2.us...SCUL04pYE.jpg?ava=1",
		"photo_100": "https://sun7-2.us...o4HD6ItTk.jpg?ava=1",
		"online": 0
		}, {
		"id": 156067771,
		"first_name": "Уна",
		"last_name": "Сольвейг",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "unasolveig",
		"photo_50": "https://pp.userap...Omdl7qc28.jpg?ava=1",
		"photo_100": "https://pp.userap...FS9H_3B84.jpg?ava=1",
		"online": 0
		}, {
		"id": 190348091,
		"first_name": "Анна",
		"last_name": "Коржова",
		"is_closed": false,
		"can_access_closed": true,
		"sex": 1,
		"screen_name": "id190348091",
		"photo_50": "https://pp.userap...bIaT6M8oo.jpg?ava=1",
		"photo_100": "https://pp.userap...wHGEZP5vg.jpg?ava=1",
		"online": 0
		}]
	}
}`


//// Attempt to load data from files
//fetch('assets/data/test.json').then(response => {
	//console.log(response)
//}).then(json => {
	//console.log(json)
//})

// Removing values of text, title, description. To get rid of `"` and \n
json_str = json_str.replace(/(?<="(text|title|description)": )".*?"(?=,)/gs, 'true');

json = JSON.parse(json_str);

// Stripping and formating the data
let msgs = json["response"]["items"].map(e => {
	let date = new Date(e.date)
	date.setHours(0);
	date.setMinutes(0);
	date.setSeconds(0);
	date.setMilliseconds(0);
	return {
		date: date,
		from: e.from_id,
		text: e.text,
	}
})

let msgGrouped = d3.nest()
	.key(function(d) { return d.from; })
	.key(function(d) { return d.date; })
	.rollup(leafs => leafs.length)
	.entries(msgs);

console.log(msgGrouped)

let usrs = json["response"]["profiles"].map(e => {
	return {
		id: e.id,
		name: e.first_name + ' ' + e.last_name,
		img: e.photo_100,
	}
})
console.log(usrs)


console.log(usrs.filter(u => u.id == 190348091))




function setup(){
	createCanvas(windowWidth,512)
	background('red')
}

