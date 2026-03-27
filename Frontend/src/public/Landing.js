import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">
          Welcome to PopX
          <span className="title-badge">🔔</span>
        </h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="landing-buttons">
          <Link to="/signup" className="btn btn-primary">
            Create Account
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;