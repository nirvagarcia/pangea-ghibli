import React from 'react';
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
        <div className="footer-content">
            <div className="footer-section">
                <div className='logo'>
                    <div className="logo-section">
                        <img src="/assets/logo-icon.png" alt="logo" />
                    </div>
                    <h2>Pangea</h2>
                </div>              
            </div>

            <div className="footer-section">
                <div className="footer-bottom">
                    <p> © 2023 Nirvana Garcia • Todos los derechos reservados </p>
                </div>       
            </div>
        </div>    
    </footer>
  );
};

export default Footer;