// script.js
const tareas =[
    {
        "fecha": "2023-03-20",
        "descripcion": "Clase Sincronica",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-03-23",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-03-27",
        "descripcion": "Clase Sincronica",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-03-30",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-04-03",
        "descripcion": "Clase Sincronica",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-04-06",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-04-10",
        "descripcion": "Entrega TP 1",
        "lado": "right",
        "tipo": "Trabajo"
    },
    {
        "fecha": "2023-04-10",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-04-13",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-04-17",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-04-20",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-04-24",
        "descripcion": "Reentrega TP 1",
        "lado": "left",
        "tipo": "Trabajo"
    },
    {
        "fecha": "2023-04-24",
        "descripcion": "Cierre Sprint 1",
        "lado": "right",
        "tipo": "Presentación"
    },
    {
        "fecha": "2023-04-27",
        "descripcion": "Entrega TP 2",
        "lado": "left",
        "tipo": "Trabajo"
    },
    {
        "fecha": "2023-04-27",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-01",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-04",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-08",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-11",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-15",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-18",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-22",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-25",
        "descripcion": "Reentrega TP 2",
        "lado": "right",
        "tipo": "Trabajo"
    },
    {
        "fecha": "2023-05-25",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-05-29",
        "descripcion": "Cierre Sprint 2",
        "lado": "right",
        "tipo": "Presentación"
    },
    {
        "fecha": "2023-06-01",
        "descripcion": "Entrega TP 3",
        "lado": "left",
        "tipo": "Trabajo"
    },
    {
        "fecha": "2023-06-01",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-06-05",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-06-08",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-06-12",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-06-15",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-06-19",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-06-22",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-06-26",
        "descripcion": "Clase Sincronica",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-06-29",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-07-03",
        "descripcion": "Cierre Sprint 3",
        "lado": "left",
        "tipo": "Presentación"
    },
    {
        "fecha": "2023-07-06",
        "descripcion": "Entrega TP 3",
        "lado": "right",
        "tipo": "Trabajo"
    },
    {
        "fecha": "2023-07-06",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "left",
        "tipo": "Clase"
    },
    {
        "fecha": "2023-07-13",
        "descripcion": "Clase Asincronica/dayli",
        "lado": "right",
        "tipo": "Clase"
    }
]
  
  const timeline = document.querySelector('.timeline');

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
    const timelineItem = document.createElement('div');
    timelineItem.classList.add('timeline-item', `timeline-item-${tarea.lado}`);
    timelineItem.id = tarea.fecha.split('/').join('-');
  
    const timelineItemContent = document.createElement('div');
    timelineItemContent.classList.add('timeline-item-content');
    if(indice < indiceTareaProxima +1)
        timelineItemContent.classList.add('timeline-item-content-disable');
    if(indice === indiceTareaProxima + 1)
        timelineItemContent.classList.add('timeline-item-content-next');
  
    const fecha = document.createElement('h3');
    fecha.textContent = tarea.fecha;
  
    const icon = document.createElement('span');
    icon.classList.add('tarea-icon');
    switch(tarea.tipo){
        case 'Trabajo': 
            icon.innerHTML ='📝';
            break;
        case 'Clase':
            icon.innerHTML = '👨‍🏫';
            break;
        case 'Presentación':
            icon.innerHTML ='👩‍💻👨‍💻';
            break;
    }
  
    const descripcion = document.createElement('p');
    descripcion.textContent = tarea.descripcion;
  
    timelineItemContent.appendChild(fecha);
    timelineItemContent.appendChild(icon);
    timelineItemContent.appendChild(descripcion);
    timelineItem.appendChild(timelineItemContent);
    timeline.appendChild(timelineItem);
  
    if (indice === indiceTareaProxima) {
      window.location.href= `#${timelineItem.id}`
    }
  });
  function generarClasesSincronicas() {
    const inicio = new Date('2023-03-20');
    const fin = new Date('2023-07-16');
    const clases = [];
  
    let fechaActual = inicio;
    let ladoActual = 'right';
  
    while (fechaActual <= fin) {
      if (fechaActual.getDay() === 0) { // 0 es lunes 3 jueves
        const clase = {
          fecha: fechaActual.toISOString().split('T')[0],
          descripcion: 'Clase Sincronica',
          lado: ladoActual,
          tipo: 'Clase'
        };
        clases.push(clase);
  
        ladoActual = ladoActual === 'right' ? 'left' : 'right';
      }
  
      fechaActual = new Date(fechaActual.getTime() + 24 * 60 * 60 * 1000); // Incrementa un día
    }
  
    return clases;
  }
  
// const clasesSincronicas = generarClasesSincronicas();
// console.log(clasesSincronicas);

// Ordena las tareas por fecha
tareas.sort((a, b) => {
    return new Date(a.fecha) - new Date(b.fecha);
  });
  // Actualiza el campo "lado" intercalándolo entre "left" y "right"
  let ladoActual = "right";
  tareas.forEach(tarea => {
    tarea.lado = ladoActual;
    ladoActual = ladoActual === "right" ? "left" : "right";
  });
console.log(tareas);
