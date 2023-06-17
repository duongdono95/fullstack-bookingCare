import React from 'react';
import './DownloadApp.scss';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
const DownloadApp = () => {
  return (
    <div className="DownloadApp">
      <p className="title">BookingCare Application</p>
      <div className="content">
        <div
          style={{
            backgroundImage: 'url(https://bookingcare.vn/assets/anh/bookingcare-app-2020.png)',
          }}
          className="left"
        ></div>
        <div className="right">
          <div className="benefits">
            <p>
              <i className="fa-solid fa-check"></i>
              <FormattedMessage id="homepage.download1" />
            </p>
            <p>
              <i className="fa-solid fa-check"></i>
              <FormattedMessage id="homepage.download2" />
            </p>
            <p>
              <i className="fa-solid fa-check"></i>
              <FormattedMessage id="homepage.download3" />
            </p>
            <p>
              <i className="fa-solid fa-check"></i>
              <FormattedMessage id="homepage.download4" />
            </p>
          </div>
          <div className="stores">
            <Link to="https://apps.apple.com/vn/app/bookingcare/id1347700144">
              <div
                style={{
                  backgroundImage: `url(https://www.svgrepo.com/download/303128/download-on-the-app-store-apple-logo.svg)`,
                }}
                className="store"
              ></div>
            </Link>
            <Link to="https://play.google.com/store/apps/details?id=vn.bookingcare.bookingcare">
              <div
                style={{
                  backgroundImage: `url(https://www.svgrepo.com/show/303139/google-play-badge-logo.svg)`,
                }}
                className="store"
              ></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
