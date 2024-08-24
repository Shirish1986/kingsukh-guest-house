import React from 'react';
import './Services.css'; // Ensure this includes styling for the new section

function Services() {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <h2>Strive Only For The Best</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Comfortable Rooms</h3>
          <p>Our rooms are designed for your comfort, offering a peaceful retreat after a long day.</p>
        </div>
        <div className="service-item">
          <h3>24/7 Room Service</h3>
          <p>Enjoy round-the-clock room service to cater to all your needs, anytime you require.</p>
        </div>
        <div className="service-item">
          <h3>Free Wi-Fi</h3>
          <p>Stay connected with our high-speed Wi-Fi available throughout the property.</p>
        </div>
        <div className="service-item">
          <h3>Restaurant</h3>
          <p>Experience our in-house dining with a variety of local and international cuisines.</p>
        </div>
        <div className="service-item">
          <h3>Laundry Service</h3>
          <p>Take advantage of our convenient laundry service, available on request.</p>
        </div>
        <div className="service-item">
          <h3>Free Parking</h3>
          <p>We offer free, secure parking facilities for all our guests.</p>
        </div>
      </div>
      <div className="tourist-guide">
        <h2>Tourist Guide</h2>
        <p>Explore the best attractions and activities around our guest house with our curated tourist guide. Discover local landmarks, entertainment options, and hidden gems to make your stay unforgettable.</p>
        <ul>
          <li><strong>Historical Sites:</strong> Visit nearby historical landmarks and learn about the local history.</li>
          <li><strong>Outdoor Activities:</strong> Enjoy outdoor adventures like hiking, biking, and nature walks.</li>
          <li><strong>Local Markets:</strong> Explore local markets for unique crafts, souvenirs, and fresh produce.</li>
          <li><strong>Dining Recommendations:</strong> Discover the best local restaurants and eateries to try.</li>
          <li><strong>Cultural Events:</strong> Attend local festivals, art exhibitions, and cultural performances.</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
