const FechaInicial = new Date('2022-09-01');
const FechaFinalIngenieria = new Date('2025-04-30');
const FechaFinalTsu = new Date('2024-08-30');
const tiempoTotalIngenieria = FechaFinalIngenieria.getTime() - FechaInicial.getTime();
const tiempoTotalTsu = FechaFinalTsu.getTime() - FechaInicial.getTime();



let progressBar = document.getElementById("barra_Progreso");

//función que actualiza la barra de progreso
let progresoActual = 0;
function actualizarBarraProgreso() {
    let tiempoTranscurrido = new Date().getTime() - FechaInicial.getTime();

    progresoActual = (tiempoTranscurrido / tiempoTotalIngenieria) * 100;
    progressBar.value = progresoActual;

    console.log(progresoActual);

    if (progresoActual >= 100) {
        clearInterval(intervalId);
    }
}


//invocador de la función al cargar la página y cada 5 segundos después
document.addEventListener("DOMContentLoaded", function () {
    actualizarBarraProgreso();
    setInterval(actualizarBarraProgreso, 5000);
});

