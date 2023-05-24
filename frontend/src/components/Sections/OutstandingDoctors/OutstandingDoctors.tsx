import React from 'react';
import './OutStandingDoctor.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const OutstandingDoctors = () => {
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
  return (
    <div className="home-section">
      <div className="outstanding-doctors">
        <div className="section-title">Bác sĩ nổi bật</div>
        <Slider {...settings}>
          <div className="doctor">
            <div className="doctor-img"></div>
            <div className="doctor-positions">Phó giáo sư - tiến sĩ</div>
            <div className="doctor-name">Bác Sĩ Trần Minh Khuyên</div>
          </div>
          <div className="doctor">
            <div className="doctor-img"></div>
            <div className="doctor-positions">Phó giáo sư - tiến sĩ</div>
            <div className="doctor-name">Bác Sĩ Trần Minh Khuyên</div>
          </div>
          <div className="doctor">
            <div className="doctor-img"></div>
            <div className="doctor-positions">Phó giáo sư - tiến sĩ</div>
            <div className="doctor-name">Bác Sĩ Trần Minh Khuyên</div>
          </div>
          <div className="doctor">
            <div className="doctor-img"></div>
            <div className="doctor-positions">Phó giáo sư - tiến sĩ</div>
            <div className="doctor-name">Bác Sĩ Trần Minh Khuyên</div>
          </div>
          <div className="doctor">
            <div className="doctor-img"></div>
            <div className="doctor-positions">Phó giáo sư - tiến sĩ</div>
            <div className="doctor-name">Bác Sĩ Trần Minh Khuyên</div>
          </div>
          <div className="doctor">
            <div className="doctor-img"></div>
            <div className="doctor-positions">Phó giáo sư - tiến sĩ</div>
            <div className="doctor-name">Bác Sĩ Trần Minh Khuyên</div>
          </div>
        </Slider>
        {/* <Loader /> */}
      </div>
    </div>
  );
};

export default OutstandingDoctors;
