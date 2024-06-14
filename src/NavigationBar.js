import React from 'react';
import logo from './icons_assets/Logo.svg';
import './App.css';
const NavigationBar = () => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-logo">
        <img src={logo} className="NavigationBar-logo-img" alt="logo" />
      </div>
      <ul className="NavigationBar-nav">
        <li className="NavigationBar-nav-item"><a href="/">Home</a></li>
        <li className="NavigationBar-nav-item"><a href="/">About</a></li>
        <li className="NavigationBar-nav-item"><a href="/">Menu</a></li>
        <li className="NavigationBar-nav-item"><a href="/">Reservation</a></li>
        <li className="NavigationBar-nav-item"><a href="/">Order Online</a></li>
        <li className="NavigationBar-nav-item"><a href="/">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;