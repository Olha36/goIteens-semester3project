const calculator = document.querySelector(".search-button-wrapper input");
const reButton = document.querySelector(".resultButton");
const result = document.querySelector(".result");
let variuble = calculator.value;
// let hoursResult = Math.floor(variuble/60);
// let minuteResult = Math.floor(hoursResult/60);

function calculation() {
    Math.floor(variuble/60);
    Math.floor(hoursResult/60);
    
}

reButton.addEventListener('click', calculation);
