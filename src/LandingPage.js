import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css';

export default function LandingPage() {
  return (
      <div className="container">
            <div className="left-box">
            
            </div>
            <div className="right-box">
                <p>10X Team 04</p>
                <Link to="/postview"><button>Enter</button></Link>
            </div>
      </div>
  );
}
