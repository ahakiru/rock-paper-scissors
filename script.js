function getComputerChoice() {
    let number = Math.random()*3
    if (number >= 2) {return "rock"}
    else if (number >= 1) {return "paper"}
    else {return "scissors"};
};
const buttons = document.querySelectorAll("button");
console.log(buttons);
let humanScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let selectedButton = button.id;
            let computerSelection = getComputerChoice ();
            playRound(selectedButton, computerSelection);
            if(humanScore < 5 && computerScore < 5)  {
                score.textContent ="You: "+humanScore+" --- Computer: "+computerScore;
            } else {
                if (computerScore > humanScore) {
                    score.textContent ="You: "+humanScore+" --- Computer: "+computerScore+" --- Sorry, you lose!";
                } else {
                    score.textContent ="You: "+humanScore+" --- Computer: "+computerScore+" --- Congratulations, you win!";
                };
            };
        });
    });



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
    };
};
    
let body = document.querySelector("body");
let score = document.createElement("div");
body.appendChild(score);
score.textContent ="You: "+humanScore+" --- Computer: "+computerScore;

