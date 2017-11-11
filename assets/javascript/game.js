
// Global Variables


// Need an array of words or phrases
const word = ["ardent craft ales", "strangeways", "triple crossing", "the answer brewpub", 
"center of the universe", "garden grove", "hardywood", "isley", "kindred spirit", "legend", 
"origin beer lab", "rock bottom", "rusty beaver", "stone brewing", "three notchd", "veil", 
"vasen"];
// Need to choose words randomly 
let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// Dom Manipulation (learned on YouTube)
let docUnderScore = document.getElementsByClassName("underscore");
let docRightGuess = document.getElementsByClassName("rightGuess");
let docWrongGuess = document.getElementsByClassName("wrongGuess");

//  Main 

console.log(chosenWord);
// Need to create underscores based on length of the word 
// Also utilizing an es6 arrow function I learned about on YouTube here
let createUnderscore = () => {
	for(let i = 0; i < chosenWord.length; i++) {
		underScore.push("_");
	}
	return underScore;
}
console.log(createUnderscore());
// Get the users guesses
document.addEventListener("keypress", (event) => {
	let keyword = String.fromCharCode(event.keyCode);
	// if users guess correctly
	if(chosenWord.indexOf(keyword) > -1) {
		//  adding the right word to the array 
		rightWord.push(keyword);
		
		// replacing the underscored with the correct letter
		underScore[chosenWord.indexOf(keyword)] = keyword;
		docUnderScore[0].innerHTML = underScore.join(" ");
		docRightGuess[0].innerHTML = rightGuess.join(" ");
		// check to see if user word matches guesses
		if(underScore.join(" ") == chosenWord) {
			alert("You Won");
		}
	}
	else {
		wrongWord.push(keyword);
		docWrongGuess[0].innerHTML = wrongWord;
	}

	console.log(keyword);
});

docUnderScore[0].innerHTML = generateUnderscore().join(" ");
// Check if the users guesses are correct
// If correct push to the correct array 
// If wrong push to the wrong array 