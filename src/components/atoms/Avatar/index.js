// Avatar Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Avatar = ({
  className,
  size,
  image,
  name,
  icon,
  initial,
  variant,
  product,
  bgColor,
  hasBadge,
  onClick,
  message
}) => {
  const classNames = classname(
    'a-avatar',
    className,
    icon,
    variant,
    initial,
    bgColor,
    {
      'size-40': size === '40',
      'size-64': size === '64',
      'size-80': size === '80',
      'size-100': size === '100',
      'size-128': size === '128'
    },
    {
      'has-badge': hasBadge
    }
  );
  return (
    <>
      <div className={classNames} onClick={onClick}>
        {/* {hasBadge && <Notification />} */}
        {image !== '' && <img src={image} alt={name} />}
        {/* {icon !== '' && (
        <Fragment>
          {product && <ProductIcon name={icon} />}
          {!product && <SystemIcon name={icon} />}
        </Fragment>
      )} */}
        {initial !== '' && <h3>{initial}</h3>}
      </div>
      {message && <div className="message">{message}</div>}
    </>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  initial: PropTypes.string,
  variant: PropTypes.string,
  bgColor: PropTypes.string,
  product: PropTypes.bool,
  hasBadge: PropTypes.bool,
  onClick: PropTypes.func,
  message: PropTypes.string
};

Avatar.defaultProps = {
  className: '',
  size: '',
  image: '',
  name: '',
  icon: '',
  initial: '',
  variant: '',
  bgColor: 'primary100',
  product: false,
  hasBadge: false,
  onClick: () => {},
  message: ''
};

export default Avatar;
