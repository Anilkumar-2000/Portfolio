import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-cont">
        <h1 className="about-heading">About me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src="https://res.cloudinary.com/dvtjjfp2p/image/upload/v1782210786/Anil-img_g5uiqn.png" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced Frontend Developer with over a decade of professional expertise in
              the field. Throughout my career, I have had the privilege of collaborating with
              prestigious organizations, contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my extensive experience
              but also in the enthusiasm and dedication I bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: '65%' }} />
              <span>65%</span>
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: '60%' }} />
              <span>60%</span>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: '70%' }} />
              <span>70%</span>
            </div>
            <div className="about-skill">
              <p>Node Js</p>
              <hr style={{ width: '50%' }} />
              <span>50%</span>
            </div>
            <div className="about-skill">
              <p>Express Js</p>
              <hr style={{ width: '70%' }} />
              <span>70%</span>
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: '50%' }} />
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <span>|</span>
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <span>|</span>
        <div className="about-achievement">
          <h1>1000+</h1>
          <p>Hours of Coding Practice</p>
        </div>
      </div>
    </div>
  );
};

export default About;
