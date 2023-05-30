import React from 'react';
import './OutStandingDoctor.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { User } from '../../../utils/types';
import { useAppAllCode } from '../../../redux/handyHelper';

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
  const allCode = useAppAllCode();
  return (
    <div className="home-section">
      <div className="outstanding-doctors">
        <div className="section-title">Bác sĩ nổi bật</div>
        <Slider {...settings}>
          {doctors &&
            doctors.map((doctor, index) => {
              return (
                <div className="doctor">
                  <div
                    className="doctor-img"
                    style={{ backgroundImage: `url(${doctor.image})` }}
                  ></div>
                  <div className="doctor-positions">{doctor.positionId}</div>
                  <div className="doctor-name">
                    {doctor.roleId} {doctor.firstName} {doctor.lastName}
                  </div>
                </div>
              );
            })}
        </Slider>
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default OutstandingDoctors;
