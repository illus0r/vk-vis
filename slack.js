var url_string = window.location.href
var url = new URL(url_string);
var code = url.searchParams.get("code");

//var hash = window.location.hash.substr(1);

//var result = hash.split('&').reduce(function (result, item) {
	//var parts = item.split('=');
	//result[parts[0]] = parts[1];
	//return result;
//}, {});

if(!code){
	window.location = "https://slack.com/oauth/authorize?client_id=469055206374.592441363778&scope=channels:history&redirect_uri=https://4bd7681f.ngrok.io/slack.html";
	//window.location = "https://oauth.vk.com/authorize?client_id=6926310&display=page&redirect_uri=https://vk.dianov.org/&scope=friends&response_type=token&v=5.92&revoke=1";
}
else{
	// removing hash from the url
	// to avoid `access_token` being shared occasionaly
	//history.pushState("", document.title, window.location.pathname);
	console.log(code)
}
