import React from 'react';
import '../Styles/Header.css';
import logo from '../assets/sies_gst_logo.jpg'
import Secondlogo from '../assets/International-Conference-on-Deep-Learning-Computing-and-IntelligenceICDCI-2021-1.jpg'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className='marquee-container'>
        <marquee behavior="scroll" direction="left">NOTICE : Call for paper submission date extended till 15th March 2024</marquee>
      </div>
      <nav className='navbar-container'>
      <div className="left-logo">
          <img src={logo} alt="Left Logo" width="170" height="130" />
        </div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/Callforpaper'}>Call for Paper</Link></li>
          <li><Link to={'/ContactUs'}>Contact Us</Link></li>
        </ul>
        <div className="middle-text">
          <p>2nd International Conference on
            Advances in Technology and Management</p>
        </div>
        <div className="right-logo">
          <img src={Secondlogo} alt="Right Logo" width="170" height="120"/>
        </div>
      </nav>
    </>
  );
}

export default Header;

