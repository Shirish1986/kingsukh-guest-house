import React from 'react';
import './App.css';
import Gallery from './gallery';
import AboutUs from './AboutUs';
import Services from './Services';
import Rooms from './Rooms';
import Contact from './Contact';
import Footer from './Footer'; // Import the Footer component

function App() {
  const whatsappNumber = '9007062180'; // Use the number without country code
  const message = 'Hello, I would like to book a room at Kingsukh Guest House.';

  // Create a URL for WhatsApp with the message
  const whatsappURL = `https://wa.me/${9007062180}?text=${encodeURIComponent(message)}`;


  return (
    <div className="App">
      <div className='navbar' align="center">

        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#rooms">Rooms</a>
        <a href="#gallery">Gallery</a>
      </div>
 {/* Background section */}
 <div className="hero-with-bg">
        <h3 align="left">Kingsukh Guest House</h3>
        <a href={`https://wa.me/${9007062180}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">
          <button className="book-now-button">Book Now</button>
        </a>
        <h4 align="middle">simple-unique-friendly</h4>
        <h1 align="center"><strong>Step into our universe and <br />feel like your home.</strong></h1>
      </div>

      {/* Gallery section */}
      <div id="gallery">
        <h2>Our Gallery</h2>
        <Gallery />
      </div>

      {/* Services section */}
      <div id="services">
        <Services />
      </div>

      {/* About Us section */}
      <div id="about">
        <AboutUs />
      </div>

      {/* Rooms section */}
      <div id="rooms">
        <Rooms />
      </div>

      {/* Contact section */}
      <div id="contact">
        <Contact />
      </div>

      {/* Map section */}
      <div className="map-container">
        <h3>Find Us on the Map</h3>
        <iframe
          title="Google Maps Location"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.501598139105!2d86.857215474787!3d23.586337295056076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1724519600286!5m2!1sen!2sin" 
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer section */}
      <div id="footer">
      <Footer />
</div>
    </div>
  );
}

export default App;
