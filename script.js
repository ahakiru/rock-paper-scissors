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
console.log(getComputerChoice())
console.log(getHumanChoice())