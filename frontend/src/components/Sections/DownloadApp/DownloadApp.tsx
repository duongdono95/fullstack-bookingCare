import React from 'react';
import './DownloadApp.scss';
import { FormattedMessage } from 'react-intl';
const DownloadApp = () => {
  return (
    <div className="DownloadApp">
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
            <div
              style={{
                backgroundImage: `url(https://www.svgrepo.com/download/303128/download-on-the-app-store-apple-logo.svg)`,
              }}
              className="store"
            ></div>
            <div
              style={{
                backgroundImage: `url(https://www.svgrepo.com/show/303139/google-play-badge-logo.svg)`,
              }}
              className="store"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
