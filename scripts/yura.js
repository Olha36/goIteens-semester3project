const footBall = document.querySelector('.football-img')
console.log(footBall);

const footballField = document.querySelector('.football-field')
console.log(footballField);

function getClickCoordinates(event) {
let newPositionLeft = event.clientX - footballField.getBoundingClientRect().left;
console.log(newPositionLeft);
let newPositionTop = event.clientY - footballField.getBoundingClientRect().top;
console.log(newPositionTop);
footBall.style.top = newPositionTop - 25 + 'px'
footBall.style.top = newPositionLeft - 25 + 'px'

}
footballField.addEventListener('click', getClickCoordinates)