const imgofstone = document.querySelector('.stone')

const imgofknives = document.querySelector('.khives')

const imgofpaper = document.querySelector('.paper')
 
const computer_option = document.querySelector('.computer_option')



const Stoneknivespapergame = ["камінь", "ножиці", "папір"]

function generateComputerChoice() {
    const choices = ['камінь', 'папір', 'ножиці'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'нічия';
    }

    if (
        (userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'папір' && computerChoice === 'камінь') ||
        (userChoice === 'ножиці' && computerChoice === 'папір')
    ) {
        return 'перемога';
    } else {
        return 'поразка';
    }
}


let winCount = 0;
let lossCount = 0;
let drawCount = 0;

function updateScoreboard(result) {
    if (result === 'перемога') {
        winCount++;
    } else if (result === 'поразка') {
        lossCount++;
    } else if (result === 'нічия') {
        drawCount++;
    }

    document.getElementById('wins').textContent = `Перемоги: ${winCount}`;
    document.getElementById('losses').textContent = `Поразки: ${lossCount}`;
    document.getElementById('draws').textContent = `Нічії: ${drawCount}`;
}


document.getElementById('play-button').addEventListener('click', function() {
    const userChoice = document.getElementById('user-choice').value;
    const computerChoice = generateComputerChoice();
    const result = determineWinner(userChoice, computerChoice);

    alert(`Комп'ютер обрав: ${computerChoice}\nРезультат: ${result}`);
    updateScoreboard(result);
});

