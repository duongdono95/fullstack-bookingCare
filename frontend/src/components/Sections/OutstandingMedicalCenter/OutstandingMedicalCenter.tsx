import React from 'react';
import './OutstandingMedicalCenter.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useSelectorTranslationAllCode, useSelectorLanguage } from '../../../redux/handyHelper';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { GetClinics } from '../../../services/apiQuery';
import { useDispatch } from 'react-redux';
import { saveAllClinics } from '../../../redux/appSlice';

const OutstandingMedicalCenter = () => {
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
  };
  const currentLanguague = useSelectorLanguage();
  const allCodes = useSelectorTranslationAllCode();
  const clinicDetails = GetClinics('ALL');
  const clinics =
    clinicDetails && clinicDetails.data && clinicDetails.data.data ? clinicDetails.data.data : [];
  if (clinics) {
    dispatch(saveAllClinics(clinics));
  }
  return (
    <div className="home-section">
      <div className="outstanding-clinics">
        <div className="section-title">
          <FormattedMessage id="homepage.outstanding-clinics" />
        </div>
        <Slider {...settings}>
          {clinics &&
            clinics.map((clinic, index) => {
              const { clinicId, image } = clinic;
              return (
                <Link to={`/clinic/${clinicId}`} key={index} className="doctor">
                  <div className="doctor-img" style={{ backgroundImage: `url(${image})` }}></div>
                  <div className="doctor-positions">
                    {currentLanguague === 'vi'
                      ? allCodes[clinicId].valueVi
                      : allCodes[clinicId].valueEn}
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
