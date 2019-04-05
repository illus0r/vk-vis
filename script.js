var hash = window.location.hash.substr(1);

var result = hash.split('&').reduce(function (result, item) {
  var parts = item.split('=');
  result[parts[0]] = parts[1];
  return result;
}, {});

if(!result.access_token){
  window.location = "https://oauth.vk.com/authorize?client_id=6926310&display=page&redirect_uri=https://vk.dianov.org/&scope=friends&response_type=token&v=5.92&revoke=1";
  //window.location = "https://oauth.vk.com/authorize?client_id=6926310&display=page&redirect_uri=http://localhost:3000/&scope=friends&response_type=token&v=5.92&revoke=1";
}
else{
  console.log(result.access_token)
  var script = document.createElement('SCRIPT');
  script.src = "https://api.vk.com/method/friends.get?fields=nickname,photo_50&access_token="+result.access_token+"&v=5.8&callback=callbackFunc";
  document.getElementsByTagName("head")[0].appendChild(script);
  function callbackFunc(d) {
    d.response.items.forEach(function(friend){
    })
    var friends = d.response.items;
    // p5


    const sketch = (p) => {
      p.preload = () => {
        //logo = p.loadImage('https://pp.userapi.com/c846121/v846121012/137080/hS3GMvGZEkI.jpg?ava=1');
      }
      p.setup = () => {
        var canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        for(let i = 0; i < friends.length; i++){
          //console.log('>>> loading image '+ friends[i].photo_50)
          p.loadImage(friends[i].photo_50, img =>{
            console.log('>>> success 👾')
            friends[i].photo_50_img = img
          }, err => {
            console.log('>>> skip 🙀')
            console.log(friends, i)
            // making empty image
            var img = p.createImage(50, 50);
            img.loadPixels();
            for (let i = 0; i < img.width; i++) {
              for (let j = 0; j < img.height; j++) {
                img.set(i, j, p.color(0, 90, 102));
              }
            }
            img.updatePixels();
            friends[i].photo_50_img = img
          });
        }
        //p.frameRate(4)
      }
      p.draw = () => {
        let img = p.random(friends).photo_50_img
        if(img){
          p.image(img, p.random(p.width-50), p.random(p.height-50))
        }
        else{
          console.log('wop((')
        }
      }
    }
    let myp5 = new p5(sketch)

  }
}



////VK.api("messages.getHistory",
////{"peer_id": "184177213",
////"count": "20",
////"v":"5.80"},
