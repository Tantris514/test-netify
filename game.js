let clickCount = 0;
let timeLeft = 10;
let timer;

const clickButton = document.getElementById('clickButton');
const clickCountSpan = document.getElementById('clickCount');
const timeLeftSpan = document.getElementById('timeLeft');

clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountSpan.textContent = clickCount;
});

function startGame() {
    timer = setInterval(() => {
        timeLeft--;
        timeLeftSpan.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            clickButton.disabled = true;
            alert('Game over! Your score is ' + clickCount);
        }
    }, 1000);
}

startGame();