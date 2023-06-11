import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { formattedDate } from '../../utils/formattedDate';
import './DatePickerComponent.scss';
interface Props {
  setSelectedDate: React.Dispatch<React.SetStateAction<string | undefined>>;
}
const DatePickerComponent: React.FC<Props> = ({ setSelectedDate }) => {
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  const [date, setDate] = useState<Date | null>(new Date());
  useEffect(() => {
    if (date !== undefined) {
      const dateWithNoTime = formattedDate(date);
      setSelectedDate(dateWithNoTime);
    }
  }, [date]);
  return (
    <DatePicker
      minDate={new Date()}
      filterDate={isWeekday}
      selected={date}
      onChange={(date) => setDate(date)}
    />
  );
};

export default DatePickerComponent;
