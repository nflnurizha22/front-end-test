import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './style.scss';

const Tag = ({ className, variant, family, onClick, title, type, size }) => {
  const classNames = classname(
    'a-tag',
    className,
    variant,
    family,
    type,
    size,
    {}
  );
  return (
    <div className={classNames} oncClick={onClick}>
      {title}
    </div>
  );
};

Tag.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  family: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string
};

Tag.defaultProps = {
  className: '',
  variant: '',
  family: '',
  title: '',
  type: '',
  onClick: () => {},
  size: ''
};

export default Tag;
