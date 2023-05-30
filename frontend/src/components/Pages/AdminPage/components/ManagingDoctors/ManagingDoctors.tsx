import React from 'react';
import './ManagingDoctors.scss';
const ManagingDoctors = () => {
  return (
    <div className="managing-doctors">
      <h1>Managing Doctor Details</h1>
      <form className="managing-doctor--form">
        <div className="form-group">
          <label htmlFor="doctor-name">Select Doctor</label>
          <select name="doctor-name" id="doctor-name">
            <option value="">Doctor A</option>
            <option value="">Doctor b</option>
            <option value="">Doctor c</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Select price</label>
          <select name="price" id="price">
            <option value="">100 000 VND</option>
            <option value="">200 000 VND</option>
            <option value="">300 000 VND</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="province">Select Province</label>
          <select name="province" id="province">
            <option value="">Ha Noi</option>
            <option value="">Ha Nam</option>
            <option value="">Sai Gon</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="payment">Select Payment</label>
          <select name="payment" id="payment">
            <option value="">Credit Card</option>
            <option value="">Cash</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="clinic-name">Clinic name</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="clinic-address">Clinic address</label>
          <input type="text" />
        </div>
        <div className="form-group note">
          <label htmlFor="clinic-address">Note</label>
          <input type="text-area" />
        </div>
        <div className="form-group">
          <label htmlFor="clinic-address">Count</label>
          <input type="number" />
        </div>
        <div className="submit-btn">
          <button type="submit">Save Doctor Details</button>
        </div>
      </form>
    </div>
  );
};

export default ManagingDoctors;
