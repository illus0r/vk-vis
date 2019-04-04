//VK.init(function() { 
	////VK.callMethod("showSettingsBox", 4096);
	//VK.callMethod("showSettingsBox", 2);
	//VK.addCallback('onSettingsChanged', function f(data){ 
		//console.log("settings: " + data); 
		//console.log('>>> Fetching…');
		//VK.api("friends.get",
						//{"user_id": "85504912",
							//"count": "10",
							//"v":"5.8"},
						//function (data) {
							//console.log('>>> friends:');
							//console.log(data);
						//});
		////VK.api("messages.getHistory",
						////{"peer_id": "184177213",
							////"count": "20",
							////"v":"5.80"},
						////function (data) {
							////console.log('>>> history is here:');
							////console.log(data);
						////});
	//});
//}, function() { 
	//// API initialization failed 
	//// Can reload page here 
	//console.log('>>> vk init failed');
//}, '5.92'); 


// p5js


function setup() {
  var canvas = createCanvas(56, 56)
	canvas.parent('canvas-wrapper')
  noStroke()
  noiseDetail(1)
}

function drawK(time, pos, color, yK, v1, v2){
  fill(color)
  var widthK = width*noise(time, pos, 0)*1.5
  var crossPos = createVector(widthK, yK)
  var armPos = crossPos.copy().add(v1)
  var legPos = crossPos.copy().add(v2)
  point(crossPos.x, crossPos.y)
  rect(0, 0, widthK, height)
  beginShape()
  vertex(armPos.x, armPos.y)
  vertex(crossPos.x, crossPos.y)
  vertex(legPos.x, legPos.y)
  endShape(CLOSE)
}

function draw() {
  blendMode(NORMAL)
  background('white')
  blendMode(MULTIPLY)
  var time = frameCount/200
  var pos = mouseX / 100
  var timeSplit = 0
  var posSplit = 10
  var yK = height*noise(time, pos, 100)*1.5
  var v1 = p5.Vector.fromAngle(radians(45), width*2)
  var v2 = p5.Vector.fromAngle(radians(-45), width*2)
  drawK(time, pos, 'cyan', yK, v1, v2)
  drawK(time+timeSplit, pos+posSplit, 'yellow', yK, v1, v2)
  drawK(time+2*timeSplit, pos+2*posSplit, 'magenta', yK, v1, v2)
}
