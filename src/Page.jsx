import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import './App.css';
import ParticleContainer from './components/ParticleContainer';

function Page({ children }) {
  const location = useLocation();
  
  // Show footer only on materials/courses pages
  const showFooter = location.pathname.startsWith('/materials') || location.pathname === '/courses';
  
  return (
    <ParticleContainer>
      <Navbar />
      {children}
      {showFooter && <Footer />}
    </ParticleContainer>
  );
}

export default Page;
