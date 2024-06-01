const startGameButton = document.querySelector('.startGameButton')
const againGameButton = document.querySelector('.againGameButton')
const dinoImg = document.querySelector('.dinoImage')
const cactusImg = document.querySelector('.cactusImage')
const result = document.querySelector('.result')

let intervalID = null;

function startGame() {
    if(!intervalID) {
        intervalID = setInterval(getCoordinates, 10)
    }
    cactusRunning()
    // console.log('running');
}
// startGame()


function stopGame() {
   if(intervalID) {
    clearInterval(intervalID)
    intervalID = null;
   }
   cactusImg.classList.remove('cactusRunning')
}
// stopGame()

function dinoJump(e) {
    let key = e.key;
    // console.log(key);
    if(key === 'Spacebar' || key === ' ') {
        dinoImg.classList.add('dinoJump')

        setTimeout(() => {
            dinoImg.classList.remove('dinoJump')
        }, 300)
    }
}

function cactusRunning() {
  if(cactusImg.classList != 'cactusRunning') {
    cactusImg.classList.add('cactusRunning');
  }
}
// cactusRunning()

function getCoordinates() {
    const dinoCoordinates = dinoImg.getBoundingClientRect()
    const cactusCoordinates = cactusImg.getBoundingClientRect()

    const isIntersectionX = cactusCoordinates.left < dinoCoordinates.right
    const isIntersectionY = cactusCoordinates.top < dinoCoordinates.bottom
    if (isIntersectionX && isIntersectionY) {
        stopGame()
        console.log('Finished');
        result.textContent = 'Finished game';
    }

}

function resetGame() {
    stopGame()
    startGame()
    result.textContent = ''
}
resetGame()


document.addEventListener('keydown', dinoJump)
startGameButton.addEventListener('click', startGame)
againGameButton.addEventListener('click', resetGame)