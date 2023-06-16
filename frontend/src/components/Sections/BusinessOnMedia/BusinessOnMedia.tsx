import React from 'react';
import './BusinessOnMedia.scss';
import { Link } from 'react-router-dom';
const BusinessOnMedia = () => {
  return (
    <div className="businessOnMedia">
      <p className="title">BookingCare on national Media</p>
      <div className="utube">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7tiR7SI4CkI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="brands">
        <Link to="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm">
          <div className="brand">
            <div
              className="brand-img"
              style={{
                backgroundImage:
                  'url(https://static.wikia.nocookie.net/logos/images/d/d2/VTV1_logo_1998.png/revision/latest/scale-to-width-down/1200?cb=20211231174310&path-prefix=vi)',
              }}
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BusinessOnMedia;
