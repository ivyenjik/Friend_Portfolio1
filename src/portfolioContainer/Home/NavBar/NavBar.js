import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          PIERRE
        </a>
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About Me
          </a>
          <a href="#" className="nav-link">
            Projects
          </a>
          <a href="#" className="nav-link">
            Hire Me
          </a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

