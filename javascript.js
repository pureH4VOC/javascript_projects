console.log("Rock, Paper, Scissors")

// get computer source will return a random string value of either "rock" "paper" or "scissors"

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

// create a function called getHumanChoice
// return one choices based on user input

function getHumanChoice(){
    let x = prompt("Choose rock, paper, or scissors")
    return x.toLowerCase()
}

// Declare players score variables
// create two new variables for humanScore and computerScore
// initialize the values with a value of 0

// pseudo code
// let humanscore equal total number of instances where user won
// let computerscore equal total number of instances where comp won
// 

let humanScore = 0
let computerScore = 0

//play round function pseudo code
//create two parameters that take the human an comp choices as arguments
//make humanChoice function case-insensitive 
//console.log a string value to declare the winner with a prompt denoting who won "you lose, rock beats scissors"
//increment the humanScore or computerScore based on the round winner

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


function playRound(humanSelection, computerSelection){
    
    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()  
    
    if (humanSelection === computerSelection) {
        return `It's a tie! ${humanSelection} equals ${computerSelection}`;
    } else if (humanSelection === "rock") {
        if (computerSelection === "scissors") {
            return `You win! ${humanSelection} beats ${computerSelection}.`
        } else {
            return `You lose ${computerSelection} beats ${humanSelection}.`
        }
    } else if (humanSelection === "paper") {
        if (computerSelection = "rock") {
            return `You win! ${humanSelection} beats ${computerSelection}.`
        } else {
            return `You lose. ${computerSelection} beats ${humanSelection}.`
        }    
    } else if (humanSelection === "scissors") {
        if (computerSelection === "paper") {
            return `You win! ${ humanSelection} beats ${computerSelection}.`
        } else {
            return `You lose. ${computerSelection} beats ${humanSelection}.`
        }
    }
}

// function that calls the playRound function and executes it fives times
// function will log the score of a win to either human score or computer score
// declare winner at the end of the five rounds

function playGame(){

}