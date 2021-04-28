import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

import { TextBody } from 'components/atoms';

import IcBack from '../../../assets/images/icons/ic-arrow-back.svg';

import SideNavMobile from '../SideNav/mobile';

const NavbarMobileContent = ({ actionBack, title, className }) => {
  const classNames = classname('sticky', className, {});
  return (
    <SideNavMobile className={classNames}>
      <div
        className="o-sidenav__mobile--menu cursor-pointer"
        onClick={() => actionBack()}
      >
        <img src={IcBack} alt="icon-back" className="ic-menu" />
        <TextBody className="mb-0 ml-16" weight="bold" color="white">
          {title}
        </TextBody>
      </div>
    </SideNavMobile>
  );
};

NavbarMobileContent.propTypes = {
  actionBack: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string
};

NavbarMobileContent.defaultProps = {
  actionBack: () => {},
  title: '',
  className: ''
};

export default NavbarMobileContent;
