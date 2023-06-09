import React from 'react';
import './OutStandingDoctor.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { User } from '../../../utils/types';
import { useSelectorTranslationAllCode, useSelectorLanguage } from '../../../redux/handyHelper';
import { Link } from 'react-router-dom';

interface Props {
  doctors: User[];
}
const OutstandingDoctors: React.FC<Props> = ({ doctors }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const currentLanguague = useSelectorLanguage();
  const allCodes = useSelectorTranslationAllCode();
  return (
    <div className="home-section">
      <div className="outstanding-doctors">
        <div className="section-title">Bác sĩ nổi bật</div>
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
                      {currentLanguague === 'vi'
                        ? allCodes[roleId].valueVi
                        : allCodes[roleId].valueEn}
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
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default OutstandingDoctors;
