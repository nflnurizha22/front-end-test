import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './style.scss';
import ICFilter from '../../../assets/images/icons/ic-filter.svg';

const Filter = ({ className, data, onClick, family, size, status }) => {
  const classNames = classname('a-filter', className, family, size, {});

  return (
    <div>
      <div className={classNames} onClick={onClick}>
        <span>Filter</span>
        <img src={ICFilter} alt="iconsFilter" />
      </div>
    </div>
  );
};

Filter.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  onClick: PropTypes.func,
  family: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.bool
};

Filter.defaultProps = {
  className: '',
  data: [],
  onClick: () => {},
  family: '',
  size: '',
  status: false
};

export default Filter;
