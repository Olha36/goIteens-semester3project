const imgOfStone = document.querySelector('.stone');
const imgOfScissors = document.querySelector('.scissors');
const imgOfPaper = document.querySelector('.paper');
const computerOptionElement = document.querySelector('.computer_option');
const playerScoreElement = document.querySelector('.playerScore');
const computerScoreElement = document.querySelector('.computerScore');
const victoryElement = document.querySelector('.victory');

let computerScore = 0;
let playerScore = 0;

const choices = ["камінь", "ножиці", "папір"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function showComputerChoice(choice) {
    computerOptionElement.textContent = `Комп вибрав: ${choice}`;
}

function updateScores() {
    playerScoreElement.textContent = `Ви: ${playerScore}`;
    computerScoreElement.textContent = `Комп'ютер: ${computerScore}`;

}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);

    if (
        (playerChoice === "камінь" && computerChoice === "ножиці") ||
        (playerChoice === "ножиці" && computerChoice === "папір") ||
        (playerChoice === "папір" && computerChoice === "камінь")
    ) {
        console.log('Ви виграли раунд!');
        playerScore++;
        victoryElement.textContent = 'Ви виграли раунд!';
        victoryElement.classList.add('win');
        victoryElement.classList.remove('lose');
    } else {
        console.log('Комп’ютер виграв раунд!');
        computerScore++;
        victoryElement.textContent = 'Комп’ютер виграв раунд!';
        victoryElement.classList.add('lose');
        victoryElement.classList.remove('win');
    }

    updateScores();
}

imgOfStone.addEventListener('click', () => playGame('камінь'));
imgOfScissors.addEventListener('click', () => playGame('ножиці'));
imgOfPaper.addEventListener('click', () => playGame('папір'));
