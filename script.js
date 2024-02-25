const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const score = document.getElementById("scores");
const player_score = document.getElementById("user_score");
const cpu_score = document.getElementById("cpu_score");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});
function computerPlay() {
  const choices = ["rock", "paper", "Scissor"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's Tie Bro!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    playerScore++;
    player_score.innerText = playerScore;
    return "You won! " + playerSelection + "beats" + computerSelection;
  } else {
    computerScore++;
    cpu_score.innerText = computerScore;
    return "you Lose! " + computerSelection + " beats " + playerSelection;
  }
}
