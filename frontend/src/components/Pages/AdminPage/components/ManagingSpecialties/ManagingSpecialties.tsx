import React, { useState } from 'react';
import './ManagingSpecialties.scss';
import {
  FilterCodeArray,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../../../redux/handyHelper';
import { inititalInputSpecialty } from '../../../../../utils/constants';
import { SpecialtyDetails, User } from '../../../../../utils/types';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { postSpecialtyDetails } from '../../../../../services/userServices';
const mdParser = new MarkdownIt(/* Markdown-it options*/);
const ManagingSpecialties = () => {
  const doctors = useSelectorDoctor();
  const language = useSelectorLanguage();
  const specialties = FilterCodeArray('SPECIALTY');
  const [selectedDoctors, setSelectedDoctors] = useState<number[]>([]);
  const [specialtyForm, setSpecialtyForm] = useState<SpecialtyDetails>(inititalInputSpecialty);
  const handleEditorChange = (content: { text: string; html: string }) => {
    setSpecialtyForm((prev) => ({
      ...prev,
      contentMarkdown: content.text,
      contentHTML: content.html,
    }));
  };
  const handleSelection = (doctorId: number) => {
    if (!selectedDoctors.includes(doctorId)) {
      setSelectedDoctors((prev) => [...prev, doctorId]);
    } else {
      const filteredArray = selectedDoctors.filter((item) => item !== doctorId);
      setSelectedDoctors(filteredArray);
    }
  };
  const postSpecialtyMutation = useMutation({
    mutationFn: async (specialtyForm: SpecialtyDetails[]) => {
      const response = await postSpecialtyDetails(specialtyForm);
      console.log(response);
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      }
      if (response.errCode === 0) {
        toast.success(response.errMessage);
      }
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const handleDoctorSpecialtyArray: SpecialtyDetails[] = [];
    selectedDoctors.forEach((doctor) => {
      const newSpecialty = { ...specialtyForm, doctorId: doctor };
      handleDoctorSpecialtyArray.push(newSpecialty);
    });
    postSpecialtyMutation.mutate(handleDoctorSpecialtyArray);
  };
  return (
    <div className="managing-specialties">
      <h1>Managing Doctor's Schedules</h1>
      <form className="managing-specialties--form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="specialty">Select Specialty</label>
          <select
            required
            name="specialty"
            id="specialty"
            onChange={(e) =>
              setSpecialtyForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          >
            {specialties.map((item, index) => {
              return (
                <option key={index} value={item.keyMap} defaultValue={specialties[0].keyMap}>
                  {language === 'vi' ? item.valueVi : item.valueEn}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Specialty Image</label>
          <input
            required
            type="text"
            name="image"
            defaultValue={specialtyForm.image}
            onChange={(e) =>
              setSpecialtyForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="doctors">Select Doctor(s)</label>
          <div className="doctors">
            {doctors.map((doctor: User, index) => {
              return (
                <div
                  className={
                    selectedDoctors.includes(doctor.id ? doctor.id : 0) ? 'doctor active' : 'doctor'
                  }
                  key={index}
                  onClick={() => handleSelection(doctor.id ? doctor.id : 0)}
                >
                  {language === 'vi' ? (
                    <p>
                      {doctor.lastName} {doctor.firstName}
                    </p>
                  ) : (
                    <p>
                      {doctor.firstName} {doctor.lastName}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="form-group full-width">
          <label htmlFor="doctors">Description</label>
          <MdEditor
            style={{ height: '500px' }}
            renderHTML={(text: any) => mdParser.render(text)}
            onChange={(content) => handleEditorChange(content)}
            defaultValue={specialtyForm.contentMarkdown}
          />
        </div>
        <div className="submit-btn">
          <button type="submit">Save Specialty Details</button>
        </div>
      </form>
    </div>
  );
};

export default ManagingSpecialties;
