const imgOfStone = document.querySelector('.stone')
const imgOfScissors = document.querySelector('.scissors')
const imgOfPaper = document.querySelector('.paper')
const computer_option = document.querySelector('.computer_option')
const computer = document.querySelector('.computer')
const player = document.querySelector('.player')


let computerPoint = 0;
let userPoint = 0;

function getComputerChoice() {
    const stoneScissorsPapergame = ["камінь", "ножиці", "папір"]
    const randomIndex = Math.floor(Math.random() * stoneScissorsPapergame.length);
    return stoneScissorsPapergame[randomIndex];
}

function getPlayerChoice(choice) {
    return choice;
}

function showComputerChoice(choice) {
    const choice = document.querySelector('.option')
    computer_option.textContent = `Комп вибрав: ${choice}`;
}
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);
    console.log(computerChoise)
    if (playerChoice === computerChoice) {
        console.log('Нічия!');
    } else if (
        (playerChoice === "камінь" && computerChoice === "ножиці") ||
        (playerChoice === "ножиці" && computerChoice === "папір") ||
        (playerChoice === "папір" && computerChoice === "камінь")
    ) {
        console.log('Ви виграли раунд!');
        player1++;
        updatePlayerScore();
    } else {
        console.log('Комп’ютер виграв раунд!');
        computer1++;
        updateComputerScore();
    }

}
function updateScores(playerScore, computerScore) {
    const playerElement = document.querySelector('.playerScore');
    const computerElement = document.querySelector('.computerScore');
    const victoryElement = document.querySelector('.victory');
    playerElement.textContent = `Ви:- ${playerScore}`;
    computerElement.textContent = `Комп'ютер- ${computerScore}`;
    if (playerScore > computerScore) {
        victoryElement.textContent = 'Ви перемогли!';
    } else if (playerScore < computerScore) {
        victoryElement.textContent = 'Ви програли!';
    } else {
        victoryElement.textContent = 'Нічия!';
    }
}


imgOfStone.addEventListener('click', () => playGame('камінь'));
imgOfScissors.addEventListener('click', () => playGame('ножиці'));
imgOfPaper.addEventListener('click', () => playGame('папір'));
