console.log("Hello World")

// get computer source will return a random string value of either "rock" "paper" or "scissors"

function getComputerChoice() {
    const choices=["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}