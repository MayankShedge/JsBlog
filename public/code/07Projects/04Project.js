let minVal = 1
let maxVal = 100
let randNum = parseInt(Math.floor(Math.random()*[maxVal - minVal + 1]))
// console.log(randNum);

const submitBtn = document.querySelector('#subt')

const userInput = document.getElementById('guessField')

const guessSlot = document.querySelector('.guesses')

const remaining = document.querySelector('.lastResult')

const lowOrHigh = document.querySelector('.lowOrHigh')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true // toggle for when to stop the game (basically jab sare 10 chances khatam ho jaenge we will toggle this false)

if (playGame) {
    submitBtn.addEventListener('click' , (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    // kya user ne valid number guess kara hai, value 1 se less toh nahi dera aur agar koi > 100 no dera hai toh bhi issue hoga
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }else if (guess < 1) {
        alert('Please enter number between 1-100')
    }else if (guess > 100) {
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // isme msg print karaenge as per output from the above function
    if (guess === randNum) {
        displayMessage(`Nice Job! you guessed it right`)
        endGame()
    }else if (guess < randNum) {
        displayMessage(`Number is TOOO low!!`)
    }else if (guess > randNum) {
        displayMessage(`Number is TOOO high!!`)
    }
}

function displayGuess(guess){
    // clean up method
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    // DOM manioultions from above to 2 functions
    lowOrHigh.innerHTML = `<h2> ${message} </h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e) =>{
        // reset all fields
        randNum = parseInt(Math.floor(Math.random()*[maxVal - minVal + 1]))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess} `
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        // Now toggle again
        playGame = true

    })
}
