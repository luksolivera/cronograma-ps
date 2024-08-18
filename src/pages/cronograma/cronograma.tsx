
import Scheduler, { Editing, SchedulerTypes } from 'devextreme-react/scheduler';

import { Form } from 'devextreme-react';
import notify from 'devextreme/ui/notify';
import { useCallback, useMemo, useState } from 'react';
import DataCell from './DataCell.tsx';
import DataCellMonth from './DataCellMonth.tsx';
import DateCell from './DateCell.tsx';
import TimeCell from './TimeCell.tsx';
import { data, holidays } from './data.ts';
import Utils from './utils.ts';

const currentDate = new Date();
const views: SchedulerTypes.ViewType[] = ['day', 'week', 'month'];


const notifyDisableDate = () => {
  notify('Cannot create or move an appointment/event to disabled time/date regions.', 'warning', 1000);
};

const applyDisableDatesToDateEditors = (form: Form['instance']) => {
  const startDateEditor = form.getEditor('startDate');
  startDateEditor?.option('disabledDates', holidays);

  const endDateEditor = form.getEditor('endDate');
  endDateEditor?.option('disabledDates', holidays);
};
const onAppointmentFormOpening = (e: SchedulerTypes.AppointmentFormOpeningEvent) => {
  if (e.appointmentData?.startDate) {
    const startDate = new Date(e.appointmentData.startDate);
    if (!Utils.isValidAppointmentDate(startDate)) {
      e.cancel = true;
      notifyDisableDate();
    }
    applyDisableDatesToDateEditors(e.form);
  }
};

const onAppointmentAdding = (e: SchedulerTypes.AppointmentAddingEvent) => {
  const isValidAppointment = Utils.isValidAppointment(e.component, e.appointmentData);
  if (!isValidAppointment) {
    e.cancel = true;
    notifyDisableDate();
  }
};

const onAppointmentUpdating = (e: SchedulerTypes.AppointmentUpdatingEvent) => {
  const isValidAppointment = Utils.isValidAppointment(e.component, e.newData);
  if (!isValidAppointment) {
    e.cancel = true;
    notifyDisableDate();
  }
};
const Cronograma = () => {
  const [currentView, setCurrentView] = useState<SchedulerTypes.ViewType>(views[2]);

  const DataCellComponent = useMemo(() => (
    currentView === 'month' ? DataCellMonth : DataCell
  ), [currentView]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onCurrentViewChange = useCallback((value : any) => setCurrentView(value), [setCurrentView]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderDateCell = useCallback((itemData : any) => (
    <DateCell itemData={itemData} currentView={currentView} />
  ), []);

  return <Scheduler
  timeZone="America/Argentina/Buenos_Aires"
  dataSource={data}
  views={views}
  defaultCurrentDate={currentDate}
  currentView={currentView}
  onCurrentViewChange={onCurrentViewChange}
  height={730}
  showAllDayPanel={true}
  firstDayOfWeek={0}
  startDayHour={12}
  cellDuration={60}
  dataCellComponent={DataCellComponent}
  dateCellRender={renderDateCell}
  timeCellComponent={TimeCell}
  onAppointmentFormOpening={onAppointmentFormOpening}
  onAppointmentAdding={onAppointmentAdding}
  onAppointmentUpdating={onAppointmentUpdating}
  >
    <Editing allowAdding={false} />
  </Scheduler>;
 
};

export default Cronograma;
