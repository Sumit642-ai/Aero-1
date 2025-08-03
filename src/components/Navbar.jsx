import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Logo from './Logo';

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
      <div className="navbar-brand">
        <Link to="/">
          <Logo size="medium" className="navbar-logo" />
        </Link>
      </div>
      
      {w > 770 ? (
        <>
          <ul className="nav-links">
            <li className={`${location.pathname === '/' ? 'active-link' : ''}`}><Link to="/">Home</Link></li>
            <li className={`${location.pathname === '/about' ? 'active-link' : ''}`}><Link to="/about">About</Link></li>
            <li className={`${location.pathname.includes('/materials') ? 'active-link' : ''}`}><Link to="/materials">Materials</Link></li>
          </ul>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScyep_2KkBLSAQdUIyVFOesWe28OxaP4q5U_7w0tUwk9AIgpg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="upload">Upload Material</button>
          </a>
        </>
      ) : (
        <>
          <div className="mobile-header">
            <div className="hamburger" onClick={toggleDropdown}>
              ☰
            </div>
            {open && (
              <div id="dropdown-menu" className="dropdown-menu">
                <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                <Link to="/materials" onClick={() => setOpen(false)}>Materials</Link>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScyep_2KkBLSAQdUIyVFOesWe28OxaP4q5U_7w0tUwk9AIgpg/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <button className="upload">Upload</button>
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );

}

export default Navbar;
