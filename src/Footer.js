import React from 'react';
import './Footer.css'; // Ensure you have the corresponding CSS file

function Footer() {
  const whatsappNumber = '9007062180'; // Use the number without country code
  const message = 'Hello, I would like to book a room at Kingsukh Guest House.';

  // Create a URL for WhatsApp with the message
  const whatsappURL = `https://wa.me/91${9007062180}?text=${encodeURIComponent(message)}`;

  const handleBookNowClick = () => {
    console.log(`Opening WhatsApp with URL: ${`https://wa.me/91${9007062180}?text=${encodeURIComponent(message)}`}`);
    window.open(`https://wa.me/91${9007062180}?text=${encodeURIComponent(message)}`, '_blank');
    
  };
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Kingsukh Guest House</h2>
          <p>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</p>
          <a href={`https://wa.me/${9007062180}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
    <button className="book-now-button">Book Now</button>
  </a>
        </div>
        
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#destinations">Browse Destinations</a></li>
            <li><a href="#offers">Special Offers & Packages</a></li>
            <li><a href="#room-types">Room Types & Amenities</a></li>
            <li><a href="#reviews">Customer Reviews & Ratings</a></li>
            <li><a href="#travel-tips">Travel Tips & Guides</a></li>
          </ul>
        </div>
       
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p>Email: <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
          <p>Phone: <a href="tel:+919007062180">+91 9007062180</a></p>
          <p>Follow us on: 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>, 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>, 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>, 
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
