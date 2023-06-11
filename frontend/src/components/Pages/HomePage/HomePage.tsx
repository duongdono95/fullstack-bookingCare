import React, { useEffect } from 'react';
import HeroSection from '../../Sections/HeroSection/HeroSection';
import OutstandingDoctors from '../../Sections/OutstandingDoctors/OutstandingDoctors';
import OutstandingMedicalCenter from '../../Sections/OutstandingMedicalCenter/OutstandingMedicalCenter';
import SpecialitiesSection from '../../Sections/SpecialitiesSection/SpecialitiesSection';
import './HomePage.scss';
import { useDispatch } from 'react-redux';
import { saveAllCodes, saveAllDoctors, saveTranslationCodes } from '../../../redux/appSlice';
import { ConvertedAllCode } from '../../../redux/handyHelper';
import { GetAllCodeQuery, GetDoctorQuery } from '../../../services/apiQuery';

const HomePage = () => {
  const dispatch = useDispatch();
  const allCodeQuery = GetAllCodeQuery();
  const doctorsQuery = GetDoctorQuery();
  useEffect(() => {
    if (allCodeQuery.data) {
      if (allCodeQuery.data?.errCode !== 0) {
        console.log(allCodeQuery.data?.errMessage);
      } else {
        const convertedAllCode = ConvertedAllCode(allCodeQuery.data?.data);
        dispatch(saveTranslationCodes(convertedAllCode));
        dispatch(saveAllCodes(allCodeQuery.data?.data));
      }
    }
    if (doctorsQuery.data && doctorsQuery.data.data && doctorsQuery.data.data.doctors) {
      if (doctorsQuery.data.errCode !== 0) {
        console.log(doctorsQuery.data.errMessage);
      } else {
        dispatch(saveAllDoctors(doctorsQuery.data.data.doctors));
        dispatch(saveAllDoctors(doctorsQuery.data.data.doctors));
      }
    }
  }, [doctorsQuery.data, allCodeQuery.data]);
  return (
    <div className="home-page">
      <HeroSection />
      <OutstandingDoctors />
      <SpecialitiesSection />
      <OutstandingMedicalCenter />
    </div>
  );
};

export default HomePage;
