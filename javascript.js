
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


//Prompts user to input their choice, checks validity, and returns it
function getHumanChoice() {
    //Create a string variable that stores the user's choice
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    
    //If user inputs a valid choice, return it
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        //If user's input is invalid, prompt user to try again
        alert("Invalid choice. Pick rock, paper, or scissors.");
        return getHumanChoice();
    }
}

console.log(getHumanChoice());