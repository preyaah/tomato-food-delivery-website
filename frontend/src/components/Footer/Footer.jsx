import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets'; 

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus repellat distinctio accusantium dolorem ratione veritatis consequatur voluptatibus eligendi. Qui sunt eaque alias. Error repellat et magnam alias blanditiis debitis.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 7398754325</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2025 © Tomato.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
