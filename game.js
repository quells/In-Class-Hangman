var wins = 0;
var losses = 0;
var numberOfGuesses = 10;
var wordArray = ["burrito", "taco", "pizza", "sandwhich", "hamburger", "spaghetti"];
var lettersGuessed = [];
var underscores = [];
var unknownWord;
var keyHit;
var letters;

var spanWins = document.getElementById("winCount");
var spanLosses = document.getElementById("");
var spanGuesses = document.getElementById("guessesLeft");
var spanUnderscores = document.getElementById("displayWord");
var spanLettersGuessed = document.getElementById("lettersGuessed");

function getUnknownWord() {

	var num = Math.floor( Math.random() * wordArray.length);
	var word = wordArray[num];
	unknownWord = word.split("");

	for(var i =0; i<unknownWord.length; i++) {
		underscores.push("_");
	}
	console.log(unknownWord);
}

function newGame() {

	numberOfGuesses = 10;

	lettersGuessed = [];
	underscores = [];

	getUnknownWord();
}

document.onkeyup = function(event) {
	console.log("39");
	keyHit = event.key;
	console.log(keyHit);

	document.getElementById("lettersGuessed").innerHTML = lettersGuessed.push(keyHit);

	if(unknownWord.indexOf(keyHit) != -1) {

		for(var i=0; i<unknownWord.length; i++) {

			if(keyHit == unknownWord[i]) {

				underscores[i] = keyHit;
				document.getElementById("displayWord").innerHTML = underscores.join(" ");
			} 
		}
	} else {
		console.log("sixty");
		numberOfGuesses -=1;
		document.getElementById("guessesLeft").innerHTML = numberOfGuesses;
	}

}
getUnknownWord();