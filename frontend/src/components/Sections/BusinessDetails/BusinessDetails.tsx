import React from 'react'
import './BusinessDetails.scss'
const BusinessDetails = () => {
  return (
    <div className='business-details-container'>
      <div className='business-details'>
        <div className='top'>
          <div className="left">
            <div className='logo-container'><div className="logo"></div></div>
            <p className="business-title">Công ty Cổ phần Công nghệ BookingCare</p>
            <p className='address'>Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
            <p className="certificate">
            ĐKKD số: 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
            </p>
          </div>
          <div className="right">
            <div className="branch">
              <div className="title">
                Trụ sở tại Hà Nội
              </div>
              <div className="address">
              Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam
              </div>
            </div>
            <div className="branch">
              <div className="title">
                Văn phòng tại TP Hồ Chí Minh
              </div>
              <div className="address">
                Số 01, Hồ Bá Kiện, Phường 15, Quận 10
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className='item'>
            <div className="title">Hỗ trợ khách hàng</div>
            <div className="detail">support@bookingcare.vn (7h - 18h)</div>
          </div>
          <div className="item">
            <div className="title">Hotline</div>
            <div className="numbers">024-7301-2468 (7h - 18h)</div>
          </div>
        </div>
  
      </div>
    </div>
  )
}

export default BusinessDetails