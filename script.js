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
	file = file.data.children;
	newArr = file.map(convert);
	function convert(v){
		v=v.data;
		return '<div><img src="' + v.thumbnail + '"></img>' + v.title + '</div>';
	}
	console.log(newArr[0]);
	//var end = '<div><img src="' + obj.thumbnail + '"></img>' + '<p>' + obj.title + '</p></div>';
	//console.log(end);
	document.getElementById("posts").innerHTML = newArr;
}
function goButton(){
	console.log('lmaasd');
	var url = document.getElementById("search").value;
	console.log(url);
	url = "https://www.reddit.com/r/" + url + ".json";
	console.log(url);
	//document.getElementsByClassName("alpha").style.color = "blue";
	jsonLoad(url,setboard);
}