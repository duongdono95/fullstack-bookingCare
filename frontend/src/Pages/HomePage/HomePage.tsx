import React from 'react'
import HeroSection from '../Sections/HeroSection/HeroSection'
import OutstandingDoctors from '../Sections/OutstandingDoctors/OutstandingDoctors'
import OutstandingMedicalCenter from '../Sections/OutstandingMedicalCenter/OutstandingMedicalCenter'
import PromotionSection from '../Sections/PromotionSection/PromotionSection'
import './HomePage.scss'
const HomePage = () => {
  return (
    <div className='home-page'>
      <HeroSection />
      <PromotionSection />
      <OutstandingDoctors />
      <OutstandingMedicalCenter />
    </div>
  )
}

export default HomePage