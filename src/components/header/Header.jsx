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
                <li><a className="demo-btn">
                                            <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                                            Explore
                                        </a></li>
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
