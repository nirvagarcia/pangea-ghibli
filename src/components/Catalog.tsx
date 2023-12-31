import React from 'react';
import '../styles/Catalog.css';
import 'swiper/swiper-bundle.css'; // Importa todos los módulos y estilos necesarios de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

const Catalog: React.FC = () => {
  return (
    <div className="container swiper">
      <div className="slide-container">
        <div className="swiper-text">
            <h1> Todas las películas de <span>Studio Ghibli</span> a tu alcance </h1>
            <h2> Reproduce películas completas de éxito, los Ghibli Originals, historias fantásticas empapádas de sentimiento, buena animación, y mucho más. </h2>
          </div>

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie1.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Howl's Moving Castle</h3>
                <h4 className="description">Fantasy/Adventure</h4>
                <p>Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the help of Howl's friends, Calcifer and Markl.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie2.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Kiki's Delivery Service</h3>
                <h4 className="description">Adventure/Family</h4>
                <p>Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. She soon becomes a fixture in the community.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie3.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">My Neighbor Totoro</h3>
                <h4 className="description">Fantasy/Animation</h4>
                <p>Sheeta and her kidnapper are flying to a military prison when their plane is attacked by a gang of air pirates led. She discover the mystical floating city of Laputa, full of treasures.</p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>

      </div>
    </div>
  );
};

export default Catalog;
