
type TimeCellProps = {
  data: { date: Date; text: string; };
};

const TimeCell = (props: TimeCellProps) => {
  const { text } = props.data;
  return (
    <div>
      {text}
    </div>
  );
};

export default TimeCell;
