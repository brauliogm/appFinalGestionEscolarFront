
let inputCel = document.getElementsByClassName("temp")[0];

let inputFar = document.getElementsByClassName("temp")[1];

function conversion(inputCel) {
    inputFar.innerHTML = inputCel * 2;

}

console.log(inputFar);