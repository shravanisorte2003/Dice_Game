const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollButton = document.getElementById("rollButton");
const newGameButton = document.getElementById("newGameButton");
const resultText = document.getElementById("resultText");

const diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateDiceImage(diceElement, diceValue) {
  diceElement.src = diceImages[diceValue - 1];
}

function playGame() {
  const player1Roll = rollDice();
  const player2Roll = rollDice();

  updateDiceImage(player1Dice, player1Roll);
  updateDiceImage(player2Dice, player2Roll);

  if (player1Roll > player2Roll) {
    resultText.textContent = "Player 1 wins!";
  } else if (player2Roll > player1Roll) {
    resultText.textContent = "Player 2 wins!";
  } else {
    resultText.textContent = "It's a draw!";
  }
}

function resetGame() {
  updateDiceImage(player1Dice, 1);
  updateDiceImage(player2Dice, 1);
  resultText.textContent = "";
}

rollButton.addEventListener("click", playGame);
newGameButton.addEventListener("click", resetGame);
