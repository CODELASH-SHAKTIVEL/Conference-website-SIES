import React from 'react';
import '../Styles/ContactUs.css'; // Import your CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Get In Touch With Us!</p>
        <div className="contact-details">
          <div className="contact-person">
            <h3>Prof. XXXX</h3>
            <p>Phone: 9892XXXXX</p>
          </div>
          <div className="contact-person">
            <h3>Prof. XXXX</h3>
            <p>Phone: 835XXXXX</p>
          </div>
          <div className="contact-email">
            <h3>Email</h3>
            <p>General : siesce@sies.edu.in</p>
          </div>
        </div>
      </div>
      <div className="map">
        {/* Your Google Map component goes here */}
        {/* Replace the following line with your Google Map component */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.479310543375!2d73.02045167497647!3d19.042652532155067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db5e2c85cd%3A0xef26c52d7d73816e!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sus!4v1710655088828!5m2!1sen!2sus" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
