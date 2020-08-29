const ROCK = document.querySelector('#rock')
const PAPER = document.querySelector('#paper')
const SCISSORS = document.querySelector('#scissors')

// returns a random integer between min (inclusive) and max (exclusive)
let getRandom = (min, max) => ~~(Math.random() * (max - min) + min)

// simulates a computer playing rock paper scissors
function computerPlay() {
    switch (getRandom(1,4)) {
        case 1: return 'Rock'
        case 2: return 'Paper'
        case 3: return 'Scissors'
    }
}

// plays an animation upon click
function playClickAnimation(e) {
    button.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing'); //this refers to the button element calling addEventListener
} 

  // simulates a round of rock, paper, scissors and determines if user won or lost
  function determineRound(computerSelection) {
    if (computerSelection == 'Rock' && button.id === 'scissors') {
        return 'You lose the round! Rock beats scissors' 
    } else if (computerSelection == 'Scissors' && button.id === 'paper') {
        return 'You lose the round! Scissors beats paper' 
    } else if (computerSelection == 'Paper' && button.id === 'rock') {
        return 'You lose the round! Paper beats rock'
    } else if (computerSelection == 'Rock' && button.id === 'paper') {
        return 'You win the round! Paper beats rock' 
    } else if (computerSelection == 'Scissors' && button.id === 'rock') {
        return 'You win the round! Rock beats scissors' 
    } else if (computerSelection == 'Paper' && button.id === 'scissors') {
        return 'You win the round! Scissors beats paper'
    } else {
        return 'The round is a draw!' 
    }     
}

/* simulates 5 rounds of rock, paper, scissors between the computer and the user.
   The winner is whoever has won the most rounds by the end of the final round. */
function game() {
    let roundResult, playerSelection, computerSelection, playerScore = 0, computerScore = 0, roundCount = 0
    const buttons = document.querySelectorAll('button')

    buttons.forEach(button => button.addEventListener('click', playClickAnimation))
    computerSelection = computerPlay()
    buttons.forEach(button => button.addEventListener('click', determineRound))
    buttons.forEach(button => button.addEventListener('transitionend', removeTransition))


    // do {
    //     computerSelection = computerPlay()
    //     console.log(roundResult = playRound(computerSelection,playerSelection))
    //     roundResult.match(/win/) ? playerScore++ : computerScore++
    //     roundCount++
    // } while (roundCount == 0 /* < 5 */)

    // console.log(playerScore > computerScore ? 'You win the game!' : 'You lose the game!')
}

// game()