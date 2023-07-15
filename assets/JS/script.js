const FechaInicial = new Date('2022-09-01');
const FechaFinalIngenieria = new Date('2026-08-31');
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
    const tiempoParaIngenieria = ((FechaFinalIngenieria.getTime() - new Date().getTime()) / (1000 * 60 * 60));
    const tiempoParaTsu = ((FechaFinalTsu.getTime() - new Date().getTime()) / (1000 * 60 * 60));

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

//funcion que actializa los cuatrimestres actuales.
function actualizarProgresoCuatrimestre() {
    const cuatrimestres = [
      { clase: "cua_Cero", inicio: new Date('2022-09-01'), fin: new Date('2022-12-31') },
      { clase: "cua_Uno", inicio: new Date('2023-01-01'), fin: new Date('2023-04-30') },
      { clase: "cua_Dos", inicio: new Date('2023-05-01'), fin: new Date('2023-08-31') },
      { clase: "cua_Tres", inicio: new Date('2023-09-01'), fin: new Date('2023-12-31') },
      { clase: "cua_Cuatro", inicio: new Date('2024-01-01'), fin: new Date('2024-04-30') },
      { clase: "cua_Cinco", inicio: new Date('2024-05-01'), fin: new Date('2024-08-31') },
      { clase: "cua_Seis", inicio: new Date('2024-09-01'), fin: new Date('2024-12-31') },
      { clase: "cua_Siete", inicio: new Date('2025-01-01'), fin: new Date('2025-04-30') },
      { clase: "cua_Ocho", inicio: new Date('2025-05-01'), fin: new Date('2025-08-31') },
      { clase: "cua_Nueve", inicio: new Date('2025-09-01'), fin: new Date('2025-12-31') },
      { clase: "cua_Diez", inicio: new Date('2026-01-01'), fin: new Date('2026-04-30') },
      { clase: "cua_Once", inicio: new Date('2026-05-01'), fin: new Date('2026-08-31') },
      
    ];
  
    const fechaActual = new Date().getTime();
  
    for (let i = 0; i < cuatrimestres.length; i++) {
      const cuatrimestre = cuatrimestres[i];
      const progressBar = document.querySelector(`.${cuatrimestre.clase} progress`);
      const porcentajeElement = document.querySelector(`.${cuatrimestre.clase} .porcentaje`);

  
      if (fechaActual > cuatrimestre.fin.getTime()) {
        progressBar.value = 100;
        porcentajeElement.textContent = '100%';

      } else if (fechaActual >= cuatrimestre.inicio.getTime() && fechaActual <= cuatrimestre.fin.getTime()) {
        const tiempoTotal = cuatrimestre.fin.getTime() - cuatrimestre.inicio.getTime();
        const tiempoTranscurrido = fechaActual - cuatrimestre.inicio.getTime();
        const progresoActual = (tiempoTranscurrido / tiempoTotal) * 100;
        progressBar.value = progresoActual.toFixed(4);
        porcentajeElement.textContent = `${progresoActual.toFixed(4)}%`;
      } else {
        progressBar.value = 0;
        porcentajeElement.textContent = '0%';

      }
    }
  }


//invocador de la función al cargar la página y cada 5 segundos después
document.addEventListener("DOMContentLoaded", function () {
    actualizarBarraProgreso();
    tiempo_Para();
    actualizarProgresoCuatrimestre()
    setInterval(actualizarBarraProgreso, 120000);
    setInterval(tiempo_Para, 5000);
    setInterval(actualizarProgresoCuatrimestre, 9000);

});

