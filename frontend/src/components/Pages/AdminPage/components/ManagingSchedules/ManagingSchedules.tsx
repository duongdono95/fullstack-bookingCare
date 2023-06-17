import React, { useState } from 'react';
import './ManagingSchedules.scss';
import { useMutation } from '@tanstack/react-query';
import {
  FilterCodeArray,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../../../redux/handyHelper';
import { toast } from 'react-toastify';
import { DoctorSchedule } from '../../../../../utils/types';
import { saveDoctorSchedules } from '../../../../../services/userServices';
import { GetAllBookedScheduleQuery } from '../../../../../services/apiQuery';
import DatePickerComponent from '../../../../../redux/DatePickerComponent/DatePickerComponent';
const ManagingSchedules = () => {
  const doctors = useSelectorDoctor();
  const language = useSelectorLanguage();
  const timeArray = FilterCodeArray('time');

  const [selectedDate, setSelectedDate] = useState<string>(new Date().toString());
  const [selectedTimeArray, setSelectedTimeArray] = useState<string[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<number>(doctors[0].id as number);

  const handleSelection = (keyMap: string) => {
    if (!selectedTimeArray.includes(keyMap)) {
      setSelectedTimeArray((prev) => [...prev, keyMap]);
    } else {
      const filteredArray = selectedTimeArray.filter((item) => item !== keyMap);
      setSelectedTimeArray(filteredArray);
    }
  };

  const bookedScheduleQuery = GetAllBookedScheduleQuery({
    date: selectedDate ? selectedDate : '0',
    doctorId: selectedDoctor,
  });
  const allBookedSchedule =
    bookedScheduleQuery.data && bookedScheduleQuery?.data.allBookedSchedules;
  const filteredTimeArray = timeArray.filter((item) =>
    allBookedSchedule?.every((schedule) => item.keyMap !== schedule.timeType),
  );
  const postSchedulesMutation = useMutation({
    mutationFn: async (schedules: DoctorSchedule[]) => {
      const response = await saveDoctorSchedules(schedules);
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      } else {
        toast.success('Save Doctor Schedule Successfully');
        bookedScheduleQuery.refetch();
      }
    },
  });

  const handlePostSchedules = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const formattedSchedules: DoctorSchedule[] = [];
    if (!selectedDoctor || selectedTimeArray.length === 0 || !selectedDate) {
      toast.error('Please select Doctor, Date, Times');
      return;
    }
    if (selectedDoctor && selectedTimeArray.length > 0 && selectedDate) {
      selectedTimeArray.forEach((item) => {
        const formattedSchedule: DoctorSchedule = {
          date: selectedDate,
          doctorId: selectedDoctor,
          timeType: item,
        };
        formattedSchedules.push(formattedSchedule);
      });
    }
    postSchedulesMutation.mutate(formattedSchedules);
  };

  return (
    <div className="managing-schedules">
      <h1>Managing Doctor's Schedules</h1>
      <form className="managing-schedule--form">
        <div className="form-group">
          <label htmlFor="doctor-name">Select Doctor</label>
          <select
            name="doctor-name"
            id="doctor-name"
            defaultValue={doctors[0].id}
            onChange={(e) => setSelectedDoctor(+e.target.value)}
          >
            {doctors.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {language === 'vi'
                    ? `${item.lastName} ${item.firstName}`
                    : `${item.firstName} ${item.lastName}`}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Select Date</label>
          <div className="date-picker">
            <DatePickerComponent setSelectedDate={setSelectedDate} />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="schedules">Available Times</label>
          <div className="schedules">
            {filteredTimeArray?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    selectedTimeArray.includes(item.keyMap) ? 'schedule active' : 'schedule'
                  }
                  onClick={() => handleSelection(item.keyMap)}
                >
                  {language === 'vi' ? `${item.valueVi}` : `${item.valueEn}`}
                </div>
              );
            })}
          </div>
        </div>
        <div className="submit-btn">
          <button type="submit" onClick={(e) => handlePostSchedules(e)}>
            Save Doctor Booked Schedules
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManagingSchedules;
