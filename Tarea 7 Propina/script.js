let cantidad = document.getElementById("cantidad");
let porcentaje = document.getElementById("porcentaje");
let propina = document.getElementById("propina");
let total = document.getElementById("total");

function calculoPropina() {
    propina.value = cantidad.value * (porcentaje.value / 100);
}

function calculoTotal() {
    total.value = Number(propina.value) + Number(cantidad.value);
}

