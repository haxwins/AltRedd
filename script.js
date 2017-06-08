var firstTime = true;
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
		var temp='<div id="post"><div id="score">';
		if(v.thumbnail!=="" && v.thumbnail!="self" && v.thumbnail!="nsfw"){			//checks if there is a thumbnail image
			temp=temp + '<img src="' + v.thumbnail + '"></img><div>' + v.score + '</div></div>'
		}
		else{
			temp=temp + '<div style="line-height: 100px; text-align:center;">' + v.score + '</div></div>'
		}
		temp=temp+ '<div id="info"><div id="title">' + v.title + '</div><div id="more">comments: ' + v.num_comments +  '</div></div></div>';
		console.log(temp);
		return temp;
	}
	var posts = newArr.join('');
	document.getElementById("posts").innerHTML = posts;
	fadeIn('posts');
}
function goButton(){					//taking text from search bar after clicking 'go', changing styles of elements on top
	document.getElementById("posts").style.opacity = 0;
	if(firstTime)
		lowerFont('logo');
	firstTime=false;
	document.getElementById("logo").style.marginTop = "5px";
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
function fadeIn(s){						//fade in function, opacity from 0.1 to 1. Argument by ID					TO CHANGE
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
function lowerFont(s){					//animate logo text 							TO CHANGE
	setTimeout(()=>{document.getElementById(s).style.fontSize = "85px";}, 100);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "80px";}, 150);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "75px";}, 200);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "70px";}, 250);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "65px";}, 300);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "60px";}, 450);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "55px";}, 500);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "50px";}, 550);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "45px";}, 600);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "40px";}, 650);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "35px";}, 700);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "30px";}, 750);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "25px";}, 800);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "20px";}, 850);
	setTimeout(()=>{document.getElementById(s).style.fontSize = "15px";}, 900);
}



