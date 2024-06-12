<<<<<<< HEAD
=======
const calculatorInput = document.getElementById('input');
const resultButton = document.querySelector(".resultButton");
const result = document.querySelector(".result");
function convertTime() {
    let variable = calculatorInput.value;
    result.textContent =  Math.floor(variable/60) + ':' + (variable % 60);
}
resultButton.addEventListener('click', convertTime);
>>>>>>> feature/card-vanya
