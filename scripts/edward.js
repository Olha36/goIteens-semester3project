const calculatorInput = document.getElementById('input');
const resultButton = document.querySelector(".resultButton");
const result = document.querySelector(".result");
const subscribe = document.querySelector(".subscribe-button");
const modal = document.querySelector(".modal");
const cross = document.querySelector(".cross");

function convertTime() {
    let variable = calculatorInput.value;
    result.textContent =  Math.floor(variable/60) + ':' + (variable % 60);
}
resultButton.addEventListener('click', convertTime);

subscribe.addEventListener('click', function() {
    modal.classList.add('active')
})

cross.addEventListener('click', function() {
    modal.classList.remove('active')
})
