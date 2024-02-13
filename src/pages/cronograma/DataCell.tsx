import React from 'react';
import Utils from './utils.ts';

type DataCellProps = {
  className: string
  data: {
    startDate: Date;
  }
};

const DataCell = (props: React.PropsWithChildren<DataCellProps>) => {
  const { startDate } = props.data;
  let cssClasses = props.className || '';

  if (Utils.isDisableDate(startDate)) {
    cssClasses += ' disable-date';
  }

  return (
    <div className={cssClasses}>
      {props.children}
    </div>
  );
};

export default DataCell;
