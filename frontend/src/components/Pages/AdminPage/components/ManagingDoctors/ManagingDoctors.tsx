import React, { useState, useEffect } from 'react';
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
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { postDoctorInfo } from '../../../../../services/userServices';

const mdParser = new MarkdownIt(/* Markdown-it options*/);
const ManagingDoctors = () => {
  const doctors = useSelectorDoctor();
  const prices = FilterCodeArray('price');
  const provinces = FilterCodeArray('province');
  const payments = FilterCodeArray('payment');
  const language = useSelectorLanguage();
  const initialDoctorForm = {
    doctorId: null,
    price: language === 'vi' ? prices[0].valueVi : prices[0].valueEn,
    payment: language === 'vi' ? payments[0].valueVi : payments[0].valueEn,
    province: language === 'vi' ? provinces[0].valueVi : provinces[0].valueEn,
    clinicName: '',
    clinicAddress: '',
    contentMarkdown: '',
    contentHTML: '',
    description: '',
    action: 'CREATE',
  };
  const [doctorForm, setDoctorForm] = useState<InitialDoctorDetailForm>(initialDoctorForm);
  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDoctorForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditorChange = (content: { text: string; html: string }) => {
    setDoctorForm((prev) => ({
      ...prev,
      contentMarkdown: content.text,
      contentHTML: content.html,
    }));
  };
  const postDoctorMutation = useMutation({
    mutationFn: async (doctorInput: InitialDoctorDetailForm) => {
      const response = await postDoctorInfo(doctorInput);
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      } else {
        toast.success('Save Doctor Info Successfully');
        setDoctorForm(initialDoctorForm);
      }
      return;
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postDoctorMutation.mutate(doctorForm);
  };
  console.log(doctors);

  return (
    <div className="managing-doctors">
      <h1>
        <FormattedMessage id="admin.manage-doctor.title" />
      </h1>
      <form className="managing-doctor--form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="doctorId">
            <FormattedMessage id="admin.manage-doctor.select-doctor" />
          </label>
          <select
            required
            defaultValue={doctors[0].id}
            name="doctorId"
            id="doctorId"
            onChange={(e) =>
              setDoctorForm((prev) => ({ ...prev, doctorId: parseInt(e.target.value) }))
            }
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
          <label htmlFor="price">
            <FormattedMessage id="admin.manage-doctor.price" />
          </label>
          <select
            required
            defaultValue={prices[0].keyMap}
            name="price"
            id="price"
            onChange={(e) => setDoctorForm((prev) => ({ ...prev, price: e.target.value }))}
          >
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
          <select
            required
            defaultValue={provinces[0].keyMap}
            name="province"
            id="province"
            onChange={(e) => setDoctorForm((prev) => ({ ...prev, province: e.target.value }))}
          >
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
          <select
            required
            defaultValue={payments[0].keyMap}
            name="payment"
            id="payment"
            onChange={(e) => setDoctorForm((prev) => ({ ...prev, payment: e.target.value }))}
          >
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
        <div className="form-group">
          <label htmlFor="description">
            <FormattedMessage id="admin.manage-doctor.description" />
          </label>
          <input
            name="description"
            value={doctorForm.description}
            type="text"
            onChange={(e) => handleInputOnChange(e)}
            required
          />
        </div>

        <MdEditor
          style={{ height: '500px' }}
          renderHTML={(text: any) => mdParser.render(text)}
          onChange={(content) => handleEditorChange(content)}
          defaultValue={doctorForm.contentMarkdown}
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
