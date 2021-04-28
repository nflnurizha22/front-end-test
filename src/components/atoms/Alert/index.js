import React from 'react';
import './style.scss';
import classname from 'classnames';
import PropTypes from 'prop-types';
import SystemIcon from '../SystemIcon';

const Alert = ({ message, status, className, size }) => {
  const classNames = classname('a-alert', status, className, size);
  return (
    <div className={classNames}>
      <SystemIcon
        className="icon"
        dsize="16"
        color={status}
        name="information"
      />
      {message}
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  status: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string
};

Alert.defaultProps = {
  message: '',
  status: '',
  className: '',
  size: ''
};

export default Alert;
