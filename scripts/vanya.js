console.log('Vanya');
const InputFirstNumber = document.querySelector(".first_number")
const ImputSecondNumber = document.querySelector(".second_number") 
const InputThirdNumber = document.querySelector(".third_number")
const Button = document.querySelector("button")
const PHighestNumber = document.querySelector("p")
function getRandomNumber() {
    return Math.random();
}
document.getElementById('button').addEventListener('click', function() {
    const input = document.getElementsByClassName(".first_number").value;
    const input2 = document.getElementsByClassName(".second_number").value;
    const input3 = document.getElementsByClassName(".third_number").value;
    
    showBiggestNumber(numbers);
});
