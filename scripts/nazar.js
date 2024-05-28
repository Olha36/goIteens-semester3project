const startGameButton = document.querySelector('.startGameButton')
const againGameButton = document.querySelector('.againGameButton')
const dinoImg = document.querySelector('.dinoImage')
const cactusImg = document.querySelector('.cactusImage')

let intervalID;

function startGame() {
    if(!intervalID) {
        intervalID = setInterval(getCoordinates, 10)
    }
}
startGame()

function stopGame() {
   if(intervalID) {
    intervalID = null;
   }
   cactusImg.classList.remove('cactusRunning')
}
stopGame()

function dinoJump(e) {
    let key = e.key;
    console.log(key);
    if(key === 'Spacebar' || key === ' ') {
        dinoImg.classList.add('dinoRunning')

        setTimeout(() => {
            dinoImg.classList.remove('dinoRunning')
        }, 300)
    }
}


function cactusRunning() {
    cactusImg.classList.add('cactusRunning');
}
cactusRunning()

function getCoordinates() {
    const isIntersectionX = cactusImg.left < dinoImg.right
    console.log(isIntersectionX);

    const isIntersectionY = cactusImg.top < dinoImg.bottom
    console.log(isIntersectionY);

    const dinoCoordinates = dinoImg.getBoundingClientRect()
    const cactusCoordinates = cactusImg.getBoundingClientRect()
    console.log(dinoCoordinates);
    console.log(cactusCoordinates);
}
getCoordinates()

document.addEventListener('keypress', dinoJump)