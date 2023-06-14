import React, { useState } from 'react';
import './ManagingClinics.scss';
import {
  FilterCodeArray,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../../../redux/handyHelper';
import { initialInputClinic, inititalInputSpecialty } from '../../../../../utils/constants';
import { ClinicDetails, SpecialtyDetails, User } from '../../../../../utils/types';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { postClinicDetails, postSpecialtyDetails } from '../../../../../services/userServices';
const mdParser = new MarkdownIt(/* Markdown-it options*/);
const ManagingClinics = () => {
  const language = useSelectorLanguage();
  const doctors = useSelectorDoctor();
  const specialties = FilterCodeArray('CLINIC');
  const [selectedClinic, setSelectedClinic] = useState<number[]>([]);
  const [clinicForm, setClinicForm] = useState<ClinicDetails>(initialInputClinic);
  const [selectedDoctors, setSelectedDoctors] = useState<number[]>([]);
  const handleEditorChange = (content: { text: string; html: string }) => {
    setClinicForm((prev) => ({
      ...prev,
      contentMarkdown: content.text,
      contentHTML: content.html,
    }));
  };

  console.log(clinicForm);
  const handleSelection = (doctorId: number) => {
    if (!selectedDoctors.includes(doctorId)) {
      setSelectedDoctors((prev) => [...prev, doctorId]);
    } else {
      const filteredArray = selectedDoctors.filter((item) => item !== doctorId);
      setSelectedDoctors(filteredArray);
    }
  };
  const postClinicMutation = useMutation({
    mutationFn: async (clinicForm: ClinicDetails) => {
      const response = await postClinicDetails(clinicForm);
      console.log(response);
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      }
      if (response.errCode === 0) {
        console.log(response.errCode === 0);
        toast.success(response.errMessage);
        setClinicForm(initialInputClinic);
      }
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClinicForm((prev) => ({ ...prev, doctorId: selectedDoctors.toString() }));
    postClinicMutation.mutate(clinicForm);
  };
  console.log(clinicForm, selectedDoctors);
  return (
    <div className="managing-clinics">
      <h1>Managing Clinic</h1>
      <form className="managing-clinic--form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="clinicId">Select Clinic</label>
          <select
            required
            name="clinicId"
            id="clinicId"
            onChange={(e) =>
              setClinicForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
          <label htmlFor="image">Clinic Address: </label>
          <input
            required
            type="text"
            name="address"
            defaultValue={clinicForm.image}
            onChange={(e) =>
              setClinicForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Clinic Image</label>
          <input
            required
            type="text"
            name="image"
            defaultValue={clinicForm.image}
            onChange={(e) =>
              setClinicForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
            defaultValue={clinicForm.contentMarkdown}
          />
        </div>
        <div className="submit-btn">
          <button type="submit">Save Specialty Details</button>
        </div>
      </form>
    </div>
  );
};

export default ManagingClinics;
