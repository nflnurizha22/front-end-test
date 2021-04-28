import React from 'react';
import './style.scss';
import classname from 'classnames';
import PropTypes from 'prop-types';

const Divider = ({ title }) => {
  const classNames = classname('a-divider', {});
  return <div className={classNames}>{title && title}</div>;
};

Divider.propTypes = {
  title: PropTypes.string
};

Divider.defaultProps = {
  title: ''
};

export default Divider;
