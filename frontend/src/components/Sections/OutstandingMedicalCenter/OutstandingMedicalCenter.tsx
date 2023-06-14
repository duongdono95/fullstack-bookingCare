import React, { useState } from 'react';
import './OutstandingMedicalCenter.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { User } from '../../../utils/types';
import { useSelectorTranslationAllCode, useSelectorLanguage } from '../../../redux/handyHelper';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { GetDoctorQuery } from '../../../services/apiQuery';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const OutstandingMedicalCenter = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const currentLanguague = useSelectorLanguage();
  const allCodes = useSelectorTranslationAllCode();

  const doctors = useSelector((state: RootState) => state.allDoctors);
  // const clinics =
  return (
    <div className="home-section">
      <div className="outstanding-clinics">
        <div className="section-title">
          <FormattedMessage id="homepage.outstanding-clinics" />
        </div>
        <Slider {...settings}>
          {doctors &&
            doctors.map((doctor, index) => {
              const { image, positionId, roleId, firstName, lastName } = doctor;
              return (
                <Link to={`/doctor/${doctor.id}`} key={index} className="doctor">
                  <div className="doctor-img" style={{ backgroundImage: `url(${image})` }}></div>
                  <div className="doctor-positions">
                    {currentLanguague === 'vi'
                      ? allCodes[positionId].valueVi
                      : allCodes[positionId].valueEn}
                  </div>
                  <div className="doctor-name">
                    <p>
                      {roleId && currentLanguague === 'vi'
                        ? allCodes[roleId].valueVi
                        : allCodes[roleId as string].valueEn}
                    </p>
                    {currentLanguague === 'vi' ? (
                      <>
                        <p>{lastName}</p>
                        <p>{firstName}</p>
                      </>
                    ) : (
                      <>
                        <p>{firstName}</p>
                        <p>{lastName}</p>
                      </>
                    )}
                  </div>
                </Link>
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default OutstandingMedicalCenter;
