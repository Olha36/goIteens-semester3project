const buttonPlayAgain = document.querySelector(".button");
console.log(buttonPlayAgain)

const numberGess = document.querySelector(".number");
console.log(numberGess)

function getRandomNumber() {
    return Math.round(Math.random() * (10 - 1) + 1)
}
getRandomNumber()

function getCheckNumbers() {
const inputWellYou = numberGess.value
console.log(inputWellYou)
}
getCheckNumbers()