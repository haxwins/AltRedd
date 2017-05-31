function jsonLoad(url,callback){		//getting json file from reddit
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.addEventListener("load", () => {
		if(req.status == 200 && req.readyState == 4){
			callback(JSON.parse(req.responseText));
		}
		else{
			console.log("errr");
		}
	});
	req.send(null);
}
function setboard(file){				//prepering and sending posts to site
	file = file.data.children;
	newArr = file.map(convert);
	function convert(v){
		v=v.data;
		return '<div><img src="' + v.thumbnail + '"></img>' + v.title + '</div>';
	}
	document.getElementById("posts").innerHTML = newArr;
	fadeIn('posts');
}
function goButton(){					//taking text from search bar after clicking 'go'
	document.getElementById("posts").style.opacity = 0.1;
	//document.getElementById("logo").style.display = "none";
	document.getElementById("logo").style.fontSize = "15px";
	document.getElementById("searchbar").style.paddingTop = "10px";
	document.getElementById("searchbar").style.paddingBottom = "30px";
	document.getElementById("alpha").style.display = "none";
	var url = document.getElementById("search").value;
	url = "https://www.reddit.com/r/" + url + ".json";
	jsonLoad(url,setboard);
}
function keyPress(e){					//triggering goButton() after Enter key press
	console.log(e);
	if(e.keyCode == 13){
		goButton();
	}
}
function fadeIn(s){						//fade in function, opacity from 0.1 to 1. Argument by ID
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.1;}, 100);
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.2;}, 150);
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.3;}, 200);
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.4;}, 250);
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.5;}, 300);
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.6;}, 450);
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.7;}, 500);
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.8;}, 550);
	setTimeout(()=>{document.getElementById(s).style.opacity = 0.9;}, 600);
	setTimeout(()=>{document.getElementById(s).style.opacity = 1;}, 650);
}




