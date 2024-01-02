import React from 'react';
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <header className="header">
      <div className="container_header">
        <a href="#/" className="logo">
          <img src="/assets/logo-icon.png" alt="logo" />
          <p>Pangea</p>
        </a>
        <div className="nav-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#catalog">Catalog</a></li>
            <li><a href="#devices">Devices</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <img src="img/ham-icon.png" className="menu-hamburger" alt="menu icon" />
      </div>
    </header>
  );
};

export default Navbar;