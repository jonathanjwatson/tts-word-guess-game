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
const wordToGuess = ["b", "a", "n", "a", "n", "a"];
const wordToDisplay = wordToGuess.map(() => "_");

// DOM Variables
const wordToGuessDiv = document.getElementById("word-to-guess");
const letterBankDiv = document.getElementById("letter-bank");

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
// Function Calls
addWordToGuess();
generateLetterBank();
// Event Listeners

letterBankDiv.addEventListener("click", (evt) => {
  if (evt.target.type === "submit") {
    // TODO: Do something here.
    console.log("You clicked my buttons!");
    console.log(evt.target.innerText);
    console.log(evt.target.type);
    // TODO: If letter is in the word, display it in the word.
    for (let i = 0; i < wordToGuess.length; i++) {
      if (evt.target.innerText === wordToGuess[i]) {
        console.log("That letter is in the word!");
        wordToDisplay[i] = evt.target.innerText;
        console.log(wordToDisplay);
      }
    }
    addWordToGuess();
    // TODO: If letter is not in the word (figure out the incorrect letters)
  }
});
