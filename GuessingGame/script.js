let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 10;
let attemptsLeft = 5;
let highScore = 0;
let checkBtn = document.querySelector(".btn-check");
let attemptsleftEl = document.querySelector("#attempts-left");
let textNumber = document.querySelector(".input-number");
let messageEl = document.querySelector(".message")
let secretNumEl = document.querySelector(".secret-number")
let body = document.querySelector("body")
let highScoreEl = document.querySelector(".current-high-score")
let currentScoreEl = document.querySelector("#current-score");
let newGame = document.querySelector('.new-Game');
let scoreDiv = document.querySelector(".score-div");
checkBtn.addEventListener('click', function () {
    console.log("button clicked")
    if (attemptsLeft > 0) {
        attemptsLeft--;

        attemptsleftEl.textContent = attemptsLeft;
        let guess = Number(textNumber.value);

        if (guess === 0) {
            messageEl.textContent = 'No number or 0 is entered';
        }
        else if (guess === secretNumber) {
            messageEl.textContent = 'you won the game!';
            secretNumEl.textContent = secretNumber;
            body.style.backgroundColor = '#52BE80';
            highScore = currentScore > highScore ? currentScore : highScore;
            scoreDiv.classList.add('won-animation');
            scoreDiv.classList.remove('lost-animation');
            scoreDiv.classList.remove('wrong-guess-animation');
            highScoreEl.textContent = highScore;
        } else if (guess != secretNumber) {
            if (currentScore > 0) {
                let message = guess > secretNumber ? 'you guessed to high!' : 'you guess to low!';
                messageEl.textContent = message;
                currentScore--;
                currentScoreEl.textContent = currentScore;
                scoreDiv.classList.add('wrong-guess-animation');
            }
            else {
                messageEl.textContent = 'you have lost the game';
                currentScoreEl.textContent = 0;
                body.style.backgroundColor = '#EC7063';
                scoreDiv.classList.remove('won-animation');
                scoreDiv.classList.add('lost-animation');

            }
        }
    } else {
        //lost the game logic
        messageEl.textContent = 'you have lost the game';
        attemptsLeft.textContent = 0;
        body.style.backgroundColor = '#EC7063';
        setTimeout(() => {
            scoreDiv.classList.remove('won-animation');
            scoreDiv.classList.add('lost-animation');

        }, 1000);
    }
})
newGame.addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    currentScore = 10;
    attemptsLeft = 5;
    messageEl.textContent = 'Guess a number 1-20';
    currentScoreEl.textContent = currentScore;
    attemptsLeft.textContent = attemptsLeft;
    secretNumEl.textContent = '?';
    textNumber.value = '';
    body.style.backgroundColor = '#222';
    scoreDiv.classList.remove('won-animation');
    scoreDiv.classList.remove('lost-animation');
    scoreDiv.classList.remove('wrong-guess-animation');
})