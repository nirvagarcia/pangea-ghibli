import React, { useState, useEffect } from 'react';
import '../styles/Catalog.css';

import { Swiper, SwiperSlide } from 'swiper/react';

const Catalog: React.FC = () => {

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1600) {
        setSlidesPerView(4);
      } else if (width > 1000) {
        setSlidesPerView(3);
      } else if (width > 780) {
        setSlidesPerView(2);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div id="catalog" className="container swiper">
      <div className="slide-container">
        <div className="swiper-text">
          <h1> Todas las películas de <span>Studio Ghibli</span> a tu alcance </h1>
          <h2> Reproduce películas completas de éxito, los Ghibli Originals, historias fantásticas empapádas de sentimiento, buena animación, y mucho más. </h2>
        </div>

        <Swiper
          spaceBetween={15}
          slidesPerView={slidesPerView}          //navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true} 
        >
          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie1.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Howl's Moving Castle</h3>
                <h4 className="description">Fantasy / Adventure</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie2.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Kiki's Delivery Service</h3>
                <h4 className="description">Adventure / Family</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie3.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">My Neighbor Totoro</h3>
                <h4 className="description">Fantasy / Animation</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie4.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Castle in the Sky</h3>
                <h4 className="description">Fantasy / Adventure</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie5.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Ponyo</h3>
                <h4 className="description">Fantasy / Adventure</h4>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='card' style={{ backgroundImage: 'url(/assets/movie6.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">The Wind Rises</h3>
                <h4 className="description">War / Romance</h4>
              </div>
            </div>
          </SwiperSlide>

          <h2 className="swiper-footer"> Arrastra para ver todo el catálogo</h2>

        </Swiper>

      </div>
    </div>
  );
};

export default Catalog;
