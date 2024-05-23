function getComputerChoice() {
    let number = Math.random()*3
    if (number >= 2) {return "Rock"}
    else if (number >= 1) {return "Paper"}
    else {return "Scissors"};
}
console.log(getComputerChoice())