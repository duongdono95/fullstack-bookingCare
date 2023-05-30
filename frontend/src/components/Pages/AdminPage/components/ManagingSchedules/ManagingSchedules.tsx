import React from 'react';
import './ManagingSchedules.scss';
const ManagingSchedules = () => {
  return (
    <div className="managing-schedules">
      <h1>Managing Doctor's Schedules</h1>
      <form className="managing-schedule--form">
        <div className="form-group">
          <label htmlFor="doctor-name">Select Doctor</label>
          <select name="doctor-name" id="doctor-name">
            <option value="">Doctor A</option>
            <option value="">Doctor b</option>
            <option value="">Doctor c</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="schedules">Available Times</label>
          <div className="schedules">
            <div className="active">8:00 - 9:00</div>
            <div>8:00 - 9:00</div>
            <div>8:00 - 9:00</div>
            <div>8:00 - 9:00</div>
            <div>8:00 - 9:00</div>
            <div>8:00 - 9:00</div>
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
