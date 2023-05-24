import React from 'react';
import { FormattedMessage } from 'react-intl';
import './BusinessDetails.scss';
const BusinessDetails = () => {
  return (
    <div className="business-details-container">
      <div className="business-details">
        <div className="top">
          <div className="left">
            <div className="logo-container">
              <div className="logo"></div>
            </div>
            <p className="business-title">
              <FormattedMessage id="business-details.business-title" />
            </p>
            <p className="address">
              <FormattedMessage id="business-details.business-address" />
            </p>
            <p className="certificate">
              <FormattedMessage id="business-details.business-certificate" />
            </p>
          </div>
          <div className="right">
            <div className="branch">
              <div className="title">
                <FormattedMessage id="business-details.branch-title-1" />
              </div>
              <div className="address">
                <FormattedMessage id="business-details.branch-address-1" />
              </div>
            </div>
            <div className="branch">
              <div className="title">
                <FormattedMessage id="business-details.branch-title-2" />
              </div>
              <div className="address">
                <FormattedMessage id="business-details.branch-address-2" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="item">
            <div className="title">
              <FormattedMessage id="business-details.support" />
            </div>
            <div className="detail">support@bookingcare.vn (7am - 18pm)</div>
          </div>
          <div className="item">
            <div className="title">Hotline</div>
            <div className="numbers">024-7301-2468 (7am - 18pm)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
