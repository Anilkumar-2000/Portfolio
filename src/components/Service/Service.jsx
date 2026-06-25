import React from 'react';
import './Service.css';

import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Service = () => {
  return (
    <div id="service" className="service">
      <div className="service-cont">
        <h1>Services</h1>
        <img src={theme_pattern} />
      </div>
      <div className="my-services">
        <div className="service-item">
          <h1>01</h1>
          <h2>Full-Stack Development</h2>
          <p>Building scalable MERN applications from frontend to backend.</p>
          <div className="service-read-more">
            <p>Read more</p>
            <img src={arrow_icon} />
          </div>
        </div>
        <div className="service-item">
          <h1>02</h1>
          <h2>Frontend Development</h2>
          <p>Responsive and modern user interfaces with React and CSS.</p>
          <div className="service-read-more">
            <p>Read more</p>
            <img src={arrow_icon} />
          </div>
        </div>
        <div className="service-item">
          <h1>03</h1>
          <h2>Backend API Development</h2>
          <p>REST APIs, authentication, and database integration.</p>
          <div className="service-read-more">
            <p>Read more</p>
            <img src={arrow_icon} />
          </div>
        </div>
        <div className="service-item">
          <h1>04</h1>
          <h2>Admin Panel Development</h2>
          <p>Product, order, and user management dashboards.</p>
          <div className="service-read-more">
            <p>Read more</p>
            <img src={arrow_icon} />
          </div>
        </div>
        <div className="service-item">
          <h1>05</h1>
          <h2>UI Implementation</h2>
          <p>Clean layouts, animations, and responsive designs.</p>
          <div className="service-read-more">
            <p>Read more</p>
            <img src={arrow_icon} />
          </div>
        </div>
        <div className="service-item">
          <h1>06</h1>
          <h2>Image & Video Editing</h2>
          <p>Photo editing, thumbnails, reels, and creative visual work.</p>
          <div className="service-read-more">
            <p>Read more</p>
            <img src={arrow_icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
