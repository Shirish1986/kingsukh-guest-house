import React, { useState } from 'react';
import './Contact.css'; // Ensure you have the corresponding CSS file

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      
      <div className="contact-container">
        {/* Contact Information Box */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Beside Barshal Water Tank,<br />
             Manpur, Barhanti,<br />
             West Bengal 723156
          </p>
          <p>Email: <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a></p>
          <p>Phone: <a href="tel:+919007062180">+91 9007062180</a></p>
          
          {/* Social Media Links */}
          <div className="social-media">
          <img src="facebook.png" alt="Facebook" className="social-icon" />
          <a href="facebook.png" target="_blank" rel="noopener noreferrer" aria-label="Facebook"></a>
          <img src="instagram.png" alt="Instagram" className="social-icon" />
          <a href='https://www.instagram.com/kingsukhguesthouse?igsh=MTBoYjhxbTE2cGJtMg==' target="_blank" rel="noopener noreferrer" aria-label="Instagram"></a>
         
          <img src="twitter (2).png" alt="Twitter" className="social-icon" />
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>


        
          </div>
        </div>

       </div>
    
  );
}

export default Contact;
