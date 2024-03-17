import { SchedulerTypes } from 'devextreme-react/scheduler';

export const data: SchedulerTypes.Appointment[] = [
  {
    text: 'Clase Presencial',
    startDate: new Date('2024-03-18T21:30:00.000Z'),
    endDate: new Date('2024-03-19T00:00:00.000Z'),
  },
  {
    text: 'Clase Presencial',
    startDate: new Date('2024-03-25T21:30:00.000Z'),
    endDate: new Date('2024-03-26T00:00:00.000Z'),
  },
  {
    text: 'Clase sincrónica',
    description: "Se dictará la clase sincrónica por el siguiente enlace: https://meet.google.com/hff-ysuy-hky",
    startDate: new Date('2024-04-01T21:30:00.000Z'),
    endDate: new Date('2024-04-02T00:00:00.000Z'),
    recurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;UNTIL=20240706T000000Z", // https://icalendar.org/rrule-tool.html
  },
  {
    text: 'Clase asincrónica',
    description: "Se debe enviar el estado de avance del proyecto de la materia",
    startDate: new Date('2024-03-18T21:30:00.000Z'),
    endDate: new Date('2024-03-19T00:00:00.000Z'),
    recurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;UNTIL=20240706T000000Z",
  },
  {
    text: 'Entrega Trabajo Práctico 1',
    startDate: new Date('2024-04-19T02:30:00.000Z'),
    endDate: new Date('2024-04-19T03:00:00.000Z'),
  },
  {
    text: 'Entrega Trabajo Práctico 2',
    startDate: new Date('2024-05-10T02:30:00.000Z'),
    endDate: new Date('2024-05-10T03:00:00.000Z'),
  },
  {
    text: 'Entrega Trabajo Práctico 3',
    startDate: new Date('2024-06-07T02:30:00.000Z'),
    endDate: new Date('2024-06-07T03:00:00.000Z'),
  },
  {
    text: 'Reentrega Trabajo Práctico 1',
    startDate: new Date('2024-05-10T02:30:00.000Z'),
    endDate: new Date('2024-05-10T03:00:00.000Z'),
  },
  {
    text: 'Reentrega Trabajo Práctico 2',
    startDate: new Date('2024-06-07T02:30:00.000Z'),
    endDate: new Date('2024-06-07T03:00:00.000Z'),
  },
  {
    text: 'Reentrega Trabajo Práctico 3',
    startDate: new Date('2024-07-01T21:30:00.000Z'),
    endDate: new Date('2024-07-01T00:00:00.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-04-22T21:30:00.000Z'),
    endDate: new Date('2024-04-23T00:00:00.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-05-13T21:30:00.000Z'),
    endDate: new Date('2024-05-14T00:00:00.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-06-24T21:30:00.000Z'),
    endDate: new Date('2024-06-25T00:00:00.000Z'),
  },
  {
    text: 'Fecha limite Practica GIT',
    startDate: new Date('2024-03-29T02:30:00.000Z'),
    endDate: new Date('2024-03-29T03:00:00.000Z'),
  },
  {
    text: 'Fecha limite alcance proyecto integrador',
    startDate: new Date('2024-04-05T02:30:00.000Z'),
    endDate: new Date('2024-04-05T03:00:00.000Z'),
  },
  {
    text: 'Fecha limite informe proyecto integrador',
    startDate: new Date('2024-07-09T02:30:00.000Z'),
    endDate: new Date('2024-07-09T03:00:00.000Z'),
  }
];

export const holidays = [ // index mounth is 0-based
  new Date(2024, 2, 24),
  new Date(2024, 2, 28),
  new Date(2024, 2, 29),
  new Date(2024, 3, 1),
  new Date(2024, 3, 2),
  new Date(2024, 4, 1),
  new Date(2024, 4, 25),
  new Date(2024, 5, 17),
  new Date(2024, 5, 20),
  new Date(2024, 5, 21),
  new Date(2024, 6, 9),
  new Date(2024, 7, 17),
  new Date(2024, 9, 11),
  new Date(2024, 9, 12),
  new Date(2024, 10, 18),
  new Date(2024, 11, 8),
];