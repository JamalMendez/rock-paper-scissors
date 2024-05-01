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
    console.log("Draw");
    return;
  } else if (playerSelections.includes("rock" && "paper")) {
    playerWins = humanChoice.toLowerCase() === "paper";
    text = "Paper beats rock!";
  } else if (playerSelections.includes("rock" && "scissors")) {
    playerWins = humanChoice.toLowerCase() === "rock";
    text = "Rock beats scissors!";
  } else if (playerSelections.includes("paper" && "scissors")) {
    playerWins = humanChoice.toLowerCase() === "scissors";
    text = "Scissors beats paper!";
  } else {
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

const playGame = () => {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log("Congratulations you win!");
  } else if (humanScore === computerScore) {
    console.log("It's a Draw");
  } else {
    console.log("You lose");
  }
};

playGame();
