import React from 'react';
import NavBar from '../components/navBar';
import bgImage from '../assets/bg.jpeg';
import '../App.css';

function LandingPage() {
  return (
    <div className="relative h-screen w-full">
      
      <div 
        className="absolute inset-0 bg-cover  filter brightness-75 contrast-125"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      <div className="relative z-10">
        <NavBar />
      </div>
    </div>
  );
}

export default LandingPage;
