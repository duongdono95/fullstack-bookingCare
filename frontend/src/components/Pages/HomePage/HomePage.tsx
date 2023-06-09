import React, { useState, useEffect } from 'react';
import BusinessDetails from '../../Sections/BusinessDetails/BusinessDetails';
import HeroSection from '../../Sections/HeroSection/HeroSection';
import OutstandingDoctors from '../../Sections/OutstandingDoctors/OutstandingDoctors';
import OutstandingMedicalCenter from '../../Sections/OutstandingMedicalCenter/OutstandingMedicalCenter';
import SpecialitiesSection from '../../Sections/SpecialitiesSection/SpecialitiesSection';
import './HomePage.scss';
import { useQuery } from '@tanstack/react-query';
import { getAllCode, getDoctors } from '../../../services/userServices';
import { ConvertedCodeType, User } from '../../../utils/types';
import { useDispatch } from 'react-redux';
import { saveAllCodes, saveAllDoctors, saveTranslationCodes } from '../../../redux/appSlice';
import ConvertedAllCode from '../../../redux/handyHelper';
import { GetAllCodeQuery, GetDoctorQuery } from '../../../services/apiQuery';

const HomePage = () => {
  const dispatch = useDispatch();
  const [doctors, setDoctors] = useState<User[]>();
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
    if (doctorsQuery.data) {
      if (doctorsQuery.data.errCode !== 0) {
        console.log(doctorsQuery.data.errMessage);
      } else {
        setDoctors(doctorsQuery.data.data.doctors);
        dispatch(saveAllDoctors(doctorsQuery.data.data.doctors));
      }
      console.log(doctorsQuery.data);
    }
  }, [doctorsQuery.data, allCodeQuery.data]);
  return (
    <div className="home-page">
      <HeroSection />
      <OutstandingDoctors doctors={doctors as User[]} />
      <SpecialitiesSection />
      <OutstandingMedicalCenter />
      <BusinessDetails />
    </div>
  );
};

export default HomePage;
