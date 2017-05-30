
var url="videos";
//var url = prompt("");
url = "https://www.reddit.com/r/" + url + ".json";
console.log(url);

function jsonLoad(url,callback){
	var req = new XMLHttpRequest();
	console.log(req.onreadystatechange);
	console.log(req.readyState);
	console.log(req.status);
	req.open("GET", url, true);
	req.addEventListener("load", () => {
		if(req.status == 200 && req.readyState == 4){
			console.log(JSON.parse(req.responseText));
			callback(JSON.parse(req.responseText));
		}
		else{
			console.log("errr");
		}
	});
	req.send(null);
}
function setboard(file){
	console.log(file);
	console.log("lmao");
	file = file.data.children;
	console.log(file);
}
jsonLoad(url,setboard);
	