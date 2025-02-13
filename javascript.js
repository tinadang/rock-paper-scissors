
//Randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    //Create a number variable to store random number
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        //If the random number is less than or equal to 0.33, choose rock
        return "rock";
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        //If the random number is between 0.33 and 0.66, choose paper
        return "paper";
    } else if (randomNumber >= 0.66) {
        //If the random number is greater than or equal to 0.66, choose scissors
        return "scissors";
    }

}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());