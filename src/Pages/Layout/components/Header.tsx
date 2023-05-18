import React, {useEffect} from 'react'
import '../PageLayout.scss'
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES }  from '../../../utils/constants';
import { RootState } from "../../../redux/store";
import { switchLanguage } from "../../../redux/appSlice";
const Header = () => {
  const language = useSelector((state: RootState) => state.app.languages)

  const dispatch = useDispatch()
  const languageArr = Object.values(LANGUAGES)
  const sectionTags = [
    { 'Chuyên Khoa' : 'Tìm bác sĩ theo chuyên khoa'},
    { 'Cơ Sở Y Tế' : 'Chọn bệnh viện, phòng khám'},
    { 'Bác Sĩ' : 'Chọn bác sĩ giỏi'},
    { 'Gói Khám' : 'Khám sức khỏe tổng quát'},
  ]
  return (
    <div id='header'>
      <div className="header-top">
        {
          languageArr.map((item, index) => {
            return (
              <div key={index} className={item === language ? `language active` : 'language' } onClick={() =>dispatch(switchLanguage(item)) }>
                {item.toUpperCase()}
              </div>
            )
          })
        }
      </div>
      <div className='header-bottom'>
        <div className="logo"></div>
        <div className="tags">
        <div className="tag">
          <div className="title"><FormattedMessage id="homeheader.welcome"/></div>
          <div className="des"><FormattedMessage id="homeheader.welcome"/></div>
        </div>


        </div>
        <div className="support-group--container">
            <div className="support-group">
              <div className="support">Hỗ Trợ</div>
              <div className="phone">(+89) 024-7301-2468</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header