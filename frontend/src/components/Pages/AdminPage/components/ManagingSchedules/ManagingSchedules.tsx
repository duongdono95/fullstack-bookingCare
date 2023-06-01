import React, { useState } from 'react';
import './ManagingSchedules.scss';
import {
  FilterCodeArray,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../../../redux/handyHelper';
const ManagingSchedules = () => {
  const doctors = useSelectorDoctor();
  const language = useSelectorLanguage();
  const timeArray = FilterCodeArray('time');
  const [selectedTimeArray, setSelectedTimeArray] = useState<string[]>([]);
  const handleSelection = (keyMap: string) => {
    if (!selectedTimeArray.includes(keyMap)) {
      setSelectedTimeArray((prev) => [...prev, keyMap]);
    } else {
      const filteredArray = selectedTimeArray.filter((item) => item !== keyMap);
      setSelectedTimeArray(filteredArray);
    }
  };

  return (
    <div className="managing-schedules">
      <h1>Managing Doctor's Schedules</h1>
      <form className="managing-schedule--form">
        <div className="form-group">
          <label htmlFor="doctor-name">Select Doctor</label>
          <select name="doctor-name" id="doctor-name">
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
          <label htmlFor="schedules">Available Times</label>
          <div className="schedules">
            {timeArray.map((item, index) => {
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
          <button type="submit">Save Doctor Details</button>
        </div>
      </form>
    </div>
  );
};

export default ManagingSchedules;
