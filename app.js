const game = () => {
    let playScore = 0
    let compScore = 0
    let userName = ''
    const playBtn = document.querySelector('.intro button')
    const introScreen = document.querySelector('.intro')
    const match = document.querySelector('.match')
    const score = document.querySelector('.score')
    const winner = document.querySelector('.winner')
    console.log(winner);
    // bootbox.alert("This is the default alert!");

    // start game
    const startGame = () => {


        playBtn.addEventListener('click', () => {
            userName = prompt(`Enter your name please?, name`)

            introScreen.classList.add('fadeOut')
            match.classList.add('fadeIn')
            score.classList.add('fadeIn')

            const updateUserName = () => {
                const dispalyUserName = document.querySelector('.player-score h2')
                dispalyUserName.textContent = userName
            }
            updateUserName()
        })
    }
    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('.player-hand')
        const compHand = document.querySelector('.comp-hand')
        const compOptions = ['rock', 'paper', 'scissors']
        const hands = document.querySelectorAll('.hands img')


        hands.forEach((hand) => {
            hand.addEventListener('animationend', function () {
                this.style.animation = ''
            })
        })

        options.forEach((option) => {
            option.addEventListener('click', function () {
                // comp choice
                const computerNumber = Math.floor(Math.random() * 3)
                const compChoice = compOptions[computerNumber]
                winner.style = 'opacity: 0'
                console.log(winner);
                setTimeout(() => {
                    // call compare hands
                    compareHands(this.textContent, compChoice)
                    winner.style = 'opacity: 1'
                    // update images
                    playerHand.src = `./img/${this.textContent}.png`
                    compHand.src = `./img/${compChoice}.png`
                }, 2000)
                // update img again
                playerHand.src = `./img/rock.png`
                compHand.src = `./img/rock.png`
                // animation 
                playerHand.style.animation = 'shakePlayer 2s ease'
                compHand.style.animation = 'shakeComputer 2s ease'
            })
        })
    }

    const updateScore = () => {
        const displayPlayerScore = document.querySelector('.player-score p')
        const displayComputer = document.querySelector('.comp-score p')
        displayPlayerScore.textContent = playScore
        displayComputer.textContent = compScore
        // if (playScore === 2) {
        //     console.log('yra play win');
        // } else if (compScore === 2) {
        //     console.log('comp win');
        // }
    }

    const compareHands = (playerChoice, compChoice) => {
        // Update text
        const winner = document.querySelector('.winner')

        if (playerChoice === compChoice) {
            winner.textContent = 'It is a draw!'
            return
        }
        // Check for rock
        if (playerChoice === 'rock') {
            if (compChoice === 'scissors') {
                winner.textContent = `${userName} Wins!`
                playScore++
                updateScore()
                return
            } else {
                winner.textContent = 'Computer Wins!'
                compScore++
                updateScore()
                return
            }

        }
        // Check for paper
        if (playerChoice === 'paper') {
            if (compChoice === 'scissors') {
                winner.textContent = 'Computer Wins!'
                compScore++
                updateScore()
                return
            } else {
                winner.textContent = `${userName} Wins!`//'Player Wins!'
                playScore++
                updateScore()
                return
            }

        }
        // Check for scissors
        if (playerChoice === 'scissors') {
            if (compChoice === 'rock') {
                winner.textContent = 'Computer Wins!'
                compScore++
                updateScore()
                return
            } else {
                winner.textContent = `${userName} Wins!` //'Player Wins!'
                playScore++
                updateScore()
                return
            }
        }
    }
    startGame()
    playMatch()
}
game()