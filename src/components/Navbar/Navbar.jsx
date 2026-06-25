import React, { useState } from 'react';
import './Navbar.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import nav_underline from '../../assets/nav_underline.svg';
import menu_close from '../../assets/menu_close.svg';
import menu_open from '../../assets/menu_open.svg';

import { useRef } from 'react';

const Navbar = () => {
  const [navMenu, setNavMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  console.log(menuRef);
  return (
    <div className="navbar">
      <div className="logo-cont">
        <h1>&lt;AniL/&gt;</h1>
        <img src={theme_pattern} />
      </div>
      <img src={menu_open} className="nav-menu-bar" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} className="nav-menu-close" onClick={closeMenu} />
        <a href="#home">
          <p onClick={() => setNavMenu('home')}>Home</p>

          {navMenu === 'home' ? <img src={nav_underline} /> : <></>}
        </a>
        <a href="#about">
          <p onClick={() => setNavMenu('about')}>About me</p>
          {navMenu === 'about' ? <img src={nav_underline} /> : <></>}
        </a>
        <a href="#service">
          <p onClick={() => setNavMenu('service')}>Services</p>
          {navMenu === 'service' ? <img src={nav_underline} /> : <></>}
        </a>
        <a href="#work">
          <p onClick={() => setNavMenu('work')}>Portfolio</p>{' '}
          {navMenu === 'work' ? <img src={nav_underline} /> : <></>}
        </a>
        <a href="#contact">
          <p onClick={() => setNavMenu('contact')}> Contact</p>
          {navMenu === 'contact' ? <img src={nav_underline} /> : <></>}
        </a>
      </ul>
      <a href="#contact">
        <button className="nav-connect">Contact With Me</button>
      </a>
    </div>
  );
};

export default Navbar;
