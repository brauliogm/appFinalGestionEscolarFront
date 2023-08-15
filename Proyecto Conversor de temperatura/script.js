let num = 0;

let contador = document.getElementsByClassName("contador")[0];

function aumentar() {
    num++;
    contador.innerHTML = num;
}

function disminuir() {
    num--;
    contador.innerHTML = num;
}

function reiniciar() {
    num = 0;
    contador.innerHTML = 0;
}
