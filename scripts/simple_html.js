//Methods to show and remove current date respectively
function getDate() {
    document.getElementById('currDate').innerHTML = Date();
}

function removeDate() {
	document.getElementById('currDate').innerHTML = "";
}

//Random colour generator for 'Lorem ipsum text'
var colours = ['green', 'blue', 'yellow', 'grey', 'red', 'orange'];
var arrLength = colours.length;
var text = document.getElementById('randColour');

function colourText() {
	var rand = Math.floor(Math.random() * arrLength);
	document.getElementById('randColour').style="color: "+colours[rand];
}