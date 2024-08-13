import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <div className="logo-circle">M</div>
          <div className="logo-text">
            <h1>Maggie Brightstone</h1>
            <p>Virtual Assistant</p>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>Services and Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className="login">
          <FaUserCircle className="login-icon" />
          <span>Log In</span>
        </div>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar