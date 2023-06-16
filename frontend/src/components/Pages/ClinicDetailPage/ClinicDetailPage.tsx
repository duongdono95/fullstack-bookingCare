import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FilterCodeArray,
  useSelectorClinics,
  useSelectorDoctor,
  useSelectorLanguage,
} from '../../../redux/handyHelper';
import './ClinicDetailPage.scss';
import { FormattedMessage } from 'react-intl';
import { InitialDoctorDetailForm } from '../../../utils/types';
import { GetDoctorInfor } from '../../../services/apiQuery';
const ClinicDetailPage = () => {
  const { pathname } = useLocation();
  const allDoctors = useSelectorDoctor();
  const clinics = useSelectorClinics();
  const clinicId = parseInt(pathname.replace('/clinic/CLI', ''));
  const clinicName = FilterCodeArray('CLINIC');
  const clinicDetails = clinics.filter((item) => item.id === clinicId)[0];
  const language = useSelectorLanguage();
  const fetchedDoctorArr = clinicDetails.doctorId.split(',').map(Number);
  const doctorInforArr: InitialDoctorDetailForm[] = [];
  fetchedDoctorArr.forEach((doctorId) => {
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
  const filteredDoctorArr = allDoctors.filter((doctor) =>
    fetchedDoctorArr.includes(doctor.id as number),
  );
  return (
    <div className="clinic-detail-page">
      <div className="clinic-detail" style={{ backgroundImage: `url(${clinicDetails.image})` }}>
        <div className="filter"></div>
        <div className="img" style={{ backgroundImage: `url(${clinicDetails?.image})` }}></div>
        <div className="details">
          <div className="name">
            <p>{language === 'vi' ? clinicName[clinicId].valueVi : clinicName[clinicId].valueEn}</p>
          </div>
          <div className="address">
            <p>{clinicDetails.address}</p>
          </div>
        </div>
      </div>
      <div className="markdown">
        <div dangerouslySetInnerHTML={{ __html: clinicDetails.contentHTML as string }}></div>
      </div>
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

export default ClinicDetailPage;
