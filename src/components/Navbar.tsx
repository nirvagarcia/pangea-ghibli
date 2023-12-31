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
            <li><a href="#/">About</a></li>
            <li><a href="#/">Catalog</a></li>
            <li><a href="#/">Membership</a></li>
            <li><a href="#/">Support</a></li>
            <li><a href="#/">Contact</a></li>
          </ul>
        </div>
        <img src="img/ham-icon.png" className="menu-hamburger" alt="menu icon" />
      </div>
    </header>
  );
};

export default Navbar;