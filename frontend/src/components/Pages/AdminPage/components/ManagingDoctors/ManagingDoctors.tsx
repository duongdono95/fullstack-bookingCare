import React from 'react';
import './ManagingDoctors.scss';
import {
  FilterCodeArray,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../../../redux/handyHelper';

const ManagingDoctors = () => {
  const doctors = useSelectorDoctor();
  const prices = FilterCodeArray('price');
  const provinces = FilterCodeArray('province');
  const payments = FilterCodeArray('payment');
  const language = useSelectorLanguage();
  return (
    <div className="managing-doctors">
      <h1>Managing Doctor Details</h1>
      <form className="managing-doctor--form">
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
          <label htmlFor="price">Select price</label>
          <select name="price" id="price">
            {prices.map((item, index) => {
              console.log(item);
              return (
                <option
                  key={index}
                  value={language === 'vi' ? `${item.valueVi}` : `${item.valueEn}`}
                >
                  {language === 'vi' ? `${item.valueVi} VND` : `${item.valueEn} USD`}
                </option>
              );
            })}
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
