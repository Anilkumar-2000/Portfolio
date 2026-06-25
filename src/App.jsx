import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Service from './components/Service/Service';
import LatestWork from './components/LatestWork/LatestWork';
import ConnectForm from './components/ConnectForm/ConnectForm';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <LatestWork />
      <ConnectForm />
      <Footer />
    </div>
  );
};

export default App;
