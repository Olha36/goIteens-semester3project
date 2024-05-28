const startGameButton = document.querySelector('.startGameButton')
const againGameButton = document.querySelector('.againGameButton')
const dinoImg = document.querySelector('.dinoImage')
const cactusImg = document.querySelector('.cactusImage')

let intervalID;

function startGame() {
    if(!intervalID) {
        intervalID = setInterval(getCoordinates, 10)
    }
    cactusRunning()
    console.log('running');
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
    // console.log(key);
    if(key === 'Spacebar' || key === ' ') {
        dinoImg.classList.add('dinoRunning')

        setTimeout(() => {
            dinoImg.classList.remove('dinoRunning')
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
    // console.log(isIntersectionX);

    const isIntersectionY = cactusCoordinates.top < dinoCoordinates.bottom
    // console.log(isIntersectionY);

    
    // console.log(dinoCoordinates);
    // console.log(cactusCoordinates);
}

document.addEventListener('keypress', dinoJump)
startGameButton.addEventListener('click', startGame)