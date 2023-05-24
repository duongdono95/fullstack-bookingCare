import React, { useEffect } from 'react';
import '../PageLayout.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils/constants';
import { RootState } from '../../../redux/store';
import { switchLanguage } from '../../../redux/appSlice';
import { FormattedMessage } from 'react-intl';

const LanguageOptions = () => {
  const language = useSelector((state: RootState) => state.languages);
  console.log(language);
  const dispatch = useDispatch();
  const languageArr = Object.values(LANGUAGES);
  return (
    <div className="language-options">
      {languageArr.map((item, index) => {
        return (
          <div
            key={index}
            className={item === language ? `language active` : 'language'}
            onClick={() => dispatch(switchLanguage(item))}
          >
            {item === 'vi' ? <div className="vi-icon"></div> : <div className="en-icon"></div>}
            {item.toUpperCase()}
          </div>
        );
      })}
    </div>
  );
};

export default LanguageOptions;
