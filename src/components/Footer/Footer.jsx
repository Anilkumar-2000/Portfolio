import React from 'react';
import './Footer.css';

import theme_pattern from '../../assets/theme_pattern.svg';
import nav_underline from '../../assets/nav_underline.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-child">
        <div className="footer-left">
          <div className="footer-cont">
            <h1>Anil</h1>
            <img src={theme_pattern} />
          </div>
          <p>
            I am a frontend developer from, USA with 10 years of experience in companies like
            Microsoft, Tesla and Apple.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-input-box">
            <img src={user_icon} />
            <input placeholder="Enter your Email" />
          </div>
          <button>Subscribe</button>
        </div>
      </div>
      <hr style={{ width: '100%', margin: '2rem' }} />
      <div className="terms-and-conditions">
        <p>© 2026 Anil Kumar. All rights reserved.</p>
        <div className="terms-and-policies">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
