let url_string = window.location.href
let code = new URL(url_string).searchParams.get("code")

//var hash = window.location.hash.substr(1);

//var result = hash.split('&').reduce(function (result, item) {
	//var parts = item.split('=');
	//result[parts[0]] = parts[1];
	//return result;
//}, {});

if(!code){
	window.location = "https://slack.com/oauth/authorize?client_id=469055206374.592441363778&scope=channels:history channels:read&redirect_uri=https://09df5cbd.ngrok.io/slack.html";
	//window.location = "https://oauth.vk.com/authorize?client_id=6926310&display=page&redirect_uri=https://vk.dianov.org/&scope=friends&response_type=token&v=5.92&revoke=1";
}
else{
	// removing hash from the url
	// to avoid `access_token` being shared occasionaly
	history.pushState("", document.title, window.location.pathname);
	console.log(code)

	//var url = "https://slack.com/api/oauth.access?client_id=469055206374.592441363778&client_secret=5c80ad49680bbfc5782d96afab0fdf9c&redirect_uri=https://4bd7681f.ngrok.io/slack.html&code="+code;

	//var xobj = new XMLHttpRequest();
	//xobj.overrideMimeType("application/json");
	//xobj.open('GET', url, true);
	//xobj.onreadystatechange = function () {
			//if (xobj.readyState == 4) {
					//var jsonText = xobj.responseText;
					//ProcessTheData(jsonText);
			//}
	//}
	//xobj.send(null);
  //var script = document.createElement('SCRIPT');
	//script.src = "https://slack.com/api/oauth.access?client_id=469055206374.592441363778&client_secret=5c80ad49680bbfc5782d96afab0fdf9c&redirect_uri=https://4bd7681f.ngrok.io/slack.html&callback=callbackFunc&code="+code;
  //document.getElementsByTagName("head")[0].appendChild(script);
  //function callbackFunc(d) {
		//console.log(d)
	//}
}

//function ProcessTheData(json){
function APIRequest(method, params){
	let xmlhttp = new XMLHttpRequest();
	let url = "https://slack.com/api/channels.history?channel=CDRK81HQA&token="+json.access_token
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			let json = JSON.parse(this.responseText);
			console.log(json)
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

let xmlhttp = new XMLHttpRequest();
let url = "https://slack.com/api/oauth.access?client_id=469055206374.592441363778&client_secret=5c80ad49680bbfc5782d96afab0fdf9c&redirect_uri=https://09df5cbd.ngrok.io/slack.html&code="+code;
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    let json = JSON.parse(this.responseText);
			myFunction(json);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(json){
	console.log(json.access_token)

	APIRequest('channels.history', {channel: CDRK81HQA})
}
