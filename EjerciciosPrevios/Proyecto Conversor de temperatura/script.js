
let inputCel = document.getElementsByClassName("temp")[0];

let inputFar = document.getElementsByClassName("temp")[1];

function celcius() {
    let resultado = inputCel.value * 9/5 + 32;
    
    inputFar.value = resultado;
}

function farenheit() {
    let resultado = (inputFar.value - 32) * 5/9;
    
    inputCel.value = resultado;
}
