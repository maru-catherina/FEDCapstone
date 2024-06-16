import React from 'react';
import heroImage from '../icons_assets/restauranfood.jpg';
import '../App.css';

const CallToAction = () => {
  return (
    <section className="CallToAction">
      <div className="CallToAction-content">
        <div className="CallToAction-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a familly owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
           <button>Reserve a Table</button>
        </div>
        <div className="CallToAction-image">
          <img src={heroImage} width="300px" alt="Call T Action" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;