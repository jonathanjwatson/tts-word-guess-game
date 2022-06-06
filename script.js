console.log("Hello world!");

// JavaScript Variables

const wordToGuess = ["b", "a", "n", "a", "n", "a"];

// DOM Variables
const wordToGuessDiv = document.getElementById("word-to-guess");

// Function Definitions
function addWordToGuess() {
  for (let i = 0; i < wordToGuess.length; i++) {
    // 1. Create a new element.
    const newDiv = document.createElement("div");
    const newH1 = document.createElement("h1");
    // 2. Add content
    newDiv.className = "col";
    newH1.innerText = "_";
    // 3. Append to an existing element
    newDiv.append(newH1);
    wordToGuessDiv.append(newDiv);
  }
}
// Function Calls
addWordToGuess();
// Event Listeners
