import React from 'react';
import './Logo.css';

const Logo = ({ size = 'medium', className = '' }) => {
  return (
    <div className={`logo-container ${size} ${className}`}>
      <div className="logo-graphic">
        <img 
          src="/logoaerospace.png" 
          alt="AeroSpace Logo" 
          className="logo-image"
        />
      </div>
    </div>
  );
};

export default Logo; 