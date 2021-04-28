// Body Component
// --------------------------------------------------------

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const ProgressBar = ({ className, width, isCompleted }) => {
  const classNames = classname('o-progress-bar', className, width, {
    'is-completed': isCompleted
  });
  return (
    <div className={classNames}>
      <div
        className="bar"
        style={{ width: `${width}`, background: isCompleted && '#287D3C' }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  isCompleted: PropTypes.bool
};

ProgressBar.defaultProps = {
  className: '',
  width: '',
  isCompleted: false
};

export default ProgressBar;
