var hash = window.location.hash.substr(1);

var result = hash.split('&').reduce(function (result, item) {
    var parts = item.split('=');
    result[parts[0]] = parts[1];
    return result;
}, {});

if(!result.access_token){
  window.location = "https://oauth.vk.com/authorize?client_id=6926310&display=page&redirect_uri=https://vk.dianov.org/&scope=friends&response_type=token&v=5.92&revoke=1";
}
else{
  console.log(result.access_token)
  var script = document.createElement('SCRIPT');
  script.src = "https://api.vk.com/method/friends.get?user_id=85504912&count=10&fields=nickname,photo_50&access_token="+result.access_token+"&v=5.8&callback=callbackFunc";
  document.getElementsByTagName("head")[0].appendChild(script);
  function callbackFunc(d) {
    console.log(d)
    d.response.items.forEach(function(friend){
      console.log(friend.photo_50)
    })
    // p5
    
    let friends = d.response.items;

    const sketch = (p) => {
      p.preload = () => {
        for(var i = 0; i < friends.length; i++){
          friends[i].photo_50_img = p.loadImage(friends[i].photo_50);
        }
        //logo = p.loadImage('https://pp.userapi.com/c846121/v846121012/137080/hS3GMvGZEkI.jpg?ava=1');
      }
      p.setup = () => {
        var canvas = p.createCanvas(256, 256)
        p.frameRate(4)
      }
      p.draw = () => {
        let img = p.random(friends).photo_50_img
        p.image(img, 0, 0)
      }
    }
    let myp5 = new p5(sketch)

  }
}



////window.location = "https://oauth.vk.com/authorize?client_id=6926310&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=friends&response_type=token&v=5.92&revoke=1";


//VK.init(function() { 
	////VK.callMethod("showSettingsBox", 4096); // 
	//VK.callMethod("showSettingsBox", 2); //
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


//// p5js


////function setup() {
  ////var canvas = createCanvas(100, 100);
  ////canvas.parent('canvas-wrapper');
  ////background(255, 0, 200);
	////ellipse(50, 50, 80, 80);
////}

////function draw() {
////}



