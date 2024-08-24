// src/Gallery.js
import React from 'react';
import './gallery.js';
import Image1 from './48454113212_bc027276a1_b.jpg';
import Image2 from './room1.jpg';
import Image3 from './recep.jpg';
import Image4 from './service.jpg';
import Image5 from './flower.jpg';
import Image6 from './baranti.webp';
import Image7 from './large.jpg';
import Image8 from './mithonDam.webp';
import Image9 from './palash.webp';
const Gallery = () => {
  const images = [
    { src: Image1, alt: 'Image 2' },
    { src: Image2, alt: 'room1.jpg' },
    { src: Image3, alt: 'recep.jpg' },
    { src: Image4, alt: 'service.jpg' },
    { src: Image5, alt: 'flower.jpg'},
    { src: Image6, alt: 'baranti.webp'},
    { src: Image7, alt: 'large.jpg'},
    { src: Image8, alt: 'mithonDam.webp'},
    { src: Image9, alt: 'palash.webp'},

    // Add more images as needed
  ];

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} className="gallery-image" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
