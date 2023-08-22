// script.js
function generarClasesSincronicas() {
  debugger;
  const inicio = new Date("2023-08-14");
  const fin = new Date("2023-12-02");

  const feriados = [
    new Date("2023-08-21"),
    new Date("2023-10-16"),
    new Date("2023-11-20"),
  ];

  const entregas = [
    new Date("2023-09-14"),
    new Date("2023-09-28"),
    new Date("2023-11-02"),
  ];
  const reentregas = [
    new Date("2023-10-05"),
    new Date("2023-10-26"),
    new Date("2023-11-30"),
  ];
  const presentaciones = [
    new Date("2023-09-18"),
    new Date("2023-10-23"),
    new Date("2023-11-27"),
  ];

  const feriadosStr = feriados.map((f) => f.toISOString().split("T")[0]);
  const entregasStr = entregas.map((f) => f.toISOString().split("T")[0]);
  const reentregasStr = reentregas.map((f) => f.toISOString().split("T")[0]);
  const presentacionesStr = presentaciones.map(
    (f) => f.toISOString().split("T")[0]
  );

  const clases = [];

  let fechaActual = inicio;
  let ladoActual = "right";

  while (fechaActual <= fin) {
    const fechaActualStr = fechaActual.toISOString().split("T")[0];
    ;
    if (feriadosStr.includes(fechaActualStr)) {
      const clase = {
        fecha: fechaActualStr,
        descripcion: "Feriado",
        lado: ladoActual,
        tipo: "Feriado",
      };
      clases.push(clase);
      fechaActual = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000); // Incrementa un día
      ladoActual = ladoActual === "right" ? "left" : "right"
      continue;
    }
    if (entregasStr.includes(fechaActualStr) && fechaActual.getUTCDay() === 0) {
      const clase = {
        fecha: fechaActualStr + '(Lunes)',
        descripcion: "Clase Sincronica + Entrega de TP",
        lado: ladoActual,
        tipo: "Trabajo",
      };
      clases.push(clase);
      ladoActual = ladoActual === "right" ? "left" : "right"
      fechaActual = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000); // Incrementa un día
      continue;
    }
    if (entregasStr.includes(fechaActualStr) && fechaActual.getDay() === 3) {
      const clase = {
        fecha: fechaActualStr + '(Jueves)',
        descripcion: "Clase Asincronica + Entrega de TP",
        lado: ladoActual,
        tipo: "Trabajo",
      };
      clases.push(clase);
      ladoActual = ladoActual === "right" ? "left" : "right"
      fechaActual = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000); // Incrementa un día
      continue;
    }
    if (reentregasStr.includes(fechaActualStr) && fechaActual.getDay() === 0) {
      const clase = {
        fecha: fechaActualStr + '(Lunes)',
        descripcion: "Clase Sincronica + Re entrega de TP",
        lado: ladoActual,
        tipo: "Trabajo",
      };
      clases.push(clase);
      ladoActual = ladoActual === "right" ? "left" : "right"
      fechaActual = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000); // Incrementa un día
      continue;
    }
    if (reentregasStr.includes(fechaActualStr) && fechaActual.getDay() === 3) {
      const clase = {
        fecha: fechaActualStr + '(Jueves)',
        descripcion: "Clase Asincronica + Re entrega de TP",
        lado: ladoActual,
        tipo: "Trabajo",
      };
      clases.push(clase);
      ladoActual = ladoActual === "right" ? "left" : "right"
      fechaActual = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000); // Incrementa un día
      continue;
    }
    if (presentacionesStr.includes(fechaActualStr)) {
      const clase = {
        fecha: fechaActualStr + '(Lunes)',
        descripcion: "Cierre de Sprint",
        lado: ladoActual,
        tipo: "Presentación",
      };
      clases.push(clase);
      ladoActual = ladoActual === "right" ? "left" : "right"
      fechaActual = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000); // Incrementa un día
      continue;
    }
    if (fechaActual.getDay() === 0) {
      // 0 es lunes 3 jueves
      const clase = {
        fecha: fechaActualStr + '(Lunes)',
        descripcion: "Clase Sincronica",
        lado: ladoActual,
        tipo: "Clase",
      };
      clases.push(clase);
      ladoActual = ladoActual === "right" ? "left" : "right"
    }
    if (fechaActual.getDay() === 3) {
      const clase = {
        fecha: fechaActualStr + '(Jueves)',
        descripcion: "Clase Asincronica",
        lado: ladoActual,
        tipo: "Clase",
      };
      clases.push(clase);
      ladoActual = ladoActual === "right" ? "left" : "right"
    }

    fechaActual = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000); // Incrementa un día
  }

  return clases;
}

const tareas = generarClasesSincronicas();

const timeline = document.querySelector(".timeline");

const obtenerIndiceTareaProxima = (tareas) => {
  const hoy = new Date();
  let indiceTareaProxima = 0;
  let diferenciaMinima = Number.MAX_VALUE;

  tareas.forEach((tarea, indice) => {
    const fechaTarea = new Date(tarea.fecha);
    const diferencia = fechaTarea - hoy;

    if (diferencia >= 0 && diferencia < diferenciaMinima) {
      indiceTareaProxima = indice;
      diferenciaMinima = diferencia;
    }
  });
  console.log(indiceTareaProxima);
  return indiceTareaProxima - 1;
};

const indiceTareaProxima = obtenerIndiceTareaProxima(tareas);

tareas.forEach((tarea, indice) => {
  const timelineItem = document.createElement("div");
  timelineItem.classList.add("timeline-item", `timeline-item-${tarea.lado}`);
  timelineItem.id = tarea.fecha.split("/").join("-");

  const timelineItemContent = document.createElement("div");
  timelineItemContent.classList.add("timeline-item-content");
  if (indice < indiceTareaProxima + 1)
    timelineItemContent.classList.add("timeline-item-content-disable");
  if (indice === indiceTareaProxima + 1)
    timelineItemContent.classList.add("timeline-item-content-next");

  const fecha = document.createElement("h3");
  fecha.textContent = tarea.fecha;

  const icon = document.createElement("span");
  icon.classList.add("tarea-icon");
  switch (tarea.tipo) {
    case "Trabajo":
      icon.innerHTML = "📝";
      break;
    case "Clase":
      icon.innerHTML = "👨‍🏫";
      break;
    case "Presentación":
      icon.innerHTML = "👩‍💻👨‍💻";
      break;
    case "Feriado":
      icon.innerHTML = "🏖🏄‍♀️🏄‍♀️";
  }

  const descripcion = document.createElement("p");
  descripcion.textContent = tarea.descripcion;

  timelineItemContent.appendChild(fecha);
  timelineItemContent.appendChild(icon);
  timelineItemContent.appendChild(descripcion);
  timelineItem.appendChild(timelineItemContent);
  timeline.appendChild(timelineItem);

  if (indice === indiceTareaProxima) {
    window.location.href = `#${timelineItem.id}`;
  }
});
// Ordena las tareas por fecha
tareas.sort((a, b) => {
  return new Date(a.fecha) - new Date(b.fecha);
});
// Actualiza el campo "lado" intercalándolo entre "left" y "right"
let ladoActual = "right";
tareas.forEach((tarea) => {
  tarea.lado = ladoActual;
  ladoActual = ladoActual === "right" ? "left" : "right";
});
console.log(tareas);
