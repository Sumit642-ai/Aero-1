import React from 'react';
import './Footer.css';
import { FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-left">
          <div className="brand-name">AEROSPACE</div>
          <nav className="footer-nav">
            <a href="/materials">Materials</a>
            <a href="/about">About</a>
            <a href="/courses">Courses</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
          </nav>

          <div className="contact-section">
            <h4>Contact Us</h4>
            <div className="contributors">
              <div className="contributor">
                <span><strong>Md Zayed Ghanchi</strong> &nbsp;
                  <a href="https://www.linkedin.com/in/md-zayed-ghanchi-bb999a325" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                  </a>&nbsp;
                  <a href="mailto:mdzayedghanchi.24@kgpian.iitkgp.ac.in" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon" />
                  </a>&nbsp;
                  <a href="https://www.instagram.com/zayedmd_786" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon" />
                  </a>
                </span>
              </div>
              <div className="contributor">
                <span><strong>Sumit Vijay Raut</strong> &nbsp;
                  <a href="https://www.linkedin.com/in/sumit74224" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                  </a>&nbsp;
                  <a href="mailto:sumit.raut.24@kgpian.iitkgp.ac.in" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="icon" />
                  </a>&nbsp;
                  <a href="https://www.instagram.com/sumit_raut7422" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="app-download">
            <div className="qr-box">
              <img src="/qr-code.jpg" alt="QR Code" className="qr-code" />
              <span>Upload Materials</span>
            </div>
          </div>
        </div>
      </div>

      {/* ⬇️ Move legal here */}
      <div className="footer-legal">
        © {new Date().getFullYear()} Aerospace Portal. All rights reserved.
      </div>
    </footer>

  );
};

export default Footer;
