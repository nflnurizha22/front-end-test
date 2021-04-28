import React from 'react';
import './style.scss';
import classname from 'classnames';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import TextBody from '../TextBody';

const InputMaterial = ({
  className,
  status,
  type,
  disabled,
  onChange,
  alert,
  label,
  value,
  message,
  alertMessage,
  name,
  errorMessage
}) => {
  const classNames = classname('a-input-material', className, {
    'field-disabled': disabled,
    'is-error': errorMessage
  });
  return (
    <div>
      <div className={classNames}>
        <input
          placeholder=" "
          type={type}
          name={name}
          value={value}
          id="inputMaterial"
          onChange={onChange}
        />
        <label htmlFor="inputMaterial">{label || 'label'}</label>
      </div>
      {errorMessage && (
        <TextBody className="error-message" color="red" weight="light">
          {errorMessage}
        </TextBody>
      )}
      {alert && <Alert status={status} message={alertMessage} />}
      {message && (
        <TextBody className="message" color="gray" weight="light">
          {message}
        </TextBody>
      )}
    </div>
  );
};

InputMaterial.propTypes = {
  className: PropTypes.string,
  status: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  alert: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  alertMessage: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  errorMessage: PropTypes.string
};

InputMaterial.defaultProps = {
  className: '',
  status: '',
  type: '',
  disabled: false,
  onChange: () => {},
  alert: false,
  label: '',
  message: '',
  alertMessage: '',
  value: '',
  name: '',
  errorMessage: null
};

export default InputMaterial;
