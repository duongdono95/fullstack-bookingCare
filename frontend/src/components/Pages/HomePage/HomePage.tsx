import React from 'react';
import BusinessDetails from '../../Sections/BusinessDetails/BusinessDetails';
import HeroSection from '../../Sections/HeroSection/HeroSection';
import OutstandingDoctors from '../../Sections/OutstandingDoctors/OutstandingDoctors';
import OutstandingMedicalCenter from '../../Sections/OutstandingMedicalCenter/OutstandingMedicalCenter';
import SpecialitiesSection from '../../Sections/SpecialitiesSection/SpecialitiesSection';
import './HomePage.scss';
const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <OutstandingDoctors />
      <SpecialitiesSection />
      <OutstandingMedicalCenter />
      <BusinessDetails />
    </div>
  );
};

export default HomePage;
