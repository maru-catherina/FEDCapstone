import React from 'react';
import heroImage from './icons_assets/restauranfood.jpg'; 
import './App.css'; // Import your CSS file for HeroSection styling

const HeroSection = () => {
  return (
    <section className="HeroSection">
      <div className="HeroSection-content">
        <div className="HeroSection-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a familly owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>
        <div className="HeroSection-image">
          <img src={heroImage} width="600px" alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;