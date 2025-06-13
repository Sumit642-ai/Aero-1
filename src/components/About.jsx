import React from 'react';
import { motion } from 'framer-motion';

import './About.css';
import profilePic from '../assets/my-photo.jpg';
function About() {
  

  return (
    <section className="about" id="about">
        <motion.h2 
        className="about-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Credit
      </motion.h2>

      <motion.div 
        className="about-center-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="about-photo-wrapper">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </div>


         <motion.div 
          className="links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="https://linkedin.com/in/sumit74224" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Sumit642-ai" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://instagram.com/sumit_raut7422" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="mailto:sumitraut.24@kgpian.iitkgp.ac.in">Email</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
