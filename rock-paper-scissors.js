let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = () => {
  const choice = prompt("Select a choice between: rock, paper or scissors.");
  return choice;
};

const playRound = (humanChoice, computerChoice) => {
  let playerSelections = humanChoice.toLowerCase() + computerChoice;
  let playerWins;
  let text;
  if (humanChoice === computerChoice) {
    return("Draw");
    return;
  } else if (playerSelections.includes("rock") && playerSelections.includes("paper")) {
    playerWins = humanChoice.toLowerCase() === "paper";
    text = "Paper beats rock!";
  } else if (playerSelections.includes("rock") && playerSelections.includes("scissors")) {
    playerWins = humanChoice.toLowerCase() === "rock";
    text = "Rock beats scissors!";
  } else if (playerSelections.includes("scissors") && playerSelections.includes("paper")) {
    playerWins = humanChoice.toLowerCase() === "scissors";
    text = "Scissors beats paper!";
  } else {
    return("Invalid option");
  }
  if (playerWins) {
    humanScore++;
    return("You win! " + text);
  } else {
    computerScore++;
    return("You lose! " + text);
  }
};

const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
const script = document.querySelector("script");
const resultDiv = document.createElement("div");
const puntuation = document.createElement("span");

const selection = (e) => {
  const humanChoice = e.target.innerText;
  const computerChoice = getComputerChoice();

  resultDiv.textContent = playRound(humanChoice, computerChoice);
  puntuation.textContent = `PLAYER: ${humanScore}, CPU: ${computerScore}`;

  body.insertBefore(resultDiv, script);
  body.insertBefore(puntuation, resultDiv);
};

buttons.forEach(button => {
  button.addEventListener("click", selection);
})
