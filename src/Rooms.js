import React from 'react';
import './Rooms.css'; // Ensure you create a corresponding CSS file for styling

function Rooms() {
  const roomTypes = [
    {
      name: "Spacious Serenity Suite",
      description: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance. Starting from Rs. 1500/night",
      imageUrl: "large.jpg",
      whatsappNumber: '9007062180',
      bookingMessage: "I'd like to book the Spacious Serenity Suite. Please provide more details."
    },
    {
      name: "Cozy Haven Room",
      description: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation. Starting from Rs. 1000/night",
      imageUrl: "small.jpg",
      whatsappNumber: '9007062180',
      bookingMessage: "I'd like to book the Cozy Haven Room. Please provide more details."
    },
  ];

  const createWhatsAppURL = (number, message) => {
    return `https://wa.me/91${number}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="rooms">
      <h2>Our Rooms</h2>
      <div className="room-list">
        {roomTypes.map((room, index) => (
          <div key={index} className="room-item">
            <img src={room.imageUrl} alt={room.name} className="room-image" />
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <a 
              href={createWhatsAppURL(room.whatsappNumber, room.bookingMessage)} 
              className="book-now-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
