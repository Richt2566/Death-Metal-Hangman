
var wins = 0;
var losses = 0;
var numbLeft = 15;
var correct = 0;
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
// var computerGuess;

// the word the user is trying to guess split up into characters
var letters = computerGuess.split(""); //7
// the current words length
var answerLength = letters.length;

var display = [answerLength];
var output = "";


function refreshPage(){
    window.location.reload();

}

var reset = function() {
	//var guessAgain = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	//guessAgain = computerGuess;
	//console.log(letters);
	console.log("it worked");
	//var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
	//letters = newSecret;
	var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
	//console.log(newSecret);
	computerGuess = newSecret
	var letters2 = newSecret.split("");
	console.log(letters2);
}


window.onload = function(){
		setup()
		// random()
	}

//run on window load to print blanks
var setup = function()
{
	for (i = 0; i < letters.length; i++){
		if (answerArray[i] == undefined) {
		answerArray[i] = "_ "

		}
	}
	document.getElementById("hidden").innerHTML = answerArray.join("");
//document.getElementById("hidden").textContent = answerArray
console.log(letters);
//console.log(answerLength);
console.log(answerArray);
	for (i = 0; i < letters.length; i++) {
		display[i] = "_ ";
		output = output + display[i];
		//output = answerArray;
		// if (answerArray[i] = letters[i])
		// 	output = answerArray[i];
	}
	//document.getElementById("game").innerHTML = output;
	output = "";
			// for (i = 0; i < letters.length; i++){
			// 	if (answerArray[i] == undefined) {
			// 	answerArray[i] = "_ "

			// 	}
			// }
}

// function() {
// 	for (i = 0; i < letters.length; i ++){
// 		if ()
// 	}
	
// }

// chooses the word
//var random = function() {
	// computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//}
// answer array will store the correctly-placed user guesses
var answerArray = [];

answerArray.length = letters.length; //  removed -- reuben

document.onkeyup = function(event) {
	var userG = event.key;

	if (answerLength.value == userG)  {
		console.log("x2x2x2x2x2x2x");
	}

	for (i = 0; i < letters.length; i++){
				if (answerArray[i] == undefined) {
				answerArray[i] = "_ "

				}
	}
	
	for (i = 0; i < letters.length; i++){
			//console.log(letters[i])

		if (userG == letters[i]){
			console.log("yes!");
			correct++
				//todo: write code to put letter in correct spot in answer array instead
				//answerArray.push(userG);
				//todo: write code (using this printing fucntionlity) that uses answerArray to print the word with correct guesses inserted
				answerArray[i] = letters[i];
				//answerArray[i] = userG;

				
				document.getElementById("hidden").innerHTML = answerArray.join("");
				// document.getElementById("game2").textContent = userG;

				console.log(answerArray)
				//userG.charAt[i] = letters.charAt[i]
			if (correct == letters.length) {
				document.getElementById("game2").textContent = "You win!"
			}
			if (userG[i] >= 2) {
				document.getElementById("game2").textContent = "already guessed that"
			}
			// for (i = 0; i < letters.length; i++){
			// 	if (answerArray[i] == undefined) {
			// 	answerArray[i] = "_ "

			// 	}
			// }
			// if (answerArray[i] == null) {
			// 	answerArray[i] = "_ "
			// }

		}

	}

	if (userG !== letters[i]){
			// good but move it so that it's not being run 7 times
			//document.getElementById("game2").textContent = "nope."
			console.log("nope")
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
			//reset();
		}
	
		// if (userG !== letters[i]) {
			
		// 	document.getElementById("numbLeft").textContent = " Number of guesses left: " + numbLeft
		// }

		// else if (userG == computerG) {
		// 	console.log("nice");
	 //      	wins++
	 //      	numbLeft = 10;
	 //      	document.getElementById("win").textContent = "Wins: " + wins
		// 	document.getElementById("numbLeft").textContent = "Number of guesses left: " + numbLeft
		// 	document.getElementById("guessLeft").textContent = "Your guesses so far: " + empty
		// 	alreadyGuesses.length = 0;
		// 	var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
		// 	console.log(newSecret);
		// 	computerGuess = newSecret
		// }

		// if (numbLeft < 1) {
		// 	losses++
		// 	console.log("game over");
		// 	document.getElementById("lose").textContent = "Losses: " + losses
		// 	numbLeft = 10;
		// 	alreadyGuesses.length = 0;
		// 	document.getElementById("guessLeft").textContent = "Your guesses so far: " + empty
		// 	document.getElementById("numbLeft").textContent = "Number of guesses left: " + numbLeft
		// 	var newSecret = computerChoices[Math.floor(Math.random() * computerChoices.length)]
		// 	console.log(newSecret);
		// 	computerGuess = newSecret
		// }
}