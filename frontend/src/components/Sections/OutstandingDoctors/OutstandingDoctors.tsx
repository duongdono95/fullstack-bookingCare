import React, { useState } from 'react';
import './OutStandingDoctor.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelectorTranslationAllCode, useSelectorLanguage } from '../../../redux/handyHelper';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const OutstandingDoctors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const currentLanguague = useSelectorLanguage();
  const allCodes = useSelectorTranslationAllCode();

  const doctors = useSelector((state: RootState) => state.allDoctors);
  return (
    <div id="featuredDoctor" className="home-section">
      <div className="outstanding-doctors">
        <div className="section-title">
          <FormattedMessage id="homepage.outstanding-doctor" />
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

export default OutstandingDoctors;
