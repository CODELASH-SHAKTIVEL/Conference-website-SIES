import React from 'react';
import '../Styles/Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>Your college conference description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="contact">
            <span><i className="fas fa-envelope"></i> example@email.com</span>
            <span><i className="fas fa-phone"></i> 123-456-7890</span>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Sies college link</a></li>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">Carreer </a></li>
            <li><a href="#">Enginneering</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 College Conference. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

