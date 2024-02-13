import { SchedulerTypes } from 'devextreme-react/scheduler';
import Utils from './utils.ts';

interface DateCellProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemData: any;
  currentView: SchedulerTypes.ViewType;
}

const DateCell = (props: DateCellProps) => {
  const { currentView, date, text } = props.itemData;

  // Determina si la fecha es de fin de semana o está deshabilitada
  const isDisabled = currentView === 'month'
    ? Utils.isWeekend(date)
    : Utils.isDisableDate(date);

  // Determina si la fecha está fuera del mes actual
  const isOutsideMonth = (date: Date, currentView: SchedulerTypes.ViewType): boolean => {
    if (currentView !== 'month') return false;
    
    const currentDate = new Date();
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    console.log(date);
    return date < startOfMonth || date > endOfMonth;
  };

  // Aplica la clase 'outside-month' si la fecha está fuera del mes actual
  const dateCellClass = isDisabled ? 'disable-date' : (isOutsideMonth(date, currentView) ? 'outside-month' : '');

  return (
    <div className={dateCellClass}>
      <div>{text}</div>
    </div>
  );
};

export default DateCell;