import { SchedulerTypes } from 'devextreme-react/scheduler';

export const data: SchedulerTypes.Appointment[] = [
  {
    text: 'Clase Presencial',
    startDate: new Date('2024-08-19T21:00:00.000Z'),
    endDate: new Date('2024-08-19T23:59:59.000Z'),
  },
  {
    text: 'Clase virtual sincrónica',
    description: "Se dictará la clase sincrónica por el siguiente enlace: https://meet.google.com/hff-ysuy-hky",
    startDate: new Date('2024-08-26T21:00:00.000Z'),
    endDate: new Date('2024-11-30T23:59:59.000Z'),
    recurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;UNTIL=20240706T000000Z", // https://icalendar.org/rrule-tool.html
  },
  {
    text: 'Clase virtual asincrónica',
    description: "Se debe enviar el estado de avance del proyecto de la materia",
    startDate: new Date('2024-08-22T21:00:00.000Z'),
    endDate: new Date('2024-11-30T23:59:59.000Z'),
    recurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;UNTIL=20240706T000000Z",
  },
  {
    text: 'Entrega Trabajo Práctico 1',
    startDate: new Date('2024-09-19T02:30:00.000Z'),
    endDate: new Date('2024-09-19T03:00:00.000Z'),
  },
  {
    text: 'Entrega Trabajo Práctico 2',
    startDate: new Date('2024-10-17T02:30:00.000Z'),
    endDate: new Date('2024-10-17T03:00:00.000Z'),
  },
  {
    text: 'Reentrega Trabajo Práctico 1',
    startDate: new Date('2024-10-17T02:30:00.000Z'),
    endDate: new Date('2024-10-17T03:00:00.000Z'),
  },
  {
    text: 'Reentrega Trabajo Práctico 2',
    startDate: new Date('2024-11-25T02:30:00.000Z'),
    endDate: new Date('2024-11-25T03:00:00.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-04-22T21:00:00.000Z'),
    endDate: new Date('2024-04-23T23:59:59.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-05-13T21:00:00.000Z'),
    endDate: new Date('2024-05-14T23:59:59.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-06-24T21:00:00.000Z'),
    endDate: new Date('2024-06-25T23:59:59.000Z'),
  },
  {
    text: 'Fecha limite Practica GIT',
    startDate: new Date('2024-08-26T02:30:00.000Z'),
    endDate: new Date('2024-08-26T03:00:00.000Z'),
  },
  {
    text: 'Fecha limite alcance proyecto integrador',
    startDate: new Date('2024-09-05T02:30:00.000Z'),
    endDate: new Date('2024-09-05T03:00:00.000Z'),
  },
  {
    text: 'Fecha limite informe proyecto integrador',
    startDate: new Date('2024-11-30T02:30:00.000Z'),
    endDate: new Date('2024-11-30T03:00:00.000Z'),
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