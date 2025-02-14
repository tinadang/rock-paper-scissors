
//Randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    //Create a number variable to store random number
    let randomNumber = Math.random();

    if (randomNumber <= 0.33) {
        //If the random number is less than or equal to 0.33, choose rock
        return "ROCK";
    } else if (randomNumber > 0.33 && randomNumber < 0.66) {
        //If the random number is between 0.33 and 0.66, choose paper
        return "PAPER";
    } else if (randomNumber >= 0.66) {
        //If the random number is greater than or equal to 0.66, choose scissors
        return "SCISSORS";
    }

}

//Prompts user to input their choice, checks validity, and returns it
function getHumanChoice() {
    //Create a string variable that stores the user's choice
    let choice = prompt("Rock, paper, or scissors?").toUpperCase();

    //If user inputs a valid choice, return it
    if (choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS") {
        return choice;
    } else {
        //If user's input is invalid, ask user to try again
        alert("Invalid choice. Pick rock, paper, or scissors.");
        return getHumanChoice();
    }
}

//Takes the string arguments for winner, user's choice, and computer's choice and returns the result message
function getResultMessage(winner, humanChoice, computerChoice) {
    //Create a string variable to store the result message
    let result = "";

    //Store the appropriate string to output the results
    if (winner === "user") {
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (winner === "comp") {
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else if (winner === "tie") {
        result = `It's a tie! You both chose ${computerChoice}.`;
    }

    return result;
}

//Takes the user's and computer's choice and returns the winner
function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "ROCK" && computerChoice === "SCISSORS")
        || (humanChoice === "PAPER" && computerChoice === "ROCK")
        || (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        //If user picks the winning choice, return string "user"
        return "user";
    } else if (humanChoice === computerChoice) {
        //If user and computer picked the same choice, return string "tie"
        return "tie";
    } else {
        //Computer wins if user does not, return string "comp"
        return "comp";
    }

}

//Plays 5 rounds of rock, paper, scissors
function playGame() {
    //Create number variables to store user's score and computer's score
    let humanScore = 0;
    let computerScore = 0;

    //Set up 5 rounds of rock, paper, scissors
    for (let i = 1; i < 6; i++) {
        //Create string variables to store the user and computer's choices
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        //Create string variable to store the winner
        let winner = playRound(humanChoice, computerChoice);

        //Increment the score for the winner
        if (winner === "user") {
            humanScore += 1;
        } else if (winner === "comp") {
            computerScore += 1;
        } 

        //Log the round's results
        console.log(`Round ${i}: ${getResultMessage(winner, humanChoice, computerChoice)}`);
    }

    //Create a string variable to store the result of the overall game
    let result = `You: ${humanScore} | Computer: ${computerScore} || Game over. `

    //Store the appropriate string for the result
    if (humanScore > computerScore) {
        result += `You won!`;
    } else if (humanScore < computerScore) {
        result += "You lost!";
    } else if (humanScore == computerScore) {
        result += "It's a tie!";
    }

    return result;
}

console.log(playGame());