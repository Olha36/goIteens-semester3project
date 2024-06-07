const buttonPlayAgain = document.querySelector(".button");
console.log(buttonPlayAgain);

const numberGuess = document.querySelector(".number");
console.log(numberGuess);

const img = document.querySelector('.img');

 
let number = getRandomNumber();
    
function getRandomNumber() {
    // return Math.round(Math.random() * (10 - 1) + 1);
    const check = Math.round(Math.random() * (10 - 1) + 1);
    console.log(check);
};

function getCheckNumbers() {
    let inputValue = numberGuess.value;
    console.log(inputValue);
    console.log('hoidht');
    if(inputValue == getRandomNumber()) {
        alert('користувач виграв')
    } else {
        alert('користувач програв')
    }
    numberGuess.value = ''
}

img.addEventListener('click', getCheckNumbers)