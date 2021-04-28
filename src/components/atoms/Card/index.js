import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './style.scss';
import H4 from '../H4';

const Card = ({
  className,
  children,
  title,
  img,
  elevation,
  variant,
  style,
  Component
}) => {
  const classNames = classname('a-card', className, variant, {
    'elevation-card': elevation
  });
  return (
    <div className={classNames} style={style}>
      {img && <img src={img} alt="cardImage" className="a-card--image" />}
      {title && (
        <div className="a-card-wrapper">
          {title && <H4 className="a-card-wrapper--title">{title}</H4>}
          {Component && <Component />}
        </div>
      )}

      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.node,
  elevation: PropTypes.bool,
  variant: PropTypes.string,
  style: PropTypes.object,
  Component: PropTypes.node
};

Card.defaultProps = {
  className: '',
  title: '',
  img: '',
  children: '',
  elevation: false,
  variant: '',
  style: {},
  Component: ''
};

export default Card;
