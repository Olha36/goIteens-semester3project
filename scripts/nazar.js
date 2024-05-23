// console.log('Nazar');

const startGameButton = document.querySelector('.startGameButton')
const againGameButton = document.querySelector('.againGameButton')
const dinoImg = document.querySelector('.dinoImage')
const cactusImg = document.querySelector('.cactusImage')

function startGame() {
    console.log(startGame);
}
startGame()

function stopGame() {
    console.log(stopGame);
}
stopGame()

function dinoJump() {
    console.log(dinoJump);
}
dinoJump()

function cactusMovement() {
    console.log(cactusMovement);
}
cactusMovement()

function getCoordinates() {
    const dinoCoordinates = dinoImg.getBoundingClientRect()
    const cactusCoordinates = cactusImg.getBoundingClientRect()
    console.log(dinoCoordinates);
    console.log(cactusCoordinates);
}
getCoordinates()

const isIntersectionX = cactusImg.left < dinoImg.right
console.log(isIntersectionX);

const isIntersectionY = cactusImg.top < dinoImg.bottom
console.log(isIntersectionY);