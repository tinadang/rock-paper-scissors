
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

};

//Takes the string arguments for winner, user's choice, and computer's choice and returns the result message
function getResultMessage(winner, humanChoice, computerChoice) {
    //Create a string variable to store the result message
    let result = "";

    //Store the appropriate string to output the results
    if (winner === "user") {
        result = `You win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`;
    } else if (winner === "computer") {
        result = `You lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}.`;
    } else if (winner === "tie") {
        result = `It's a tie! You both chose ${computerChoice.toUpperCase()}.`;
    }

    return result;
};

//Takes the user and computer's score and returns a message for the game winner
function getGameWinnerMessage(humanScore, computerScore) {
    let winnerMessage = `[Final Score] You: ${humanScore}, Computer: ${computerScore} || Game Over.`

    if (humanScore > computerScore) {
        winnerMessage += " You won!";
    } else if (humanScore < computerScore) {
        winnerMessage += " You lost!";
    } else if (humanScore == computerScore) {
        winnerMessage += " It's a tie!";
    }

    return winnerMessage;
};

//Takes the user's and computer's choice and returns a round result message
function playRound(humanChoice, computerChoice) {

    if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
        return "user";
    } else if (humanChoice === computerChoice) {

        return "tie";
    } else {
        return "computer";
    }

};

//RPS UI

const playerChoices = document.querySelectorAll("button");
const body = document.querySelector("body");

let userScore = 0;
let computerScore = 0;
let score = document.querySelector(".score");
let gameResults = document.querySelector(".results");

playerChoices.forEach((choice) => {
    choice.addEventListener("mousedown", playGame);
});

//Game is over when one user gets 5 points
playerChoices.forEach((choice) => {
    choice.addEventListener("click", (choice) => {
        if (userScore === 5 || computerScore === 5) {
            playerChoices.forEach((choice) => choice.removeEventListener("mousedown", playGame));
            score.textContent = getGameWinnerMessage(userScore, computerScore);
        }
    })
    
});

function playGame (humanChoice) {
    let userChoice = humanChoice.target.className;
    let computerChoice = getComputerChoice();
    let winner = playRound(userChoice, computerChoice);

    let resultMessage = document.createElement("li");
    resultMessage.textContent = getResultMessage(winner, userChoice, computerChoice);
    gameResults.appendChild(resultMessage);

    switch (winner) {
        case "user":
            userScore++;
            break;
        case "computer":
            computerScore++;
            break;
    }

    score.textContent = `[Score] You: ${userScore} | Computer: ${computerScore}`;
}