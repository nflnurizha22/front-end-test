import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classname from 'classnames';

import './style.scss';

const Navbar = () => {
  const classNames = classname('o-navbar', {});
  
  return (
    <div className={classNames}>
      <div className="nav-information">
        <div className="nav-information__notification">
        </div>
      </div>
    </div>
  );
};

export default Navbar;
