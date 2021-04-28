import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './style.scss';

const P = ({ className, children, variant }) => {
  const classNames = classname('a-paragraph', className, variant, {});
  return <p className={classNames}>{children}</p>;
};

P.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node
};

P.defaultProps = {
  className: '',
  children: '',
  variant: ''
};

export default P;
