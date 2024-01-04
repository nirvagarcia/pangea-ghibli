import React, { useState, useEffect } from 'react';
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [transitioning, setTransitioning] = useState(false);

    const toggleMenu = () => {
        setTransitioning(true);
        setMenuOpen(!menuOpen);
    };

    const handleOptionClick = () => {
        setTransitioning(true);
        setMenuOpen(false);
    };

    useEffect(() => {
        const transitionTimeout = setTimeout(() => {
        setTransitioning(false);
        }, 300); 

        return () => {
        clearTimeout(transitionTimeout);
        };
    }, [menuOpen]);

    return (
        <header className={`header ${menuOpen ? 'menu-open' : ''} ${transitioning ? 'transitioning' : ''}`}>
        <div className="container_header">
                <a href="#home" className="logo">
                <img src="/assets/logo-icon.png" alt="logo" />
                <p>Pangea</p>
                </a>
                <div className={`nav-links ${menuOpen ? 'menu-open' : ''}`}>
                <ul>
                    <li><a href="#home" onClick={handleOptionClick}>Inicio</a></li>
                    <li><a href="#catalog" onClick={handleOptionClick}>Catálogo</a></li>
                    <li><a href="#devices" onClick={handleOptionClick}>Dispositivos</a></li>
                    <li><a href="#membership" onClick={handleOptionClick}>Planes</a></li>
                    <li><a href="#questions" onClick={handleOptionClick}>Q&A</a></li>
                </ul>
                </div>
                {menuOpen ? (
                    <img
                    className="close-icon"
                    src="/assets/close.png"
                    alt="close icon"
                    onClick={toggleMenu}
                    />
                ) : (
                    <img
                    className="menu-hamburger"
                    src="/assets/ham-icon.png"
                    alt="menu icon"
                    onClick={toggleMenu}
                    />
                )}
            </div>
        </header>
    );
};

export default Navbar;