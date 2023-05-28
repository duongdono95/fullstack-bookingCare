import React from 'react';
import '../PageLayout.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { FormattedMessage } from 'react-intl';
import LanguageOptions from './LanguageOptions';
import { logOut } from '../../../redux/appSlice';
import { Link } from 'react-router-dom';
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  const language = useSelector((state: RootState) => state.languages);
  return (
    <div id="header">
      <LanguageOptions />
      <div className="header-navigator">
        <div className="logo"></div>
        <div className="tags">
          <div className="tag">
            <div className="title">
              <FormattedMessage id="homeheader.specialty" />
            </div>
            <div className="des">
              <FormattedMessage id="homeheader.searchdoctor" />
            </div>
          </div>
          <div className="tag">
            <div className="title">
              <FormattedMessage id="homeheader.health-facility" />
            </div>
            <div className="des">
              <FormattedMessage id="homeheader.selecting-facility" />
            </div>
          </div>
          <div className="tag">
            <div className="title">
              <FormattedMessage id="homeheader.doctor" />
            </div>
            <div className="des">
              <FormattedMessage id="homeheader.select-doctor" />
            </div>
          </div>
          <div className="tag">
            <div className="title">
              <FormattedMessage id="homeheader.package" />
            </div>
            <div className="des">
              <FormattedMessage id="homeheader.select-package" />
            </div>
          </div>
        </div>
        <div className="support-group--container">
          <div className="support-group">
            <div className="support">
              <FormattedMessage id="homeheader.support" />
            </div>
            <div className="phone">(+89) 024-7301-2468</div>
          </div>
        </div>
        <div className="header-tools">
          <div title="Profile" className="profile">
            {isLoggedIn ? (
              <Link to="/system">
                <i className="fa-solid fa-user"></i>
              </Link>
            ) : (
              <Link to="/login">
                <i className="fa-solid fa-right-to-bracket"></i>
              </Link>
            )}
          </div>
          <div title="Log Out" className="log-out">
            {isLoggedIn ? (
              <i className="fa-solid fa-right-from-bracket" onClick={() => dispatch(logOut())}></i>
            ) : (
              <p className="sign-up">Sign Up</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
