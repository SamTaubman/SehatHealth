import React from 'react';
import './TopBar.css';
import logo from '../public/SehatLogo.png';
import { Link } from 'react-router-dom';

function TopBar() {
    return (
      <header className="top-bar">
      <a href="/" className="logo-link"> {/* Set href attribute to the URL of main page */}
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <div className="buttons">
        <Link to="/copilot" className="button-link">
          <button className="button">CoPilot</button>
        </Link>
        <Link to="/chatbot" className="button-link">
          <button className="button">ChatBot</button>
        </Link>
      </div>
    </header>
    );
  }

export default TopBar;