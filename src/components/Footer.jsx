import React from 'react';
import './Footer.css'; // Make sure to create this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="https://play.google.com/store/apps/details?id=com.iitkgp.kgpllence&pli=1" target="_blank">KGPellence</a></li>
            <li><a href="https://qp.metakgp.org/" target="_blank">PYQs</a></li>
            <li><a href="https://gc.sed.lol/kronos/" target="_blank">Grades Data</a></li>
            <li><a href="https://www.youtube.com/@iit/courses" target="_blank">nptel</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Aerospace Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
