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

    if (playerScore > computerScore) {
        victoryElement.textContent = 'Ви перемогли!';
    } else if (playerScore < computerScore) {
        victoryElement.textContent = 'Ви програли!';
    } else {
        victoryElement.textContent = 'Нічия!';
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
        console.log('Нічия!');
    } else if (
        (playerChoice === "камінь" && computerChoice === "ножиці") ||
        (playerChoice === "ножиці" && computerChoice === "папір") ||
        (playerChoice === "папір" && computerChoice === "камінь")
    ) {
        console.log('Ви виграли раунд!');
        playerScore++;
    } else {
        console.log('Комп’ютер виграв раунд!');
        computerScore++;
    }

    updateScores();
}

imgOfStone.addEventListener('click', () => playGame('камінь'));
imgOfScissors.addEventListener('click', () => playGame('ножиці'));
imgOfPaper.addEventListener('click', () => playGame('папір'));
