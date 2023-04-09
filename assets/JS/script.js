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


//función para el tiempo para terminar la ingenieria y el TSU
let tiempoParaIngenieria = 0;
let tiempoParaTsu = 0;

let listaTiempoPara = document.getElementById("tiempo_Para");
function tiempo_Para() {
    let tiempoParaIngenieria = (( FechaFinalIngenieria.getTime() - new Date().getTime()  ) / (1000 * 60 * 60));
    let tiempoParaTsu = (( FechaFinalTsu.getTime() - new Date().getTime()  ) / (1000 * 60 * 60));

    //borra los elementos de la lista para que no se acumulen
    listaTiempoPara.innerHTML = "";

    //añade los elementos a la lista "tiempoPara"
    let liTiempoIngenieria = document.createElement("li");
    liTiempoIngenieria.textContent = `Ingeniería: ${tiempoParaIngenieria.toFixed(4)} horas`;
    listaTiempoPara.appendChild(liTiempoIngenieria);

    let liTiempoTsu = document.createElement("li");
    liTiempoTsu.textContent = `TSU: ${tiempoParaTsu.toFixed(4)} horas`;
    listaTiempoPara.appendChild(liTiempoTsu);

}






//invocador de la función al cargar la página y cada 5 segundos después
document.addEventListener("DOMContentLoaded", function () {
    actualizarBarraProgreso();
    tiempo_Para();
    setInterval(actualizarBarraProgreso, 25000);
    setInterval(tiempo_Para, 5000);
});

