//* SUDO CODE

// add a prevGuesses array to the game object
// add a getGuess method to game that prompts the player to enter a guess
// HINT - use templaate literal for the prompt message
// getGuess method returns a value
   // is a number, not a string
   // is between smallestNum and biggestNum, inclusive
   // Hint - great case for a while loop
   // passInt returns NaN in the string cannot be turned into a number
// within play method, invoke the getGuess method from inside a loop,
   // add new guess to prevGuesses array
   // HINT - excellent use for while loops or do...while
// add a render method to game that play withh call after guess
   // if secret has been guesses: "Message!"
   // otherwise "message"
   // HINT - render wont be able to access any of plays local variables
   // list of previous guess can be generated using join method
// play method should end return when the guess matches secretNum




const game = {
  title: "Guess The Number!",
  biggestNum: 100,
  smallestNum: 0,
  prevGuesses: [],
  secretNum: 4,
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    },
   getGuess(){
      let playersGuess = parseInt( prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
      while (playersGuess > this.biggestNum || playersGuess < this.smallestNum || playersGuess > this.biggerNum + isNaN(playersGuess)) {
        playersGuess = parseInt ( prompt (`That guess is out if this world, the guess must be between ${this.biggestNum} and ${this.smallestNum}. Please guess again.`))
      }
      return playersGuess
     },
}
console.log(game)
game.getGuess()