let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    if(random === 0){
        return "rock";
    }else if(random === 1) {
        return "paper";
    }else {
        return "scissors";
    }
};

const getHumanChoice = () => {
    while(true){
        const choice = prompt("Select a choice between: rock, paper or scissors.").toLowerCase();
        if(choice === ("rock" || choice === "paper" || choice === "scissors")){
            return choice;
        }
    }    
};

console.log(getHumanChoice());
console.log(getComputerChoice());