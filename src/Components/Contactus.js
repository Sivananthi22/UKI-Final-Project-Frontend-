import React, { useState } from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import '/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/Contactus.css'; // Custom CSS for additional styling
import Contact from "/home/sivananthi/Documents/UKI FINAL PROJECT/frontend/src/Components/Images/Contact.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
  
    console.log('Sending data:', data);
  
    try {
      const response = await fetch('https://web3forms.com/api/v1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      console.log('Response:', response);
  
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        }); // Clear form after successful submission
      } else {
        console.log('Response Status:', response.status);
        const responseText = await response.text();
        console.log('Response Text:', responseText);
        alert("Error sending message.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error sending message.");
    }
  };
  

  return (
    <div>
      <Navbar /> {/* Use the Navbar component here */}
      {/* Header Image */}
      <header className="contact-header">
        <img src={Contact} alt="Bakery" className="img-fluid" />
        <h1 className="contact-title">Contact Us</h1>
      </header>

      {/* Contact Section */}
      <div className="container my-5">
        <div className="row">
          {/* Contact Details */}
          <div className="col-md-6">
            <div className="contact-info">
              <div className="info-box">
                <h5>Phone Number</h5>
                <p>+94 77 338 7868</p>
              </div>
              <div className="info-box">
                <h5>WhatsApp</h5>
                <p>+94 77 338 7868</p>
              </div>
              <div className="info-box">
                <h5>Email</h5>
                <p>info@nutribakery.com</p>
              </div>
              <div className="info-box">
                <h5>Shop Address</h5>
                <p>Kopay North Kopay</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Now</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <h5>Our Store</h5>
              <p>Find the best healthy bakery products at Nutri Bakery.</p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <h5>Other Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Home</a></li>
                <li><a href="#" className="text-dark">Menu</a></li>
                <li><a href="#" className="text-dark">Contact Us</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-12 mb-4">
              <h5>Get in Touch</h5>
              <p>Email: info@nutribakery.com</p>
              <p>Phone: +94 77 338 7868</p>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-dark text-white">
          © 2024 Nutri Bakery. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
