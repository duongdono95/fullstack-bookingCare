import React, { useState } from 'react';
import './ManagingDoctors.scss';
import {
  FilterCodeArray,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../../../redux/handyHelper';
import { InitialDoctorDetailForm } from '../../../../../utils/types';
import { FormattedMessage } from 'react-intl';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

const mdParser = new MarkdownIt(/* Markdown-it options*/);
const ManagingDoctors = () => {
  const doctors = useSelectorDoctor();
  const prices = FilterCodeArray('price');
  const provinces = FilterCodeArray('province');
  const payments = FilterCodeArray('payment');
  const language = useSelectorLanguage();
  const initialDoctorForm = {
    doctorId: doctors[0].id,
    price: language === 'vi' ? prices[0].valueVi : prices[0].valueEn,
    payment: language === 'vi' ? payments[0].valueVi : payments[0].valueEn,
    province: language === 'vi' ? provinces[0].valueVi : provinces[0].valueEn,
    clinicName: '',
    clinicAddress: '',
    about: '',
    note: '',
    contentMarkdown: {
      text: '',
      html: '',
    },
  };
  const [doctorForm, setDoctorForm] = useState<InitialDoctorDetailForm>(initialDoctorForm);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDoctorForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(doctorForm);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  const handleEditorChange = (content: { text: string; html: string }) => {
    setDoctorForm((prev) => ({
      ...prev,
      contentMarkdown: content,
    }));
  };
  console.log(doctorForm);
  return (
    <div className="managing-doctors">
      <h1>
        <FormattedMessage id="admin.manage-doctor.title" />
      </h1>
      <form className="managing-doctor--form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="doctor-name">
            <FormattedMessage id="admin.manage-doctor.select-doctor" />
          </label>
          <select required defaultValue={doctors[0].id} name="doctor-name" id="doctor-name">
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
          <label htmlFor="price">
            <FormattedMessage id="admin.manage-doctor.price" />
          </label>
          <select required defaultValue={prices[0].keyMap} name="price" id="price">
            {prices.map((item, index) => {
              return (
                <option key={index} value={item.keyMap}>
                  {language === 'vi' ? `${item.valueVi} VND` : `${item.valueEn} USD`}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="province">
            <FormattedMessage id="admin.manage-doctor.province" />
          </label>
          <select required defaultValue={provinces[0].keyMap} name="province" id="province">
            {provinces.map((item, index) => {
              return (
                <option key={index} value={item.keyMap}>
                  {language === 'vi' ? `${item.valueVi}` : `${item.valueEn}`}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="payment">
            <FormattedMessage id="admin.manage-doctor.payment" />
          </label>
          <select required defaultValue={payments[0].keyMap} name="payment" id="payment">
            {payments.map((item, index) => {
              return (
                <option key={index} value={item.keyMap}>
                  {language === 'vi' ? `${item.valueVi}` : `${item.valueEn}`}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="clinic-name">
            <FormattedMessage id="admin.manage-doctor.nameClinic" />
          </label>
          <input
            value={doctorForm.clinicName}
            name="clinicName"
            type="text"
            onChange={(e) => handleInputOnChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="clinic-address">
            <FormattedMessage id="admin.manage-doctor.addressClinic" />
          </label>
          <input
            name="clinicAddress"
            value={doctorForm.clinicAddress}
            type="text"
            onChange={(e) => handleInputOnChange(e)}
            required
          />
        </div>
        <div className="form-group note">
          <label htmlFor="about">
            <FormattedMessage id="admin.manage-doctor.intro" />
          </label>
          <input
            name="about"
            value={doctorForm.about}
            type="text-area"
            onChange={(e) => handleInputOnChange(e)}
            required
          />
        </div>
        <div className="form-group note">
          <label htmlFor="note">
            <FormattedMessage id="admin.manage-doctor.note" />
          </label>
          <input
            name="note"
            value={doctorForm.note}
            type="text-area"
            onChange={(e) => handleInputOnChange(e)}
          />
        </div>
        <MdEditor
          style={{ height: '500px' }}
          renderHTML={(text: any) => mdParser.render(text)}
          onChange={(content) => handleEditorChange(content)}
          value={doctorForm.contentMarkdown.text}
        />

        <div className="submit-btn">
          <button type="submit">
            <FormattedMessage id="admin.manage-doctor.save" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManagingDoctors;
