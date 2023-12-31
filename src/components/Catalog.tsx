import React from 'react';
import '../styles/Catalog.css';
import '../styles/swiper.css';

const Catalog: React.FC = () => {
  return (
    <div className="container swiper">
      <div className="slide-container">

        <div className="swiper-text">
          <h1> Todas las películas de <span>Studio Ghibli</span> a tu alcance </h1>
          <h2> Reproduce películas completas de éxito, los Ghibli Originals, historias fantásticas empapádas de sentimiento, buena animación, y mucho más. </h2>
        </div>

        <div className="card-wrapper swiper-wrapper">

          <div className="card swiper-slide" style={{ backgroundImage: 'url(/assets/movie1.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Howl's Moving Castle</h3>
                <h4 className="description">Fantasy/Adventure</h4>
                <p>Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the help of Howl's friends, Calcifer and Markl.</p>
              </div>
            </div>
          </div>

          <div className="card swiper-slide" style={{ backgroundImage: 'url(/assets/movie2.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Kiki's Delivery Service</h3>
                <h4 className="description">Adventure/Family</h4>
                <p>Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. She soon becomes a fixture in the community.</p>
              </div>
            </div>
          </div>

          <div className="card swiper-slide" style={{ backgroundImage: 'url(/assets/movie3.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">My Neighbor Totoro</h3>
                <h4 className="description">Fantasy/Animation</h4>
                <p>Sheeta and her kidnapper are flying to a military prison when their plane is attacked by a gang of air pirates led. She discover the mystical floating city of Laputa, full of treasures.</p>
              </div>
            </div>
          </div>

          <div className="card swiper-slide" style={{ backgroundImage: 'url(/assets/movie4.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Castle in the Sky</h3>
                <h4 className="description">Fantasy/Adventure</h4>
                <p>Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the help of Howl's friends, Calcifer and Markl.</p>
              </div>
            </div>
          </div>

          <div className="card swiper-slide" style={{ backgroundImage: 'url(/assets/movie5.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">Ponyo</h3>
                <h4 className="description">Fantasy/Adventure</h4>
                <p>Sosuke rescues a goldfish trapped in a bottle. The goldfish, who is the daughter of a wizard, transforms herself into a young girl with her father's magic and falls in love with Sosuke.</p>
              </div>
            </div>
          </div>

          <div className="card swiper-slide" style={{ backgroundImage: 'url(/assets/movie6.png)' }}>
            <div className="movie-details">
              <div className="title-description">
                <h3 className="title">The Wind Rises</h3>
                <h4 className="description">War/Romance</h4>
                <p>Unable to pursue his dream of becoming a pilot due to his eyesight, Jiro strives hard and draws inspiration from Giovanni Caproni. Soon, he builds two fighter planes that are used in World War II.</p>
              </div>
            </div>
          </div>

        </div>
        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Catalog;
