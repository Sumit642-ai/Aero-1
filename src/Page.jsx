import React from 'react';
import Navbar from './components/Navbar';
import './bg-animation.css';
import './index.css';
import './App.css';

function Page({ children }) {
  return (
    <div className="full-screen">
      <div className="bg-animated" />
      <Navbar />
      {children}
    </div>
  );
}

export default Page;
