import React, { useState } from 'react';
import '../styles/ContactSection.css';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string, email?: string, message?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string, email?: string, message?: string } = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!message) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }


    alert('Form submitted successfully!');
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="contactSection">
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'inputError' : ''}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'inputError' : ''}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={errors.message ? 'inputError' : ''}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button type="submit" className="submitButton">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
