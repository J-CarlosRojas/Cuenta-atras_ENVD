const FechaInicial = new Date('2022-09-01');
const FechaFinalIngenieria = new Date('2026-08-30');
const FechaFinalTsu = new Date('2024-12-31');
const tiempoTotalIngenieria = FechaFinalIngenieria.getTime() - FechaInicial.getTime();
const tiempoTotalTsu = FechaFinalTsu.getTime() - FechaInicial.getTime();

//función que actualiza la barra de progreso
let progressBar = document.getElementById("barra_Progreso");
let progresoActualIngenieria = 0;
let lista_porcentaje = document.getElementById("lista_porcentaje");

function actualizarBarraProgreso() {
    let tiempoTranscurrido = new Date().getTime() - FechaInicial.getTime();

    progresoActualIngenieria = (tiempoTranscurrido / tiempoTotalIngenieria) * 100;
    progresoActualTsu = (tiempoTranscurrido / tiempoTotalTsu) * 100;

    progressBar.value = progresoActualIngenieria;

    console.log(progresoActualIngenieria);
    console.log(progresoActualTsu);

    lista_porcentaje.innerHTML = "";


    let liPorcentajeIngenieria = document.createElement("li");
    liPorcentajeIngenieria.textContent = `Ingeniería: ${progresoActualIngenieria.toFixed(4)} %`;
    lista_porcentaje.appendChild(liPorcentajeIngenieria);

    let liPorcentajeTsu = document.createElement("li");
    liPorcentajeTsu.textContent = `TSU: ${progresoActualTsu.toFixed(4)} %`;
    lista_porcentaje.appendChild(liPorcentajeTsu);

    if (progresoActualIngenieria >= 100) {
        clearInterval(intervalId);
    }
}

//función para el tiempo para terminar la ingenieria y el TSU
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
    setInterval(actualizarBarraProgreso, 120000);
    setInterval(tiempo_Para, 5000);
});

