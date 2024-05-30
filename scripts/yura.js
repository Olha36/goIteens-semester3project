const ballImg = document.querySelector('.football-img')
console.log(ballImg);

const footballField = document.querySelector('.football-field')
console.log(footballField);

function getClickCoordinates(event) {
    let newPositionLeft = event.clientX - footballField.getBoundingClientRect().left;
    console.log(newPositionLeft);
    let newPositionTop = event.clientY - footballField.getBoundingClientRect().top;
    console.log(newPositionTop);
    // ballImg.style.top = newPositionTop - 10 + 'px';
    // ballImg.style.left = newPositionLeft - 10 + 'px';
    let currentPositionLeft = ballImg.offsetLeft + ballImg.width / 2
    console.log(currentPositionLeft);
    let currentPositionTop = ballImg.offsetLeft + ballImg.height / 2
    console.log(currentPositionTop);
    let deltaX = newPositionLeft - currentPositionLeft
    console.log(deltaX);
    let deltaY = newPositionTop - currentPositionTop
    console.log(deltaY);
    ballImg.style.transition = 'transform 0.5s ease'
}
footballField.addEventListener('click', getClickCoordinates)