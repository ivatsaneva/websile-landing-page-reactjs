import React from 'react';
import appLogo from '../assets/webisle-logo.svg';

function Header() {
  return (
    <div id="header">
      <div className="header-wrap">
        <div className="logo">
          <img src={appLogo} alt="Webisle logo" />
        </div>
      </div>
    </div>
  
  );
}

export default Header;
