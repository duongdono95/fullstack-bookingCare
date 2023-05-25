import React, { Fragment, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <div className="admin-navigator">
      <LanguageOptions />
      <div className="main-menu">
        {menu.map((item, index) => {
          return (
            <Fragment key={index}>
              <div
                key={index}
                onMouseEnter={() => setOnHover({ isHover: true, index: index })}
                onMouseLeave={() =>
                  setOnHover({ isHover: false, index: index })
                }
                onClick={() => setDefaultActiveMenu(index)}
                className={
                  defaultActiveMenu === index ? 'menu-item active' : 'menu-item'
                }
              >
                <Link to={item.path}>
                  <p>
                    <FormattedMessage id={item.name} />
                  </p>
                </Link>

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
                            <Link to={submenuItem.path}>
                              <div className="submenu-item">
                                <p>
                                  <FormattedMessage id={submenuItem.name} />
                                </p>
                              </div>
                            </Link>
                          }
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default AdminNavigator;
