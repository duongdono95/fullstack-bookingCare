import React, { useState } from 'react';
import './ManagingClinics.scss';
import { FilterCodeArray, useSelectorLanguage } from '../../../../../redux/handyHelper';
import { inititalInputSpecialty } from '../../../../../utils/constants';
import { SpecialtyDetails } from '../../../../../utils/types';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { postSpecialtyDetails } from '../../../../../services/userServices';
const mdParser = new MarkdownIt(/* Markdown-it options*/);
const ManagingClinics = () => {
  const language = useSelectorLanguage();
  const specialties = FilterCodeArray('CLINIC');
  console.log(specialties);
  const [selectedDoctors, setSelectedDoctors] = useState<number[]>([]);
  const [specialtyForm, setSpecialtyForm] = useState<SpecialtyDetails>(inititalInputSpecialty);
  const handleEditorChange = (content: { text: string; html: string }) => {
    setSpecialtyForm((prev) => ({
      ...prev,
      contentMarkdown: content.text,
      contentHTML: content.html,
    }));
  };
  console.log(specialtyForm);
  const handleSelection = (doctorId: number) => {
    if (!selectedDoctors.includes(doctorId)) {
      setSelectedDoctors((prev) => [...prev, doctorId]);
    } else {
      const filteredArray = selectedDoctors.filter((item) => item !== doctorId);
      setSelectedDoctors(filteredArray);
    }
  };
  const postSpecialtyMutation = useMutation({
    mutationFn: async (specialtyForm: SpecialtyDetails) => {
      const response = await postSpecialtyDetails(specialtyForm);
      console.log(response);
      if (response.errCode !== 0) {
        toast.error(response.errMessage);
      }
      if (response.errCode === 0) {
        console.log(response.errCode === 0);
        toast.success(response.errMessage);
        setSpecialtyForm(inititalInputSpecialty);
      }
    },
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpecialtyForm((prev) => ({ ...prev, doctorId: selectedDoctors.toString() }));
    postSpecialtyMutation.mutate(specialtyForm);
  };
  return (
    <div className="managing-clinics">
      <h1>Managing Clinic</h1>
      <form className="managing-clinic--form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label htmlFor="specialty">Select Clinic</label>
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
          <label htmlFor="image">Clinic Address: </label>
          <input
            required
            type="text"
            name="address"
            defaultValue={specialtyForm.image}
            onChange={(e) =>
              setSpecialtyForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Clinic Image</label>
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

export default ManagingClinics;
