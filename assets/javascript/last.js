var wins = 0;
var losses = 0;
//var numbLeft = 15;
//var correct = 0;
var empty = " ";
var computerChoices = ["nile", "exhumed", "horrendous", "incinerate", 
"celeste", "abyssal", "behemoth", "bolzer", "enslaved", "obliteration", 
"thunderwar", "opeth", "cryptopsy", "suffocation", "cruciamentum", 
"gorguts", "anata", "obscura", "morgoth", "incantation", "gruesome", "necrophagist", 
"ulcerate", "vastum", "verminous", "deicide", "abhorrent", "pyrrhon", "belphegor",
 "decapitated", "bloodbath", "death", "funebrarum", "carcass", "venenum", "krieg", 
 "nekrokraft", "sarcasm"];

// stores wrong guesses
var alreadyGuesses = [];

// chooses the word randomly
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// the word the user is trying to guess split up into characters
var letters = computerGuess.split(""); //7
// the current words length
var answerLength = letters.length;
// sets the number of lives 
var numbLeft = letters.length + 3;

var display = [answerLength];
var output = "";

function refreshPage(){
    window.location.reload();
}

// var reset = function() {
	
// 	console.log("it worked");
// 	var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
// 	computerGuess = newSecret
// 	var letters2 = newSecret.split("");
// 	console.log(letters2);
// }


window.onload = function(){
		setup()
	}

//run on window load to print blanks
var setup = function() {
	for (i = 0; i < letters.length; i++){
		if (answerArray[i] == undefined) {
		answerArray[i] = "_ "
		}
	}

	document.getElementById("hidden").innerHTML = answerArray.join("");

	for (i = 0; i < letters.length; i++) {
		display[i] = "_ ";
		output = output + display[i];
	}
	output = "";
}

// answer array will store the correctly-placed user guesses
var answerArray = [];

answerArray.length = letters.length;

document.onkeyup = function(event) {
	var userG = event.key;

	for (i = 0; i < letters.length; i++){
		if (answerArray[i] == undefined) {
			answerArray[i] = "_ "

		}
				
		if (userG == letters[i]){
			answerArray[i] = letters[i];
			document.getElementById("hidden").innerHTML = answerArray.join("");
			numbLeft++
			// if (userG[i] >= 2) {
			// 	document.getElementById("game2").textContent = "already guessed that"
			// }
			
			if (computerGuess == answerArray.join('')) {
				document.getElementById("game2").textContent = "You win!"
				document.getElementById("guessLeft").textContent = empty
				document.getElementById("numbLeft").textContent = empty
				var x = document.getElementById("myAudio"); 

			function playAudio() { 
    		x.play(); 
			} 
			playAudio();
			}
		}

	}
	
	// for (i = 0; i < letters.length; i++){

	// 	if (userG == letters[i]){
	// 		answerArray[i] = letters[i];
	// 		document.getElementById("hidden").innerHTML = answerArray.join("");
	// 		numbLeft++
	// 		// if (userG[i] >= 2) {
	// 		// 	document.getElementById("game2").textContent = "already guessed that"
	// 		// }
			
	// 		if (computerGuess == answerArray.join('')) {
	// 			document.getElementById("game2").textContent = "You win!"
	// 			document.getElementById("guessLeft").textContent = empty
	// 			document.getElementById("numbLeft").textContent = empty

	// 		}
	// 	}

	// }

	if (userG !== letters[i]){
			alreadyGuesses.push(userG);
			numbLeft--
			document.getElementById("guessLeft").textContent = "Your guesses so far: " + alreadyGuesses
			document.getElementById("numbLeft").textContent = " Number of guesses left: " + numbLeft
		
		for (i = 0; i < letters.length; i++){
				if (answerArray[i] == undefined) {
				answerArray[i] = "_ "
				}
		}
	}

	if (numbLeft < 1) {
			document.getElementById("game2").textContent = "Game Over!"
			numbLeft = 10;
			alreadyGuesses.length = 0;
			document.getElementById("guessLeft").textContent = empty
			document.getElementById("numbLeft").textContent = empty
			var x = document.getElementById("myAudio"); 

			function playAudio() { 
    		x.play(); 
			} 
			playAudio();
	}
}