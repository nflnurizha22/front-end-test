import React, { useState } from 'react';
import './style.scss';
import classname from 'classnames';
import PropTypes from 'prop-types';

import SideNavMobile from './mobile';

import IcMenu from '../../../assets/images/icons/ic-hamburger-menu.svg';
import IcNotif from '../../../assets/images/icons/ic-bell-notification.svg';

import { TextSideNav, SystemIcon } from '../../atoms';
import sideNavMenu from './navMenu';

const SideNav = ({ className, titlePage }) => {
  const classNames = classname('o-sidenav', className, {});
  const [isShow, setShow] = useState(false);

  return (
    <>
      <div className={`${classNames} ${isShow ? 'show' : ''}`}>
        <div>
          <div className="close-sidebar" onClick={() => setShow(false)}>
            <SystemIcon color="white" name="close-32" dsize="32" />
          </div>
          {sideNavMenu.map(({ logo, type, to, color, title }, key) => (
            <TextSideNav
              key={key}
              logo={logo}
              type={type}
              to={to}
              color={color}
            >
              {title}
            </TextSideNav>
          ))}
        </div>
      </div>
      <SideNavMobile>
        <div className="o-sidenav__mobile--menu" onClick={() => setShow(true)}>
          <img src={IcMenu} alt="icon-menu" className="ic-menu" />
          <div className="o-sidenav__mobile--title">{titlePage}</div>
        </div>
        <div className="o-sidenav__mobile--notif">
          <img src={IcNotif} alt="icon-notif" className="ic-notif" />
        </div>
      </SideNavMobile>
    </>
  );
};

SideNav.propTypes = {
  className: PropTypes.string,
  titlePage: PropTypes.string
};

SideNav.defaultProps = {
  className: '',
  titlePage: ''
};

export default SideNav;
