import React, { useState, useEffect } from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const SideNavMobile = ({ className, titlePage, children }) => {
  const classNames = classname('o-sidenav__mobile', className, {});
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 5) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <>
      <div className={`${classNames} ${sticky ? 'sticky' : ''}`}>
        {children}
      </div>
    </>
  );
};

SideNavMobile.propTypes = {
  className: PropTypes.string,
  titlePage: PropTypes.string,
  children: PropTypes.node
};

SideNavMobile.defaultProps = {
  className: '',
  titlePage: '',
  children: null
};

export default SideNavMobile;
