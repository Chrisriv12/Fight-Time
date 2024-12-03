import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Optional: Add your styles here


function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/WeekGen">Generate Schedule</Link>
          <Link className="nav-item" to="/Schedule">View Schedule</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
