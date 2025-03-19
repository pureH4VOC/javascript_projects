console.log("Hello World")

// get computer source will return a random string value of either "rock" "paper" or "scissors"

function getComputerChoice() {
    const choices=["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

// create a function called getHumanChoice
// return one choices based on user input

function getHumanChoice(){
    prompt("Choose rock, paper, or scissors")
}

// Declare players score variables
// create two new variables for humanScore and computerScore
// initialize the values with a value of 0

// pseudo code
// let humanscore equal total number of instances where user won
// let computerscore equal total number of instances where comp won
// 
