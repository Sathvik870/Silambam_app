import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <nav className="main-nav">
        <div className="nav-row">
          <Link to="/admission" className="nav-button">Admission</Link>
          <Link to="/calendar" className="nav-button">Class Calendar</Link>
          <Link to="/customer-service" className="nav-button">Customer Service</Link>
          <Link to="/location" className="nav-button">Location Navigation</Link>
        </div>
      </nav>
      
      <div className="logo-container">
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
      </div>

      <div className="welcome-messages">
        <h2 className="welcome-text">Welcome to Silambam Class!!!</h2>
        <h2 className="welcome-text">Unleash your skills!!</h2>
      </div>

      <div className="outcome-button-container">
        <Link to="/course-outcome" className="outcome-button">Course Outcome</Link>
      </div>
    </div>
  );
};

export default MainPage;
