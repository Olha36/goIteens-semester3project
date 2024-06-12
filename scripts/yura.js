const ballImg = document.querySelector('.football-img')
console.log(ballImg);

const footballField = document.querySelector('.football-field')
console.log(footballField);

const sun = document.querySelector('.sun')
console.log(sun);

const body = document.querySelector('body')

const moon = document.querySelector('.moon')

const links = document.querySelectorAll('a')

const switcherButton = document.querySelector('.switcher-button')

function getClickCoordinates(event) {
    let newPositionLeft = event.clientX - footballField.getBoundingClientRect().left;
    console.log(newPositionLeft);

    let newPositionTop = event.clientY - footballField.getBoundingClientRect().top;
    console.log(newPositionTop);

    let currentPositionLeft = ballImg.offsetLeft + ballImg.width / 2
    console.log(currentPositionLeft);

    let currentPositionTop = ballImg.offsetTop + ballImg.height / 2
    console.log(currentPositionTop);

    let deltaX = newPositionLeft - currentPositionLeft
    console.log(deltaX);

    let deltaY = newPositionTop - currentPositionTop
    console.log(deltaY);

    let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY); 

    let rotation = distance * 360 / (Math.PI * ballImg.width)

    ballImg.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(${rotation}deg)`

    ballImg.style.transition = 'transform 1s ease'
}
footballField.addEventListener('click', getClickCoordinates)

function darkModeForPage() {
    sun.style.display = 'none'
    moon.style.display = 'block'
    body.classList.add('make-text-white')
    body.classList.add('linear-gradient-for-body')
    links.forEach((text) => text.classList.add('make-text-white'))
    switcherButton.style.marginLeft = '20px'
    switcherButton.style.backgroundColor = '#000000'

}
function lightModeForPage() {
    
}
sun.addEventListener('click', darkModeForPage)
moon.addEventListener('click', lightModeForPage)

