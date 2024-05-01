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
  const choice = prompt(
    "Select a choice between: rock, paper or scissors."
  ).toLowerCase();
  return choice;
};

const playRound = (humanChoice, computerChoice) => {
  let playerSelections = humanChoice + computerChoice;
  let playerWins;
  let text;
  if (humanChoice === computerChoice) {
    console.log("Draw");
  } else if (playerSelections.includes("rock" && "paper")) {
    playerWins = humanChoice === "paper";
    text = "Paper beats rock!";
  } else if (playerSelections.includes("rock" && "scissors")) {
    playerWins = humanChoice === "rock";
    text = "Rock beats scissors!";
  } else if (playerSelections.includes("paper" && "scissors")) {
    playerWins = humanChoice === "scissors";
    text = "Scissors beats paper!";
  }else{
    console.log("Invalid option");
  }
  if (playerWins) {
    humanScore++;
    console.log("You win! " + text);
  } else {
    computerScore++;
    console.log("You lose! " + text);
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
