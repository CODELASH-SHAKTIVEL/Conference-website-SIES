import React from 'react';
import '../Styles/Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className='marquee-container'>
        <marquee behavior="scroll" direction="left">This is my college website</marquee>
      </div>
      <nav className='navbar-container'>
      <div className="left-logo">
          <img src="/path/to/your/left-logo.png" alt="Left Logo" />
        </div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/Callforpaper'}>Call for Paper</Link></li>
          <li><Link to={'/contact-us'}>Contact Us</Link></li>
        </ul>
        <div className="middle-text">
          <p>Two sentences here</p>
        </div>
        <div className="right-logo">
          <img src="/path/to/your/right-logo.png" alt="Right Logo" />
        </div>
      </nav>
    </>
  );
}

export default Header;

