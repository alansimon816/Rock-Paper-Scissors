const ROCK = document.querySelector('#rock')
const PAPER = document.querySelector('#paper')
const SCISSORS = document.querySelector('#scissors')
const startBtn = document.querySelector("#start-button")

let playerScore = 0, computerScore = 0, roundCount = 0

initializeGame()

// returns a random integer between min (inclusive) and max (exclusive)
let getRandom = (min, max) => ~~(Math.random() * (max - min) + min)

// simulates a computer playing rock paper scissors.
// Computer randomly chooses rock, paper, or scissors.
function computerPlay() {
    switch (getRandom(1,4)) {
        case 1: return 'Rock'
        case 2: return 'Paper'
        case 3: return 'Scissors'
    }
}

/* simulates 5 rounds of rock, paper, scissors between the computer and the user.
   The winner is whoever has won the most rounds by the end of the final round.
   this function to be executed when the Start Game button on the start-screen is
   clicked. At the end of 5 rounds, an end-game screen is displayed with results of
   game and an option to play again. */
function playGame(e) {
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
    }

    if (!roundResult.match(/draw/)) {
        roundResult.match(/win/) ? playerScore++ : computerScore++
        roundCount++
    }

    console.log(roundResult)
    displayRoundResult(roundResult, roundCount)
    console.log('Player: ' + playerScore + '     CPU: ' + computerScore) 

    if (roundCount === 5) {
        console.log(gameResult = (playerScore > computerScore) ? 'You win the game!' : 'You lose the game!')
        document.getElementById("end-text").textContent = gameResult
        // Now, hide game screen and go to new screen with Win/Loss message!
        game.style.visibility = 'hidden'
        setTimeout(function() {
            window['end-screen'].style.visibility = 'visible'
            restartButton = document.querySelector('#restart-button')
            restartButton.addEventListener('click', resetGame)
         }, 1000)
    }  
}

// temporarily displays result of round on screen
function displayRoundResult(roundResult, roundCount) {
    let para = document.createElement("p")
    let node = document.createTextNode(roundResult);
    para.appendChild(node)
    let elem = document.getElementById("round-result")
    elem.appendChild(para)

    game.style.visibility = 'hidden'
    window['round-result'].style.visibility = 'visible'

    setTimeout(function() {
        window['round-result'].style.visibility = 'hidden'
        para.remove()
        if (roundCount < 5)
            game.style.visibility = 'visible'
     }, 1000)

     
}

// resets game by setting variables back to 0
function resetGame(e) {
    playerScore = 0, computerScore = 0, roundCount = 0
    window['end-screen'].style.visibility = 'hidden'
    game.style.visibility = 'visible'
}

// Changes splash screen to game screen with game buttons
function changeScreen () {
    startScreen = document.querySelector('#start-screen')
    game = document.querySelector('#game')
    startScreen.style.visibility = 'hidden'
    game.style.visibility = 'visible'
}


// initializes the game by adding an event listener to the start button
// as well as adding event listeners to the game buttons
function initializeGame() {
    const startBtn = document.querySelector("#start-button")
    startBtn.addEventListener('click', changeScreen)
    const game_buttons = document.querySelectorAll('.game-buttons')
    game_buttons.forEach(button => button.addEventListener('click', playGame))
}