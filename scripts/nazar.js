const startGameButton = document.querySelector('.startGameButton')
const againGameButton = document.querySelector('.againGameButton')
const dinoImg = document.querySelector('.dinoImage')
const cactusImg = document.querySelector('.cactusImage')
const result = document.querySelector('.results')

let intervalID = null;

function startGame() {
    if(!intervalID) {
        intervalID = setInterval(getCoordinates, 10);
    }
   
    cactusRunning();
}


function stopGame() {
   if(intervalID) {
    clearInterval(intervalID);
    intervalID = null;
   }
   cactusImg.classList.remove('cactusRunning');
}

function dinoJump(e) {
    let key = e.key;
    if(key === 'Spacebar' || key === ' ') {
        dinoImg.classList.add('dinoJump');

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

function getCoordinates() {
    const dinoCoordinates = dinoImg.getBoundingClientRect();
    const cactusCoordinates = cactusImg.getBoundingClientRect();

    const isIntersectionX = cactusCoordinates.left < dinoCoordinates.right && cactusCoordinates.right > dinoCoordinates.left;
    const isIntersectionY = cactusCoordinates.top < dinoCoordinates.bottom && cactusCoordinates.bottom > dinoCoordinates.top;
    
    if (isIntersectionX && isIntersectionY) {
        result.textContent = 'Finished game';
        stopGame();  
        startGameButton.setAttribute('disabled', 'true');
    }
}

function resetGame() {
    stopGame();
    startGame();
    result.textContent = '';
}


document.addEventListener('keydown', dinoJump);
startGameButton.addEventListener('click', startGame);
againGameButton.addEventListener('click', resetGame);