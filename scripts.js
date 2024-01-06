const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollButton = document.getElementById("rollButton");
const newGameButton = document.getElementById("newGameButton");
const resultText = document.getElementById("resultText");

const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

let player1Score = 0;
let player2Score = 0;
const player1ScoreElement = document.getElementById("player1Score");
const player2ScoreElement = document.getElementById("player2Score");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(diceElement, diceValue) {
  diceElement.src = diceImages[diceValue - 1];
}

function updateScores() {
  player1ScoreElement.textContent = player1Score;
  player2ScoreElement.textContent = player2Score;
}

function playGame() {
  const player1Roll = rollDice();
  const player2Roll = rollDice();

  updateDiceImage(player1Dice, player1Roll);
  updateDiceImage(player2Dice, player2Roll);

  if (player1Roll > player2Roll) {
    player1Score++;
    resultText.textContent = "Player 1 wins!";
  } else if (player2Roll > player1Roll) {
    player2Score++;
    resultText.textContent = "Player 2 wins!";
  } else {
    resultText.textContent = "It's a draw!";
  }
  updateScores();
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  updateScores();
  resultText.textContent = "";
  updateDiceImage(player1Dice, 1);
  updateDiceImage(player2Dice, 1);
}

rollButton.addEventListener("click", playGame);
newGameButton.addEventListener("click", resetGame);

// Initial setup
updateScores();
