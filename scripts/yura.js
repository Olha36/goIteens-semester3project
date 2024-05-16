const footBall = document.querySelector('.football-img')
console.log(footBall);

const footballField = document.querySelector('.football-field')
console.log(footballField);

function getClickCoordinates(event) {
let newPositionLeft = event.clientX - footballField.getBoundingClientRect().left;
console.log(newPositionLeft);
}
footballField.addEventListener('click', getClickCoordinates)