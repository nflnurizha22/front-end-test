// Links Component
// --------------------------------------------------------

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Links = ({
  className,
  variant,
  type,
  to,
  target,
  color,
  underline,
  onClick,
  tabIndex,
  children,
  weight,
  size,
  family,
  disabled
}) => {
  const classNames = classname(
    'a-links',
    className,
    variant,
    color,
    weight,
    size,
    family,

    {
      underline,
      [`inactive-${color}`]: disabled
    }
  );
  return (
    <>
      {type === 'link' && (
        <a
          href={to}
          className={classNames}
          target={target}
          onClick={onClick}
          tabIndex={tabIndex}
        >
          {children}
        </a>
      )}
      {type === 'link-dom' && (
        <Link
          to={to}
          className={classNames}
          target={target}
          onClick={onClick}
          tabIndex={tabIndex}
        >
          {children}
        </Link>
      )}
    </>
  );
};

Links.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  to: PropTypes.string,
  color: PropTypes.string,
  target: PropTypes.string,
  tabIndex: PropTypes.string,
  weight: PropTypes.string,
  underline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  size: PropTypes.string,
  family: PropTypes.string,
  disabled: PropTypes.bool
};

Links.defaultProps = {
  className: '',
  variant: 'links-body',
  type: 'link-dom',
  to: '',
  color: '',
  weight: '',
  target: '_self',
  tabIndex: '0',
  underline: false,
  onClick: () => {},
  children: '',
  size: '',
  family: '',
  disabled: false
};

export default Links;
