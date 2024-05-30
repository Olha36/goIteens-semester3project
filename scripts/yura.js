const ballImg = document.querySelector('.football-img')
console.log(ballImg);

const footballField = document.querySelector('.football-field')
console.log(footballField);

const sun = document.querySelector('.sun')
console.log(sun);

const body = document.querySelector('body')

const moon = document.querySelector('.moon')

const paragraphs = document.querySelectorAll('p')

const links = document.querySelectorAll('a')

const headerTexts = document.querySelectorAll('h2')   

const textTags = ['paragraphs, links, headerTexts']

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
    // textTags.forEach((textTag) => textTag.style.backgroundColor = 'red')
    // paragraphs.style.color = '#FFFFFF';
    body.style.color = '#000';
}
sun.addEventListener('click', darkModeForPage)