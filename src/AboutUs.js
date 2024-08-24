import React from 'react';
import './AboutUs.css'; // Ensure you have the corresponding CSS file

function AboutUs() {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      
      <div className="about-us-content">
        <img src="out (1).jpg" alt="Kingsukh Guest House" className="about-us-image" />
        
        <div className="about-us-text">
          <p>
            Welcome to Kingsukh Guest House, your home away from home. Nestled in the heart of the city, 
            our guest house offers a serene and comfortable retreat for travelers. Whether you’re here for business or leisure, 
            we strive to provide a unique experience that combines the warmth of home with the luxury of a hotel.
          </p>
          <p>
            Established in 2005, Kingsukh Guest House has been serving guests with exceptional hospitality and service. 
            Our rooms are designed to cater to your comfort and relaxation, ensuring that your stay is memorable.
          </p>
          <p>
            At Kingsukh, we believe in the simplicity of good service and the value of a friendly environment. 
            Our team is dedicated to making your stay as comfortable as possible, with personalized services tailored to your needs.
          </p>

          {/* Highlights Section */}
          <div className="highlights">
            <div className="highlight">
              <h3>1000+</h3>
              <p>Bookings</p>
            </div>
            <div className="highlight">
              <h3>900+</h3>
              <p>Happy Customers</p>
            </div>
          </div>

          <p>
            We look forward to welcoming you to Kingsukh Guest House, where comfort meets convenience, and every guest is treated like family.
          </p>

          {/* Adding the Google Maps link */}
          <p>
            Find us on Google Maps: <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA" target="_blank" rel="noopener noreferrer">Kingsukh Guest House Location</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
