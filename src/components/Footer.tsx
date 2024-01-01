import React from 'react';
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Pangea</h2>
          <p>Tu plataforma de streaming de animes favorita</p>
        </div>

        <div className="footer-section">
          <h3>Políticas</h3>
          <ul>
            <li><a href="#/">Inicio</a></li>
            <li><a href="#/">Catálogo</a></li>
            <li><a href="#/">Suscripciones</a></li>
            <li><a href="#/">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>info@pangea.com</p>
          <p>Lima, Perú</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Pangea - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
