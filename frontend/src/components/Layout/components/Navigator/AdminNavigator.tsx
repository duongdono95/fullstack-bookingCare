import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { AdminMenu } from '../../../../utils/types';
import LanguageOptions from '../LanguageOptions';
import './AdminNavigator.scss';
interface Props {
  menu: AdminMenu;
}

const AdminNavigator: React.FC<Props> = ({ menu }) => {
  const [defaultActiveMenu, setDefaultActiveMenu] = useState(0);
  const [onHover, setOnHover] = useState({
    isHover: false,
    index: 0,
  });
  return (
    <div className="admin-navigator">
      <LanguageOptions />
      <div className="main-menu">
        {menu.map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => setOnHover({ isHover: true, index: index })}
              onMouseLeave={() => setOnHover({ isHover: false, index: index })}
              onClick={() => setDefaultActiveMenu(index)}
              className={
                defaultActiveMenu === index ? 'menu-item active' : 'menu-item'
              }
            >
              <p>
                <FormattedMessage id={item.name} />
              </p>
              {item.menus && (
                <i
                  style={{
                    transform: `scaleY(${onHover.isHover ? -1 : 1})`,
                  }}
                  className="fa-solid fa-chevron-down"
                ></i>
              )}
              {item.menus && onHover.isHover && onHover.index === index && (
                <div className="submenu--list">
                  {item.menus.map((submenuItem, index) => {
                    return (
                      <div key={index} className="submenu">
                        {
                          <div className="submenu-item">
                            <Link to={submenuItem.path}>
                              <p>
                                <FormattedMessage id={submenuItem.name} />
                              </p>
                            </Link>
                          </div>
                        }
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminNavigator;
