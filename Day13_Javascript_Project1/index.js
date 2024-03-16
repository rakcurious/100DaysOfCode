randomNumber = parseInt(Math.random() * 100 + 1);

const input = document.getElementById("inputbox");
const go = document.getElementById("submit");
const newgame = document.getElementById("newgame");
const msg = document.getElementById("message");
const remGuess = document.getElementById("remguess");
const prevGuess = document.getElementById("prevguess");

let guessArr = [];
let game = true;
let guessNum = 0;

if (game) {
  go.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100");
  } else {
    guessArr.push(guess);
    if (guessNum >= 9) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You Guessed it, Winner!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Too low, try a bigger number`);
  } else if (guess > randomNumber) {
    displayMessage(`Too high, try a smaller number`);
  }
}

function displayGuess(guess) {
  input.value = "";
  prevGuess.innerHTML += `${guess}, `;
  guessNum++;
  remGuess.innerHTML = `${10 - guessNum} `;
}

function displayMessage(message) {
  msg.innerHTML = `<h1>${message}</h1>`;
}

function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  game = false;
  newGame();
}

function newGame() {
  newgame.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessArr = [];
    guessNum = 0;
    prevGuess.innerHTML = "";
    remGuess.innerHTML = `${10 - guessNum} `;
    input.removeAttribute("disabled");
    game = true;
  });
}
