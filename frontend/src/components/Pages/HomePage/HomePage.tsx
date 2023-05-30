import React, { useState, useEffect } from 'react';
import BusinessDetails from '../../Sections/BusinessDetails/BusinessDetails';
import HeroSection from '../../Sections/HeroSection/HeroSection';
import OutstandingDoctors from '../../Sections/OutstandingDoctors/OutstandingDoctors';
import OutstandingMedicalCenter from '../../Sections/OutstandingMedicalCenter/OutstandingMedicalCenter';
import SpecialitiesSection from '../../Sections/SpecialitiesSection/SpecialitiesSection';
import './HomePage.scss';
import { useQuery } from '@tanstack/react-query';
import { getAllCode, getDoctors } from '../../../services/userServices';
import { User } from '../../../utils/types';
import { useDispatch } from 'react-redux';
import { saveAllCode } from '../../../redux/appSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const [doctors, setDoctors] = useState<User[]>();
  const doctorUserQuery = useQuery({
    queryKey: ['users', 'doctor'],
    queryFn: () => getDoctors('R2'),
  });
  const allCodeQuery = useQuery({
    queryKey: ['code'],
    queryFn: () => getAllCode('ALL'),
  });
  useEffect(() => {
    if (allCodeQuery.data) {
      if (doctorUserQuery.data?.errCode !== 0) {
        console.log(doctorUserQuery.data?.errMessage);
      } else {
        setDoctors(doctorUserQuery.data?.data.doctors);
      }
    }
    if (doctorUserQuery.data) {
      if (allCodeQuery.data?.errCode !== 0) {
        console.log(allCodeQuery.data?.errMessage);
      } else {
        dispatch(saveAllCode(allCodeQuery.data?.data));
      }
    }
  }, [doctorUserQuery.data, allCodeQuery.data]);
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
