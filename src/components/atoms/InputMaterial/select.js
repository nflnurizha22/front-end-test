import React from 'react';
import './style.scss';
import classname from 'classnames';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    color: '#000',
    fontSize: 2,
    minWidth: 200,
    width: '100%',
    marginTop: theme.spacing(2)
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const SelectMaterial = ({
  name,
  label,
  optionSelect,
  valueSelect,
  onChange,
  className,
  disabled,
  errorMessage
}) => {
  const classNames = classname('a-select-material', className);
  const classes = useStyles();
  return (
    <FormControl
      variant="outlined"
      error={errorMessage}
      className={classes.formControl}
    >
      <InputLabel
        shrink={valueSelect && valueSelect !== ''}
        id={`${label}-label--select`}
        htmlFor={`${label}-label--select`}
      >
        {label}
      </InputLabel>
      <Select
        labelId={`${label}-label--select`}
        label={label}
        className={classNames}
        value={valueSelect}
        onChange={onChange}
        name={name}
        disabled={disabled}
      >
        {optionSelect.map((item, i) => (
          <MenuItem key={i} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {errorMessage ? <FormHelperText>{errorMessage}</FormHelperText> : <></>}
    </FormControl>
  );
};

SelectMaterial.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  optionSelect: PropTypes.array,
  valueSelect: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  errorMessage: PropTypes.string
};

SelectMaterial.defaultProps = {
  name: '',
  label: '',
  className: '',
  disabled: false,
  optionSelect: [],
  valueSelect: null,
  onChange: () => {},
  errorMessage: null
};

export default SelectMaterial;
