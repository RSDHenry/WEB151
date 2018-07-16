	// Functions for the hangman game
	var pickWord = function () {
	// Return a random word
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
      return words[Math.floor(Math.random() * words.length)];
    };
    var setupAnswerArray = function (word) {
	// Return the answer array
      var answerArray = [];
      for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
      }
      return answerArray;
    };
    
	var showPlayerProgress = function (answerArray) {
	// Use an alert to show the player their progress
      alert(answerArray.join(" "));
    };
    
	var getGuess = function () {
	// Use a prompt to get a guess
      return prompt("Guess a letter, or click Cancel to stop playing.");
    };
    
	var updateGameState = function (guess, word, answerArray) {
	// Update answerArray and return a number showing how many
	// times the guess appears in the word so remainingLetters
	// can be updated
      var appearances = 0;
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          appearances++;
        }
      }
      return appearances;
    };
    
	var showAnswerAndCongratulatePlayer = function (answerArray) {
	// Use an alert to show the answer and congratulate the player
      showPlayerProgress(answerArray);
      alert("Great job! The answer was " + answerArray.join(""));
    };
	
	// Declare variables
    var word = pickWord();
    var answerArray = setupAnswerArray(word);
    var remainingLetters = word.length;
    
	while (remainingLetters > 0) { showPlayerProgress(answerArray); var guess = getGuess();
      if (guess === null) {
        break;
      } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
      } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
      }
    }
    showAnswerAndCongratulatePlayer(answerArray);