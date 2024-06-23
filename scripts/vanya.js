const inputFirstNumber = document.querySelector(".first_number")
const inputSecondNumber = document.querySelector(".second_number") 
const inputThirdNumber = document.querySelector(".third_number")
const button = document.querySelector("button")
const highestNumber = document.querySelector(".result")

document.getElementById('check').addEventListener('click', function() {
    let input = Number.parseInt(inputFirstNumber.value);
    let input2 = Number.parseInt(inputSecondNumber.value);
    let input3 = Number.parseInt(inputThirdNumber.value);
    const maxNumber = Math.max(input, input2, input3)
    console.log(maxNumber);
    highestNumber.textContent = `${maxNumber}`
    inputFirstNumber.value = '';
    inputSecondNumber.value = '';
    inputThirdNumber.value = '';
});

