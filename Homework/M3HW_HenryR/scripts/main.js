// Create an array of words
	var words = [
	  "javascript",
	  "monkey",
	  "amazing",
	  "pancake",
	  "school",
	  "purple",
	  "elite",
	  "mansion",
	  "valiant",
	  "elephant"
	];
	
	// Pick a random word
	var word = words[Math.floor(Math.random() * words.length)];
	
	// Set up the answer array
	var answerArray = [];
	for (var i = 0; i < word.length; i++) {
		answerArray[i] = "_";
	}	
	
	var remainingLetters = word.length;
	var maxGuesses = 15;
	
	// The game loop
	while (remainingLetters > 0 && maxGuesses > 0 ) {
		// Show the player their progress
		alert(answerArray.join(" "));
		
		// Get a guess from the player
		var guess = prompt("Guess a letter, or click Cancel to stop playing.");
		guess = guess.toLowerCase();
		if (guess === null ) {
			// Exit the game loop
			break;
		} else if (guess.length !== 1) {
			alert("Please enter a single letter.");
		} else {
			// Decrement the number of guesses
			maxGuesses--;
			// Update the game state with the guess
			for (var j = 0; j < word.length; j++) {
				/* Added a check condition to correct the bug that
				   would decrement remainingLetters if the user kept
				   guessing the correct letter*/
				if (word[j] === guess && answerArray[j] === "_") {
					answerArray[j] = guess;
					remainingLetters--;
				}
			}
		}
	// The end of the game loop
	}
	
	// Show the answer and congratulate the player
	alert(answerArray.join(" "));
	
	if (maxGuesses > 0) {
		alert("Good job! The answer was " + word + ".");
	} else {
		alert("Sorry, you're out of chances! The answer was " + word + ".");
	}