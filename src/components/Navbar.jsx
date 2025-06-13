import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
      
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
