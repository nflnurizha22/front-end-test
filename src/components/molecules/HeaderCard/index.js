import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './style.scss';

const HeaderCard = ({ children, className }) => {
  const classNames = classname('m-header-card', className, {});

  return (
    <div className={classNames}>
      <div className="m-header-card__accent" />
      <div className="m-header-card__content">{children}</div>
    </div>
  );
};

HeaderCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

HeaderCard.defaultProps = {
  children: '',
  className: ''
};

export default HeaderCard;
