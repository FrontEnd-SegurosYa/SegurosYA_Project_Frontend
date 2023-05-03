var fechaActual = new Date();
var unAnio = 365 * 24 * 60 * 60 * 1000; // Un año en milisegundos
var fechaEnUnAnio = new Date(fechaActual.getTime() + unAnio)
document.getElementById("fecha").innerHTML = fechaActual.toDateString();