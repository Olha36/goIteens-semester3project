const buttonPlayAgain = document.querySelector(".button");
console.log(buttonPlayAgain);

const numberGuess = document.querySelector(".number");
console.log(numberGuess);
 
let number = getRandomNumber();
    
function getRandomNumber() {
    // return Math.round(Math.random() * (10 - 1) + 1);
    const check = Math.round(Math.random() * (10 - 1) + 1);
    console.log(check);
};

function getCheckNumbers() {
const inputValue = numberGuess.value;
console.log(inputValue);
console.log('hoidht');
}
getCheckNumbers();

numberGuess.addEventListener('focus', getCheckNumbers)