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

// simulates a round of rock, paper, scissors and determines if user won or lost
function playRound(computerSelection, playerSelection) {
    if (computerSelection == 'Rock' && playerSelection.match(SCISSORS)) {
        return 'You lose the round! Rock beats scissors' 
    } else if (computerSelection == 'Scissors' && playerSelection.match(PAPER)) {
        return 'You lose the round! Scissors beats paper' 
    } else if (computerSelection == 'Paper' && playerSelection.match(ROCK)) {
        return 'You lose the round! Paper beats rock'
    } else if (computerSelection == 'Rock' && playerSelection.match(PAPER)) {
        return 'You win the round! Paper beats rock' 
    } else if (computerSelection == 'Scissors' && playerSelection.match(ROCK)) {
        return 'You win the round! Rock beats scissors' 
    } else if (computerSelection == 'Paper' && playerSelection.match(SCISSORS)) {
        return 'You win the round! Scissors beats paper'
    } else {
        return 'The round is a draw!' 
    }     
}

/* simulates 5 rounds of rock, paper, scissors between the computer and the user.
   The winner is whoever has won the most rounds by the end of the final round. */
function game() {
    // let roundResult, playerSelection, computerSelection, playerScore = 0, computerScore = 0, roundCount = 0

    // do {
    //     playerSelection = prompt('Enter "Rock", "Paper", or "Scissors":' )
    //     if (!isValid(playerSelection)) continue
    //     computerSelection = computerPlay()
    //     console.log(roundResult = playRound(computerSelection,playerSelection))
    //     roundResult.match(/win/) ? playerScore++ : computerScore++
    //     roundCount++
    // } while (roundCount < 5)

    // console.log(playerScore > computerScore ? 'You win the game!' : 'You lose the game!')
}

// game()