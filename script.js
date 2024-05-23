function getComputerChoice() {
    let number = Math.random()*3
    if (number >= 2) {return "rock"}
    else if (number >= 1) {return "paper"}
    else {return "scissors"};
}

function  getHumanChoice () {
    let choice = prompt("Rock, paper or scissors?");
    if (choice.toLowerCase() == "rock") {return "rock"}
    else if (choice.toLowerCase() == "paper") {return "paper"}
    else if (choice.toLowerCase() == "scissors") {return "scissors"}
    else {console.log("Error,input not found, try again.")}
    }

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return console.log("Draw! No Winner")}
    else if (computerChoice === "paper" & humanChoice === "rock") {
        computerScore ++;
        return console.log("You lose! Paper beats rock");
    } else if (computerChoice === "paper" & humanChoice === "scissors") {
        humanScore ++;
        return console.log("You win! Scissors beat Paper");
    } else if (computerChoice === "rock" & humanChoice === "scissors") {
        computerScore ++;
        return console.log("You lose! Rock beats Scissors");
    } else if (computerChoice === "rock" & humanChoice === "paper") {
        humanScore ++;
        return console.log("You win! Paper beats rock");
    } else if (computerChoice === "scissors" & humanChoice === "paper") {
        computerScore ++;
        return console.log("You lose! Scissors beat Paper");
    } else if (computerChoice === "scissors" & humanChoice === "rock") {
        humanScore ++;
        return console.log("You win! Rock beats scissors");
    } console.log(humanScore);
    console.log(computerScore);

}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
console.log(playRound(humanSelection ,computerSelection));
