import React from 'react';
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
