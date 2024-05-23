const imgOfStone = document.querySelector('.stone')

const imgOfScissors = document.querySelector('.scissors')

const imgOfPaper = document.querySelector('.paper')
 
const computer_option = document.querySelector('.computer_option')



const stoneKnivesPapergame = ["камінь", "ножиці", "папір"]


const computer = document.querySelector('.computer')
 let computer1 = 0;


const player = document.querySelector('.player')
let player1 = 0;












function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * stoneKnivesPapergame.length);
    return stoneKnivesPapergame[randomIndex];
}

function getPlayerChoice(choice) {
    return choice;
}

function showComputerChoice(choice) {
    computer_option.textContent = `Комп вибрав: ${choice}`;
}



function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    showComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
        displayMessage('Нічия!');
    } else if (
        (playerChoice === "камінь" && computerChoice === "ножиці") ||
        (playerChoice === "ножиці" && computerChoice === "папір") ||
        (playerChoice === "папір" && computerChoice === "камінь")
    ) {
        displayMessage('Гравець виграв!');
        player1++;
        updatePlayerScore();
    } else {
        displayMessage('Комп виграв!');
        computer1++;
        updateComputerScore();
    }

}

imgOfStone.addEventListener('click', () => playGame('камінь'));
imgOfScissors.addEventListener('click', () => playGame('ножиці'));
imgOfPaper.addEventListener('click', () => playGame('папір'));
