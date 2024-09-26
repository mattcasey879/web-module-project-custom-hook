import React, { useState } from 'react';

const Navbar = (props) => {

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className='lightAndDark'>
      <p>light mode</p>
      <div className="dark-mode__toggle">
        <div
          onClick={props.handleToggle}
          className={props.darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <p>dark mode</p>
      </div>
    </nav>
  );
};

export default Navbar;
