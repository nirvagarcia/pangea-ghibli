import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <section className="hero">
      <div className="container_hero">
        <h1>Disfruta las mejores películas de Anime en PANGEA</h1>
        <p>
          Vive una increíble experiencia en Pangea, la plataforma de anime streaming con +100 películas dirigidas y producidas por Studio Ghibli
        </p>
        <a href="#/" className="button">
          Suscríbete ahora
        </a>
      </div>
    </section>
  );
};

export default Home;
