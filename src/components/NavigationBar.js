import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../icons_assets/Logo.svg';
import '../App.css';

const NavigationBar = () => {
  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-logo">
        <img src={logo} className="NavigationBar-logo-img" alt="logo" />
      </div>
      <ul className="NavigationBar-nav">
        <li className="NavigationBar-nav-item"><Link to="/">Home</Link></li>
        <li className="NavigationBar-nav-item"><Link to="/about">About</Link></li>
        <li className="NavigationBar-nav-item"><Link to="/menu">Menu</Link></li>
        <li className="NavigationBar-nav-item"><Link to="/booking">Reservation</Link></li>
        <li className="NavigationBar-nav-item"><Link to="/order">Order Online</Link></li>
        <li className="NavigationBar-nav-item"><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};
export default NavigationBar;