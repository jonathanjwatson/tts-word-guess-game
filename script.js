console.log("Hello world!");

// JavaScript Variables
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const arrayOfWords = ["banana", "apple", "orange"];
let chosenWordIndex;
// const currentWord = arrayOfWords[chosenWordIndex].split("");

let wordToGuess;
// console.log(wordToGuess);
let wordToDisplay;

let wrongLetters;

// DOM Variables
const wordToGuessDiv = document.getElementById("word-to-guess");
const letterBankDiv = document.getElementById("letter-bank");
const wrongLetterDiv = document.getElementById("wrong-letters");
const gameResultH3 = document.getElementById("game-result");
const newGameButton = document.getElementById("new-game-button");

// Function Definitions
function addWordToGuess() {
  wordToGuessDiv.innerHTML = "";
  for (let i = 0; i < wordToDisplay.length; i++) {
    // 1. Create a new element.
    const newDiv = document.createElement("div");
    const newH1 = document.createElement("h1");
    // 2. Add content
    newDiv.className = "col";
    newH1.innerText = wordToDisplay[i];
    // 3. Append to an existing element
    newDiv.append(newH1);
    wordToGuessDiv.append(newDiv);
  }
}

function generateLetterBank() {
  for (let i = 0; i < letters.length; i++) {
    const newDiv = document.createElement("div");
    const newButton = document.createElement("button");

    newDiv.className = "col-sm-2 col-xs-1";
    newButton.innerText = letters[i];
    newButton.className = "btn btn-primary";

    newDiv.append(newButton);
    letterBankDiv.append(newDiv);
  }
}

function generateWrongLetters() {
  wrongLetterDiv.innerHTML = "";
  for (let i = 0; i < wrongLetters.length; i++) {
    const newDiv = document.createElement("div");
    const newLetter = document.createElement("h1");
    newDiv.className = "col-sm-1";
    newLetter.innerText = wrongLetters[i];
    newLetter.className = "wrong";
    newDiv.append(newLetter);
    wrongLetterDiv.append(newDiv);
  }
}

function resetGame() {
  chosenWordIndex = Math.floor(Math.random() * arrayOfWords.length);
  wordToGuess = arrayOfWords[chosenWordIndex].split("");
  wordToDisplay = wordToGuess.map(() => "_");
  addWordToGuess();

  wrongLetters = [];
  generateWrongLetters();

  generateLetterBank();

  gameResultH3.innerText = "";
}
// Function Calls
// addWordToGuess();
// generateLetterBank();
resetGame();
// Event Listeners

newGameButton.addEventListener("click", () => {
  resetGame();
});

letterBankDiv.addEventListener("click", (evt) => {
  if (evt.target.type === "submit") {
    // TODO: Do something here.
    console.log("You clicked my buttons!");
    console.log(evt.target.innerText);
    console.log(evt.target.type);
    // TODO: If letter is in the word, display it in the word.
    let isLetterInWord = false;
    for (let i = 0; i < wordToGuess.length; i++) {
      if (evt.target.innerText === wordToGuess[i]) {
        console.log("That letter is in the word!");
        wordToDisplay[i] = evt.target.innerText;
        console.log(wordToDisplay);
        isLetterInWord = true;
      }
    }

    // If the letter is not in the word.
    if (!isLetterInWord) {
      // TODO: Add to incorrect letters.
      wrongLetters.push(evt.target.innerText);
      if (wrongLetters.length > wordToGuess.length) {
        // alert("You lose!");
        gameResultH3.innerText = "You lose";
        // TODO:"Convert this to DOM manipulation
      }
      generateWrongLetters();
    }
    addWordToGuess();
    // TODO: If letter is not in the word (figure out the incorrect letters)
    // Check to see if the user wins!
    if (wordToDisplay.join("") === wordToGuess.join("")) {
      //   alert("You win!");
      gameResultH3.innerText = "You win!";
      // TODO: Change to DOM Manipulation
    }
  }
});
