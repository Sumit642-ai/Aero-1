import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [w, setWidth] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log("Current path:", location.pathname);


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
        setOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById('dropdown-menu');
            const button = document.querySelector('.profile-icon');
            if (dropdown && !dropdown.contains(event.target) && !button.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <nav id='navbar'>
      <ul className="nav-links">
        <li className={`${location.pathname === '/' ? 'active-link' : ''}`}><Link to="/">Home</Link></li>
        <li className={`${location.pathname === '/about' ? 'active-link' : ''}`}><Link to="/about">About</Link></li>
        <li className={`${location.pathname.includes('/materials') ? 'active-link' : ''}`}><Link to="/materials">Materials</Link></li>
      </ul>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLScyep_2KkBLSAQdUIyVFOesWe28OxaP4q5U_7w0tUwk9AIgpg/viewform?usp=header' target="_blank" rel="noopener noreferrer">
        <button className="upload">Upload Material</button>
      </a>
    </nav>
  );
}

export default Navbar;
