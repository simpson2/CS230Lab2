//Methods to show and remove current date respectively
function getDate() {
    document.getElementById('currDate').innerHTML = Date();
}

function removeDate() {
    document.getElementById('currDate').innerHTML = "";
}


var colours = [
    'green',
    'blue',
    'yellow',
    'grey',
    'red',
    'orange'];
var words = [
    ' basket ',
    ' capture ',
    ' control ',
    ' mystery ',
    ' moon ',
    ' owl ',
    ' seasonal ',
    ' quote ',
    ' examination ',
    ' slant '];
var coloursLength = colours.length;
var wordsLength = words.length;

var c = 0;

//Random colour generator for 'Lorem ipsum text'
function loremColour() {
    var rand = Math.floor(Math.random() * coloursLength);
    document.getElementById('loremIpsum').style = "color: " + colours[rand];
}

//Random word generator 
function loremWords() {
    var rand = Math.floor(Math.random() * wordsLength);
    document.getElementById('loremIpsum').textContent += words[rand];
    c++;

    if (c % 6 == 0) {
        c = 0;
        document.getElementById('loremIpsum').innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id.";
    }
}