import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SpecialitiesSection.scss';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { GetSpecialties } from '../../../services/apiQuery';
import { useSelectorLanguage } from '../../../redux/handyHelper';
import { useDispatch } from 'react-redux';
import { saveAllSpecialties } from '../../../redux/appSlice';

const SpecialitiesSection = () => {
  const dispatch = useDispatch();
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
  const language = useSelectorLanguage();
  const fetchedAllspecialties = GetSpecialties('ALL');
  if (fetchedAllspecialties.data && fetchedAllspecialties.data.data) {
    dispatch(saveAllSpecialties(fetchedAllspecialties.data.data));
  }
  const allSpecialties =
    fetchedAllspecialties.data && fetchedAllspecialties.data.data
      ? fetchedAllspecialties.data.data
      : [];
  return (
    <div className="section-container">
      <div className="section-title">
        <FormattedMessage id="homepage.specialty" />
      </div>
      <Slider {...settings}>
        {allSpecialties &&
          allSpecialties.map((specialty, index) => {
            return (
              <Link key={index} to={`/specialty/${specialty.id}`} className="section-post">
                <div
                  style={{ backgroundImage: `url(${specialty.image})` }}
                  className="post-img"
                ></div>
                <div className="post-details">
                  {language === 'vi'
                    ? specialty.specialtyName?.valueVi
                    : specialty.specialtyName?.valueEn}
                </div>
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};

export default SpecialitiesSection;
