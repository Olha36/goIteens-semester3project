const calculatorInput = document.querySelector(".search-button-wrapper input");
const resultButton = document.querySelector(".resultButton");
const result = document.querySelector(".result");
let variable = calculatorInput.value;
// let hoursResult = Math.floor(variable/60);
// let minuteResult = Math.floor(hoursResult/60);

function convertTime() {
    result.textContent =  Math.floor(variable/60) + ':' + (hoursResult %60);
}
resultButton.addEventListener('click', convertTime);
