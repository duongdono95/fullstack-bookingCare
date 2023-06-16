import React from 'react';
import './BusinessOnMedia.scss';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
const BusinessOnMedia = () => {
  return (
    <div className="businessOnMedia">
      <p className="title">
        <FormattedMessage id="homepage.media" />
      </p>
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
          <div
            className="brand-img"
            style={{
              backgroundImage:
                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/VTV1_logo_2013_final.svg/2560px-VTV1_logo_2013_final.svg.png)',
            }}
          ></div>
        </Link>
        <Link to="https://video.vnexpress.net/cuoc-song-4-0/kham-benh-khong-phai-xep-hang-o-ha-noi-3797126.html">
          <div
            className="brand-img"
            style={{
              backgroundImage:
                'url(https://upload.wikimedia.org/wikipedia/commons/f/fd/VnExpress_logo.png)',
            }}
          ></div>
        </Link>
        <Link to="https://www.youtube.com/watch?v=mstAc81lpMc">
          <div
            className="brand-img"
            style={{
              backgroundImage:
                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/VTC_official_logo.svg/2560px-VTC_official_logo.svg.png)',
            }}
          ></div>
        </Link>
        <Link to="https://vtc.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html">
          <div
            className="brand-img"
            style={{
              backgroundImage:
                'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/VTC_News_logo.svg/2560px-VTC_News_logo.svg.png)',
            }}
          ></div>
        </Link>
        <Link to="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm">
          <div
            className="brand-img"
            style={{
              backgroundImage:
                'url(https://bioamicus.vn/wp-content/uploads/2020/05/skds-e1593683385355.png)',
            }}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default BusinessOnMedia;
