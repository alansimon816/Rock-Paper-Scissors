const ROCK = document.querySelector('#rock')
const PAPER = document.querySelector('#paper')
const SCISSORS = document.querySelector('#scissors')
const startBtn = document.querySelector("#start-button")

let playerScore = 0, computerScore = 0, roundCount = 0

// returns a random integer between min (inclusive) and max (exclusive)
let getRandom = (min, max) => ~~(Math.random() * (max - min) + min)

startBtn.addEventListener('click', changeScreen)
startBtn.addEventListener('click', playGame)

// simulates a computer playing rock paper scissors
function computerPlay() {
    switch (getRandom(1,4)) {
        case 1: return 'Rock'
        case 2: return 'Paper'
        case 3: return 'Scissors'
    }
}

// simulates a round of rock, paper, scissors and determines if user won or lost
function determineRound(e) {
    computerSelection = computerPlay()
    console.log(this.id)
    let roundResult, gameResult
    if (computerSelection === 'Rock' && this.id == 'scissors') {
        roundResult = 'You lose the round! Rock beats scissors' 
    } else if (computerSelection === 'Scissors' && this.id == 'paper') {
        roundResult = 'You lose the round! Scissors beats paper'
    } else if (computerSelection === 'Paper' && this.id == 'rock') {
        roundResult = 'You lose the round! Paper beats rock'
    } else if (computerSelection === 'Rock' && this.id == 'paper') {
        roundResult = 'You win the round! Paper beats rock'
    } else if (computerSelection === 'Scissors' && this.id == 'rock') {
        roundResult = 'You win the round! Rock beats scissors' 
    } else if (computerSelection === 'Paper' && this.id == 'scissors') {
        roundResult = 'You win the round! Scissors beats paper'
    } else {
        roundResult = 'The round is a draw!'
        console.log(roundResult)
        return
    } 
    roundResult.match(/win/) ? playerScore++ : computerScore++  
    console.log(roundResult)
    console.log('Player: ' + playerScore + '     CPU: ' + computerScore) 
    roundCount++
    if (roundCount === 5) {
        console.log(gameResult = (playerScore > computerScore) ? 'You win the game!' : 'You lose the game!')
        document.getElementById("end-text").textContent = gameResult
        // Now, hide game screen and go to new screen with Win/Loss message!
        game.style.visibility = 'hidden'
        window['end-screen'].style.visibility = 'visible'
    }  
}

// Changes splash screen to game screen with game buttons
function changeScreen () {
    startScreen = document.querySelector('#start-screen')
    game = document.querySelector('#game')
    startScreen.style.visibility = 'hidden'
    game.style.visibility = 'visible'
}


/* simulates 5 rounds of rock, paper, scissors between the computer and the user.
   The winner is whoever has won the most rounds by the end of the final round.
   We want this function to be executed when the Start Game button is clicked*/
function playGame() {
    const buttons = document.querySelectorAll('button')
    const game_buttons = document.querySelectorAll('.game-buttons')
    game_buttons.forEach(button => button.addEventListener('click', determineRound))
}