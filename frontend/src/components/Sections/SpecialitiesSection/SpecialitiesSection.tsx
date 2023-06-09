import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SpecialitiesSection.scss';
import { Link } from 'react-router-dom';

const SpecialitiesSection = () => {
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
    <div className="section-container">
      <div className="section-title">Chuyên Khoa Phổ Biến</div>
      <Slider {...settings}>
        <Link to={`/clinic/1`} className="section-post">
          <div className="post-img"></div>
          <div className="post-details">Cơ Xương Khớp</div>
        </Link>
        <Link to={`/clinic/1`} className="section-post">
          <div className="post-img"></div>
          <div className="post-details">Cơ Xương Khớp</div>
        </Link>
        <Link to={`/clinic/1`} className="section-post">
          <div className="post-img"></div>
          <div className="post-details">Cơ Xương Khớp</div>
        </Link>
        <Link to={`/clinic/1`} className="section-post">
          <div className="post-img"></div>
          <div className="post-details">Cơ Xương Khớp</div>
        </Link>
      </Slider>
    </div>
  );
};

export default SpecialitiesSection;
