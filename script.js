function load() {
	var mydata = JSON.parse(data);
	alert(mydata[0].name);
	alert(mydata[0].age);
}

var flower = loadJSON("flower.json");
console.log(flower.name);

	