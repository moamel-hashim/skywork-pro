import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactMain.css';

export default function ContactMain() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oba9kad', 'template_6pmljbq', e.target, '-aFmEg-iRDqv0cvXj')
      .then((result) => {
        alert('Message sent successfully!');
        console.log(result)
      }, (error) => {
        alert('Failed to send the message, please try again.');
        console.log(error)
      });
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      message: ''
    });
  };

  return (
    <main className="contact-page">
      <header>
        <h1>Contact <span>Us</span></h1>
        <p>Email: info@skywork.pro</p>
        <div>
          <p>Have a question or want to learn more about our services? Feel free to send us a message, we're here to help!</p>
        </div>
      </header>
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name <span>*</span></label>
          </div>
          <div>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name <span>*</span></label>
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="company">Company <span>*</span></label>
          </div>
          <div>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email <span>*</span></label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone <span>*</span></label>
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country">Country <span>*</span></label>
          </div>
          <div>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit">Send</button>
          </div>
        </form>
      </section>
    </main>
  );
}
