
var url="videos";
//var url = prompt("");
url = "https://www.reddit.com/r/" + url + ".json";
console.log(url);

function jsonLoad(url){
	var req = new XMLHttpRequest();
	console.log(req.onreadystatechange);
	console.log(req.readyState);
	req.open("GET", url, true);
	req.addEventListener("load", () => {
		console.log(req.status);
		if(req.status == 200 && req.readyState == 4){
			var file = JSON.parse(req.responseText);
			console.log(file);
			setBoard(file);
			return s;
		}
		else{
			console.log("errr");
		}
	});
	req.send(null);
}
function setBoard(file){
	console.log(file);
	console.log("lmao");
	file = file.data.children;
	console.log(file);
}
jsonLoad(url);
	