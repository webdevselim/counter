const input = document.querySelector("input");
const letterCount = document.querySelector(".letter");
const wordCount = document.querySelector(".words");
const button = document.querySelector("button");

// Create a function that will run on every
// key stroke

function textFieldChangeEvent() {
  const textValue = input.value;
  const letters = textValue.length;

  // Change content of letters using textContent property

  letterCount.textContent = `${letters}`;

  // count the number of words

  // This will split the string / input
  // into array of strings
  const words = textValue.split(" ");

  const wordsCount =
    words[words.length - 1] === "" ? words.length - 1 : words.length;

  wordCount.textContent = `${wordsCount}`;
}

// add an eventListener on input field
// that event will be "input"

input.addEventListener("input", textFieldChangeEvent);

// add an eventListener on button to clear everything

button.addEventListener("click", function () {
  input.value = "";
  letterCount.textContent = "0";
  wordCount.textContent = "0";
});
