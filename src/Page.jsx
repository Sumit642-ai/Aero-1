import React from 'react';
import Navbar from './components/Navbar';
import './index.css';
import './App.css';
import ParticleContainer from './components/ParticleContainer';

function Page({ children }) {
  return (
    <ParticleContainer>
      <Navbar />
      {children}
    </ParticleContainer>
  );
}

export default Page;
