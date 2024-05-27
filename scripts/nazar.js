const startGameButton = document.querySelector('.startGameButton')
const againGameButton = document.querySelector('.againGameButton')
const dinoImg = document.querySelector('.dinoImage')
const cactusImg = document.querySelector('.cactusImage')

let intervalID;

function startGame() {
    // console.log(startGame); //функцію саму в собі ми не викликаємо.
    if(!intervalID) {
        intervalID = setInterval(getCoordinates, 10)
    }

}
startGame()

function stopGame() {
   //  console.log(stopGame); //функцію саму в собі ми не викликаємо.
   if(intervalID) {
    intervalID = null;
   }

   //тепер треба забрати в кактуса клас, за допомогою якого він рухається
}
stopGame()

function dinoJump(e) {
    let key = e.key;
    console.log(key);
    if(key === 'Spacebar' || key === ' ') { //назва кнопки не space, а  spacebar
        dinoJump //функцію саму в собі ми не викликаємо. Тут треба додати клас css, при якому динозавр буде пригати.

        setTimeout(() => {
            dinoImg.classList.remove('тут назва класу при якому динозавр пригає')
        }, 300)
    }
}


function cactusMovement() {
    // console.log(cactusMovement); // не викликаємо функцію саму в собі! 
    

}
cactusMovement()

function getCoordinates() {
    const dinoCoordinates = dinoImg.getBoundingClientRect()
    const cactusCoordinates = cactusImg.getBoundingClientRect()
    console.log(dinoCoordinates);
    console.log(cactusCoordinates);
}
getCoordinates()

const isIntersectionX = cactusImg.left < dinoImg.right // цей код має бути в функції getCoordinates()
console.log(isIntersectionX); // цей код має бути в функції getCoordinates()

const isIntersectionY = cactusImg.top < dinoImg.bottom // цей код має бути в функції getCoordinates()
console.log(isIntersectionY); // цей код має бути в функції getCoordinates()

document.addEventListener('keypress', dinoJump)