
var wins = 0;
var losses = 0;
var numbLeft = 10;

var empty = " ";

var startGame = document.getElementById("startfame");


var computerChoices = ["n", "i", "l", "e"];
var alreadyGuesses = [];

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
document.onkeyup = function(event) {
	var userG = event.key;
	var computerG = computerChoices;
	console.log(computerG);

		if (userG !== computerG) {
			numbLeft--
			console.log("nope");
			alreadyGuesses.push(userG);
			document.getElementById("guessLeft").textContent = "Your guesses so far: " + alreadyGuesses
			
			document.getElementById("numbLeft").textContent = " Number of guesses left: " + numbLeft
			document.getElementById("nile").textContent = computerG
		}
}


	 /*else if (userG == computerG[i]) {
		console.log("nice");
      	wins++
      	numbLeft = 10;
      	document.getElementById("win").textContent = "Wins: " + wins
		document.getElementById("numbLeft").textContent = "Number of guesses left: " + numbLeft
		document.getElementById("guessLeft").textContent = "Your guesses so far: " + empty
		alreadyGuesses.length = 0;
		var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
		console.log(newSecret);
		computerGuess = newSecret
	}

	if (numbLeft < 1) {
		losses++
		console.log("game over");
		document.getElementById("lose").textContent = "Losses: " + losses
		numbLeft = 10;
		alreadyGuesses.length = 0;
		document.getElementById("guessLeft").textContent = "Your guesses so far: " + empty
		document.getElementById("numbLeft").textContent = "Number of guesses left: " + numbLeft
		var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
		console.log(newSecret);
		computerGuess = newSecret
	
	}
} 

var wordLetters     = ['G', 'O', 'A', 'T'];
var guessedLetters  = ['_', '_', '_', '_'];

      function guessLetter(letter) {
          var goodGuess = false;
          var moreToGuess = false;
          for (var i = 0; i < wordLetters.length; i++) {
              if (wordLetters[i] == letter) {
                  guessedLetters[i] = letter;
                  goodGuess = true;
              }
              if (guessedLetters[i] == '_') {
                  moreToGuess = true;
              }
          }
          if (goodGuess) {
              console.log('Yay, you found a letter!');
              console.log(guessedLetters.join(''));
              if (!moreToGuess) {
                  console.log('YOU WON!');
              } 
          } else {
              console.log('Oh noes, thats not right!');
          }
      } */

var main = {};

var main.word = "text";

main.setUnderline = function() {

}





