import React from 'react'
import './HeroSection.scss'
import { FormattedMessage } from 'react-intl'
import { bannerFeatures } from '../../../utils/constants' 
const HeroSection = () => {
  return (
    <div className="hero-section">
        <div className="filter"></div>
        <div className="filter reversed"></div>
        <div className="home-page--content">
          <div className="search-input">
            <label htmlFor="home-page--search"><FormattedMessage id="banner.title1" /></label>
            <label htmlFor="home-page--search"><FormattedMessage id="banner.title2" /></label>
            <input type="text" className='home-page--search' placeholder='Find a doctor'/>
          </div>
          <div className="features">
            {
              bannerFeatures.map((item, index) => {
                return (
                  <div key={index} className="feature">
                    <div className="feature-img">
                      <i className={item.img}></i>
                    </div>
                    <div className="feature-title">
                      <p>{<FormattedMessage id={item.title} />}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        
      </div>
  )
}

export default HeroSection