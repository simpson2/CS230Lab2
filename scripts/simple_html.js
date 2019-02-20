//Methods to show and remove current date respectively
function getDate() {
    document.getElementById('currDate').innerHTML = Date();
}

function removeDate() {
	document.getElementById('currDate').innerHTML = "";
}

//Random colour generator for 'Lorem ipsum text'
var colours = ['green', 'blue', 'yellow', 'grey', 'red', 'orange'];
var coloursLength = colours.length;

function colourText() {
	var rand = Math.floor(Math.random() * coloursLength);
	document.getElementById('randColour').style="color: "+colours[rand];
}

var words = ['basket', 'capture', 'control', 'mystery', 'moon', 'owl', 'seasonal', 'quote', 'examination', 'slant'];
var wordsLength = words.length;
//var randWords = document.getElementById('randWords');
var c = 0;

function randomWords() {
    var rand = Math.floor(Math.random() * wordsLength);
    document.getElementById('randWords').innerHTML = words[rand];
    c++;

    if(c % 5 == 0) {
        document.getElementById('randWords').innerHTML =  "";
    }
}