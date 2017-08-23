var wins = 0;
var losses = 0;
var numberOfGuesses = 10;
var wordArray = ["burrito", "taco", "pizza", "sandwhich", "hamburger", "spaghetti"];
var lettersGuessed = [];
var underscores = [];
var alpha = "abcdefghijklmnopqrstuvwxyz";
var unknownWord;

var spanWins = document.getElementById("");
var spanLosses = document.getElementById("");
var spanGuesses = document.getElementById("");
var spanUnderscores = document.getElementById("");
var spanLettersGuessed = document.getElementById("");


function getUnknownWord() {

	var num = Math.floor( Math.random() * wordArray.length);
	var word = wordArray[num];
	unknownWord = word.split("");
}

function newGame() {

	numberOfGuesses = 10;

	lettersGuessed = [];
	underscores = [];

	getUnknownWord();
}