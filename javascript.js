//Global variables
let humanScore = 0;
let computerScore = 0;


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
        //If user's input is invalid, ask user to try again
        alert("Invalid choice. Pick rock, paper, or scissors.");
        return getHumanChoice();
    }
}

//Takes players' choices as input, updates players' scores, and returns a message declaring the result of the round
function playRound(humanChoice, computerChoice) {
    //Create string variable to store winner
    let result = "";

    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        //If user picks the winning choice, increment user's score and assign message to declare user as the winner
        humanScore += 1;
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === computerChoice) {
        //If user and computer picked the same choice, declare a tie
        result = "It's a tie!";
    } else {
        //Computer wins if user does not - increment user's score, and assign message to declare user as the loser
        computerScore += 1;
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    return result;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(`Your Choice: ${humanSelection}`);
console.log(`Computer's Choice: ${computerSelection}`);

console.log(playRound(humanSelection, computerSelection));