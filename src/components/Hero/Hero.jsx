import React from 'react';
import './Hero.css';

import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img
        src="https://res.cloudinary.com/dvtjjfp2p/image/upload/v1782188433/Anil_image_s7x5p5.jpg"
        className="hero-image"
      />

      <h1>
        <span>I'm AniL Kumar, </span> <br />
        <TypeAnimation
          sequence={['Frontend', 3000, 'Backend', 3000, 'Full Stack', 3000]}
          speed={120}
          repeat={Infinity}
        />
        developer based in INDIA.
      </h1>
      <p>
        I am a full stack developer from Andhra Pradesh, Kurnool with 2 years of experience in web
        development.
      </p>
      <div className="hero-action">
        <button className="button connect-btn">Connect With Me</button>
        <button className="button resume-btn">My Resume</button>
      </div>
    </div>
  );
};

export default Hero;
