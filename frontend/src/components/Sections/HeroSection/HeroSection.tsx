import React from 'react';
import './HeroSection.scss';
import { FormattedMessage } from 'react-intl';
import { bannerFeatures } from '../../../utils/constants';
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="filter"></div>
      <div className="filter reversed"></div>
      <div className="home-page--content">
        <div className="search-input">
          <p>
            <FormattedMessage id="banner.title1" />
          </p>
          <p>
            <FormattedMessage id="banner.title2" />
          </p>
        </div>
        <div className="features">
          {bannerFeatures.map((item, index) => {
            return (
              <div key={index} className="feature">
                <div className="feature-img">
                  <i className={item.img}></i>
                </div>
                <div className="feature-title">
                  <p>{<FormattedMessage id={item.title} />}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
