import React from 'react';
import { Link, NavLink, Navigate, useParams } from 'react-router-dom';
import {
  FilterCodeArray,
  FilterSpecialties,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../redux/handyHelper';
import './SpecialtyDetailPage.scss';
import { GetDoctorInfor } from '../../../services/apiQuery';
import { InitialDoctorDetailForm } from '../../../utils/types';

const SpecialtyDetailPage = () => {
  const { specialtyId } = useParams();
  const language = useSelectorLanguage();
  const specialtyDetail = FilterSpecialties(specialtyId ? parseInt(specialtyId) : 0);
  const specializedDoctorArr = specialtyDetail.doctorId.split(',').map(Number);
  const allDoctors = useSelectorDoctor();
  const filteredDoctorArr = allDoctors.filter((doctor) =>
    specializedDoctorArr.includes(doctor.id as number),
  );

  const doctorInforArr: InitialDoctorDetailForm[] = [];
  specializedDoctorArr.forEach((doctorId) => {
    const doctorInfor = GetDoctorInfor(doctorId);
    if (
      doctorInfor &&
      doctorInfor.data &&
      doctorInfor.data.data &&
      doctorInfor.data?.errCode === 0
    ) {
      doctorInforArr.push(doctorInfor.data.data);
    }
  });

  const allTimeSchedules = FilterCodeArray('TIME');
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
      <div className="doctors">
        {filteredDoctorArr.map((doctor, index) => {
          return (
            <NavLink to={`/doctor/${doctor.id}`}>
              <div key={index} className="doctor">
                <div style={{ backgroundImage: `url(${doctor.image})` }} className="image"></div>
                <div className="doctor-details">
                  <div className="name">
                    <p className="role">
                      {language === 'vi' ? doctor.roleData?.valueVi : doctor.roleData?.valueEn}
                    </p>
                    <p>
                      {language === 'vi'
                        ? `${doctor.lastName} ${doctor.firstName}`
                        : `${doctor.firstName} ${doctor.lastName}`}
                    </p>
                  </div>
                  <div className="position">
                    {language === 'vi'
                      ? doctor.positionData?.valueVi
                      : doctor.positionData?.valueEn}
                  </div>
                  <div className="description">
                    {doctorInforArr[index] && doctorInforArr[index].description}
                  </div>
                </div>
                <div className="booking-details">
                  <div className="detail-item">
                    <p className="label">Clinic:</p>
                    <p className="value">
                      {doctorInforArr[index] && doctorInforArr[index].clinicName}
                    </p>
                  </div>
                  <div className="detail-item">
                    <p className="label">Address:</p>
                    <p className="value">
                      {doctorInforArr[index] && doctorInforArr[index].clinicAddress}
                    </p>
                  </div>
                  <div className="detail-item">
                    <p className="label">Price:</p>
                    <p className="value">
                      {language === 'vi'
                        ? doctorInforArr[index] &&
                          `${doctorInforArr[index].priceTypeData?.valueVi} VND`
                        : doctorInforArr[index] &&
                          `USD ${doctorInforArr[index].priceTypeData?.valueEn}`}
                    </p>
                  </div>
                  <div className="detail-item">
                    <p className="label">P.Method:</p>
                    <p className="value">
                      {language === 'vi'
                        ? doctorInforArr[index] && doctorInforArr[index].paymentTypeData?.valueVi
                        : doctorInforArr[index] && doctorInforArr[index].paymentTypeData?.valueEn}
                    </p>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialtyDetailPage;
