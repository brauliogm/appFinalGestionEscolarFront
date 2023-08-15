function evento() {
    alert("Evento");
}

let boton = document.getElementsByClassName("boton")[0];

boton.addEventListener("click", evento);
