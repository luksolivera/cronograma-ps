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
    endDate: new Date('2024-08-26T23:59:59.000Z'),
    recurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=MO;UNTIL=20241130T000000Z", // https://icalendar.org/rrule-tool.html
  },
  {
    text: 'Clase virtual asincrónica',
    description: "Se debe enviar el estado de avance del proyecto de la materia",
    allDay: true,
    recurrenceRule: "FREQ=WEEKLY;INTERVAL=1;BYDAY=TH;UNTIL=20241130T000000Z",
  },
  {
    text: 'Entrega Trabajo Práctico 1',
    startDate: new Date('2024-09-20T02:30:00.000Z'),
    endDate: new Date('2024-09-20T03:00:00.000Z'),
  },
  {
    text: 'Entrega Trabajo Práctico 2',
    startDate: new Date('2024-10-18T02:30:00.000Z'),
    endDate: new Date('2024-10-18T03:00:00.000Z'),
  },
  {
    text: 'Reentrega Trabajo Práctico 1',
    startDate: new Date('2024-10-18T02:30:00.000Z'),
    endDate: new Date('2024-10-18T03:00:00.000Z'),
  },
  {
    text: 'Reentrega Trabajo Práctico 2',
    startDate: new Date('2024-11-26T02:30:00.000Z'),
    endDate: new Date('2024-11-26T03:00:00.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-09-16T21:00:00.000Z'),
    endDate: new Date('2024-09-16T23:59:59.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-10-14T21:00:00.000Z'),
    endDate: new Date('2024-10-14T23:59:59.000Z'),
  },
  {
    text: 'Sprint Review',
    description: "Presentación de avances del proyecto integrador grupal",
    startDate: new Date('2024-11-11T21:00:00.000Z'),
    endDate: new Date('2024-11-11T23:59:59.000Z'),
  },
  {
    text: 'Fecha limite Practica GIT',
    startDate: new Date('2024-08-27T02:30:00.000Z'),
    endDate: new Date('2024-08-27T03:00:00.000Z'),
  },
  {
    text: 'Fecha limite alcance proyecto integrador',
    startDate: new Date('2024-09-06T02:30:00.000Z'),
    endDate: new Date('2024-09-06T03:00:00.000Z'),
  },
  {
    text: 'Fecha limite informe proyecto integrador',
    startDate: new Date('2024-12-01T02:30:00.000Z'),
    endDate: new Date('2024-12-01T03:00:00.000Z'),
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