import React, { useEffect } from 'react';
import './ConnectForm.css';

import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { useState } from 'react';

const ConnectForm = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', 'f7b1389c-f370-4363-8633-55de2e433ada');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? 'Success!' : 'Error');
  };

  return (
    <div id="contact" className="connect-form">
      <div className="connect-form-cont">
        <h1>Get in touch</h1>
        <img src={theme_pattern} />
      </div>

      <div className="form">
        <div className="form-left">
          <h2>Let's talk</h2>
          <p>
            I'm currently avaliable to take on new projects, so feel free to send me a message about
            anything that you want me to work on. You can contact anytime.
          </p>
          <div className="form-info">
            <img src={mail_icon} />
            <span>anilkml682@gmail.com</span>
          </div>
          <div className="form-info">
            <img src={call_icon} />
            <span>+91 913-371-2683</span>
          </div>
          <div className="form-info">
            <img src={location_icon} />
            <span>Kurnool, Andhra Pradesh, INDIA</span>
          </div>
        </div>
        <form className="form-right" onSubmit={onSubmit}>
          <div className="form-item">
            <label>Your Name</label>
            <input type="text" placeholder="Your Name" name="name" required />
          </div>
          <div className="form-item">
            <label>Your Email</label>
            <input type="email" placeholder="Your Email" name="email" required />
          </div>
          <div className="form-item">
            <label>Write your message here</label>
            <textarea placeholder="Your Name" name="message" required></textarea>
          </div>
          <button className="form-submit-btn">Submit</button>
        </form>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default ConnectForm;
