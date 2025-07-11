console.log("Rock, Paper, Scissors")

// get computer source will console.log(a random string value of either "rock" "paper" or "scissors"

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

// create a function called getHumanChoice
// console.log(one choices based on user input

function getHumanChoice(){
    let x = prompt("Choose rock, paper, or scissors")
    if (x === null){
        return x
    } else {
        return x.toLowerCase()
    }
}

// Declare players score variables
// create two new variables for humanScore and computerScore
// initialize the values with a value of 0

// pseudo code
// let human score equal total number of instances where user won
// let computer score equal total number of instances where comp won
// 



//play round function pseudo code
//create two parameters that take the human an comp choices as arguments
//make humanChoice function case-insensitive git add
//console.log a string value to declare the winner with a prompt denoting who won "you lose, rock beats scissors"
//increment the humanScore or computerScore based on the round winner

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

let humanScore = 0
let computerScore = 0
let tieScore = 0

function playRound(humanSelection, computerSelection){
    
        humanSelection = getHumanChoice()
        computerSelection = getComputerChoice()  
        
        if (humanSelection === computerSelection) {
            tieScore++
            console.log(`It's a tie! ${humanSelection} equals ${computerSelection}; User Score:${humanScore} Comp Score:${computerScore}`);
        } else if (humanSelection === "rock") {
            if (computerSelection === "scissors") {
                humanScore++
                console.log(`You win! ${humanSelection} beats ${computerSelection}; User Score:${humanScore} Comp Score:${computerScore}`);
            } else {
                computerScore++
                console.log(`You lose ${computerSelection} beats ${humanSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            }
        } else if (humanSelection === "paper") {
            if (computerSelection = "rock") {
                humanScore++
                console.log(`You win! ${humanSelection} beats ${computerSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            } else {
                computerScore++
                console.log(`You lose. ${computerSelection} beats ${humanSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            }    
        } else if (humanSelection === "scissors") {
            if (computerSelection === "paper") {
                humanScore++
                console.log(`You win! { humanSelection} beats ${computerSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            } else {
                computerScore++
                console.log(`You lose. ${computerSelection} beats ${humanSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            }
        }
    }

// function that calls the playRound function
//  run playRound function
//  declare winner based on output
//  increment humanScore or computerScore based on output
//  loop playRound until either humanScore or computerScore reaches 3//

function playGame(){

    let humanScore = 0
    let computerScore = 0
    let tieScore = 0

    for (let i = 0; i < 5; i++){
        playRound();
    }

    function playRound(humanSelection, computerSelection){
    
        humanSelection = getHumanChoice()
        computerSelection = getComputerChoice()  
        
        if (humanSelection === computerSelection) {
            tieScore++
            console.log(`It's a tie! ${humanSelection} equals ${computerSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
        } else if (humanSelection === "rock") {
            if (computerSelection === "scissors") {
                humanScore++
                console.log(`You win! ${humanSelection} beats ${computerSelection}; User Score:${humanScore} Comp Score:${computerScore}`);
            } else {
                computerScore++
                console.log(`You lose ${computerSelection} beats ${humanSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            }
        } else if (humanSelection === "paper") {
            if (computerSelection = "rock") {
                humanScore++
                console.log(`You win! ${humanSelection} beats ${computerSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            } else {
                computerScore++
                console.log(`You lose. ${computerSelection} beats ${humanSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            }    
        } else if (humanSelection === "scissors") {
            if (computerSelection === "paper") {
                humanScore++
                console.log(`You win! { humanSelection} beats ${computerSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            } else {
                computerScore++
                console.log(`You lose. ${computerSelection} beats ${humanSelection}; User Score:${humanScore} Comp Score:${computerScore}`)
            }
        }
    }
}    