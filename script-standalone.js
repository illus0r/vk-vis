alert('hi');

window.location.replace('https://oauth.vk.com/authorize?client_id=6926310&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=messages&response_type=token&v=5.92&revoke=1');

VK.init(function() { 
	//VK.callMethod("showSettingsBox", 4096);
	VK.callMethod("showSettingsBox", 2);
	VK.addCallback('onSettingsChanged', function f(data){ 
		console.log("settings: " + data); 
		console.log('>>> Fetching…');
		VK.api("friends.get",
						{"user_id": "85504912",
							"count": "10",
							"v":"5.8"},
						function (data) {
							console.log('>>> friends:');
							console.log(data);
						});
		//VK.api("messages.getHistory",
						//{"peer_id": "184177213",
							//"count": "20",
							//"v":"5.80"},
						//function (data) {
							//console.log('>>> history is here:');
							//console.log(data);
						//});
	});
}, function() { 
	// API initialization failed 
	// Can reload page here 
	console.log('>>> vk init failed');
}, '5.92'); 


// p5js


function setup() {
  var canvas = createCanvas(100, 100);
  canvas.parent('canvas-wrapper');
  background(255, 0, 200);
	ellipse(50, 50, 80, 80);
}

function draw() {
}



