const msgContainer= document.getElementById('message')
const player1Dice = document.getElementById('p1-dice')
const player1ScoreContainer = document.getElementById('p1-score')
const player2Dice = document.getElementById('p2-dice')
const player2ScoreContainer = document.getElementById('p2-score')
const btnRoll = document.getElementById('btn-roll')
const btnReset = document.getElementById('btn-reset')
const whoBegins = document.querySelector('.active')

// let playerState = Math.random() >= 0.5
let playerState = true
let p1Score = 0
let p2Score = 0

setGame()

btnRoll.addEventListener('click', startTurn)
btnReset.addEventListener('click', setGame)

function startTurn() {
    message.textContent = playerState ? 'Player 1 turn!' : 'Player 2 turn!'

    playerState
        ? diceRolling(player1Dice)
        : diceRolling(player2Dice)

    playerState
        ? (player1ScoreContainer.textContent = p1Score += diceRolling(player1Dice))
        : (player2ScoreContainer.textContent = p2Score += diceRolling(player2Dice))

    playerState = !playerState

    if(p1Score >= 20) {
        message.textContent = 'Player 1 wins! 🙌'
        resetStyles()
        playerState = false
    }
    else if(p2Score >= 20) {
        message.textContent = 'Player 2 wins! 🙌'
        resetStyles()
        playerState = true
    }
}

function diceRolling(playerDice) {
    return playerDice.textContent = Math.floor(Math.random() * 6) + 1
}

function resetStyles() {
    btnRoll.style.display = 'none'
    btnReset.style.display = 'block'
}

function setGame() {
    player1Dice.textContent = ''
    player1ScoreContainer.textContent = 0
    
    player2Dice.textContent = ''
    player2ScoreContainer.textContent = 0
    
    btnReset.style.display = 'none'
    btnRoll.style.display = 'block'
    
    p1Score = 0
    p2Score = 0

    whoBegins.getAttribute('id') === 'p1-dice' ? (playerState = true) : (playerState = false)
    playerState ? (msgContainer.textContent = 'Player 1 turn!') : (msgContainer.textContent = 'Player 2 turn!')
}