import React from 'react';
import { useParams } from 'react-router-dom';
import {
  FilterSpecialties,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../redux/handyHelper';
import './SpecialtyDetailPage.scss';

const SpecialtyDetailPage = () => {
  const { specialtyId } = useParams();
  const language = useSelectorLanguage();
  const specialtyDetail = FilterSpecialties(specialtyId ? parseInt(specialtyId) : 0);
  const doctorArr = specialtyDetail.doctorId.split(',');
  const doctors = useSelectorDoctor();
  console.log(doctors);
  return (
    <div className="specialty-details">
      <div style={{ backgroundImage: `url(${specialtyDetail.image})` }} className="specialty-img">
        <div className="white-filter"></div>
        <div className="white-filter rotated"></div>
        <p className="specialty-name">
          {language === 'vi'
            ? specialtyDetail.specialtyName?.valueVi
            : specialtyDetail.specialtyName?.valueEn}
        </p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: specialtyDetail.contentHTML as string }}
        className="description"
      />
    </div>
  );
};

export default SpecialtyDetailPage;
