// TextTopNav Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import './style.scss';

const TextTopNav = ({
  type,
  to: path,
  className,
  color,
  target,
  weight,
  tabIndex,
  onClick,
  children,
  logo
}) => {
  const classNames = classname('a-text-top-sidenav', className, color, weight);
  const isActiveSideNav = (path) => {
    const [, currentPath] = window.location.pathname.split('/');
    return `/${currentPath}` === path && 'active';
  };

  return (
    <>
      {type === 'link' && (
        <div className={`text-wrapper ${isActiveSideNav(path)}`}>
          <img src={`${logo}`} alt="logo" />
          <a
            href={path}
            className={classNames}
            target={target}
            tabIndex={tabIndex}
            onClick={onClick}
          >
            {children}
          </a>
        </div>
      )}
      {type === 'link-dom' && (
        <div className={`text-wrapper ${isActiveSideNav(path)}`}>
          <img src={`${logo}`} alt="logo" />
          <Link
            to={path}
            className={classNames}
            target={target}
            tabIndex={tabIndex}
            onClick={onClick}
          >
            {children}
          </Link>
        </div>
      )}
    </>
  );
};

TextTopNav.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  target: PropTypes.string,
  weight: PropTypes.string,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  logo: PropTypes.string
};

TextTopNav.defaultProps = {
  type: 'link-dom',
  to: '',
  className: '',
  color: '',
  target: '_self',
  weight: '',
  tabIndex: '0',
  onClick: () => {},
  children: '',
  logo: ''
};
export default TextTopNav;
