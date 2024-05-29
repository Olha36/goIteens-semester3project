const buttonPlayAgain = document.querySelector(".button");
console.log(buttonPlayAgain)

const numberGuess = document.querySelector(".number");
console.log(numberGuess)


function getRandomNumber() {
    return Math.round(Math.random() * (100 - 1) + 1);
 
};

// function getCheckNumbers() {
// const inputWellYou = numberGuess.value
// console.log(inputWellYou)
// }
// getCheckNumbers()