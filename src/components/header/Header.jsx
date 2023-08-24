import React from 'react';
import appLogo from '../../images/webisle-logo.svg';
import Hamburger from './Hamburger';

function Header() {
  return (
    <div id="header">
      <div className="wrapper">
      <div className="header-wrap">
        <div className="logo">
          <img src={appLogo} alt="Webisle logo" />
        </div>
        
          <div className="main-nav">
            <div className="main-nav-wrap">
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="user-nav">
            <div className="user-nav-wrap">
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#" className='demo-btn'>Demo</a></li>
              </ul>
            </div>
          </div>
        
        <div className="nav-mobile">
          <Hamburger/>
        </div>
      </div>
      </div>
      
    </div>

  );
}

export default Header;
