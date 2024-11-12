import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';
import HamburgerIcon from '../assets/hamburger-icon.svg';

const Sidebar = ({ isOpen, onToggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="toggle-button" onClick={onToggleSidebar}>
        <img
          src={HamburgerIcon}
          alt="Toggle Menu"
          className="hamburger-icon"
        />
      </button>
      {isOpen && (
        <div>
          <h2>Pages</h2>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/about">About Me</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
