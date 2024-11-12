import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About Me</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
