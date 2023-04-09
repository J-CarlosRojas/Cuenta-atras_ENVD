const FechaInicial = new Date('2022-09-01');
const FechaFinalIngenieria = new Date('2025-04-30');
const FechaFinalTsu = new Date('2024-08-30');
const tiempoTotalIngenieria = FechaFinalIngenieria.getTime() - FechaInicial.getTime();
const tiempoTotalTsu = FechaFinalTsu.getTime() - FechaInicial.getTime();



let progressBar = document.getElementById("barra_Progreso");

//funcion que actualiza la barra de progreso
let progresoActual = 0;
let intervalId = setInterval(function () {
    let tiempoTranscurrido = new Date().getTime() - FechaInicial.getTime();
    //console.log((((tiempoTranscurridoIngenieria/1000)/60)/60)/24);
    progresoActual = (tiempoTranscurrido / tiempoTotalIngenieria) * 100;
    progressBar.value = progresoActual;

    if (progresoActual >= 100) {
        clearInterval(intervalId);
    }
});
