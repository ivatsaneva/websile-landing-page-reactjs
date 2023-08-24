import React, { Component, useEffect } from 'react';
import $ from 'jquery'; 


function Hamburger() {

    useEffect(() => {
        const handleClick = () => {
          $('#toggle').toggleClass('active');
          $('#overlay').toggleClass('open');
        };
    
        $('#toggle').on('click', handleClick);
    
        return () => {
          $('#toggle').off('click', handleClick);
        };
      }, []);

  return (
    <>
      <div className="hamburger_container" id="toggle">
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      <div className="overlay" id="overlay">
        <nav className="overlay-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Hamburger;
