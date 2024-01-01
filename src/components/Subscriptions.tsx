import React from 'react';
import "../styles/Subscriptions.css";
import "../styles/WavesEffect.css";

const Subscriptions: React.FC = () => {
  return (
    <>
     <section id="wavecontainer">
        <div className="wave" id="wave1" style={{ '--i': 1 } as React.CSSProperties}></div>
        <div className="wave" id="wave2" style={{ '--i': 2 } as React.CSSProperties}></div>
        <div className="wave" id="wave3" style={{ '--i': 3 } as React.CSSProperties}></div>
        <div className="wave" id="wave4" style={{ '--i': 4 } as React.CSSProperties}></div>
      </section>
      
      <div id="membresias">
        <div className="container-membresias">
          <h2>Selecciona tu Plan</h2>


            <div className="cards">

                <div className="card">
                    <div className="card-body">
                    <h2>Standard</h2>
                    <h3>S/.10.00 <span>/mes</span></h3>
                    <ul>
                        <li>Sin publicidad</li>
                        <li>Acceso a todo el catálogo</li>
                        <li>Descarga en 720px</li>
                    </ul>
                    <div className="boton-plan">
                        <a href="#/" id="button">Empezar</a>
                    </div>
                    </div>
                </div>

                    <div className="card">
                    <div className="card-body">
                    <h2>Familiar</h2>
                    <h3>S/.29.00 <span>/mes</span></h3>
                    <ul>
                        <li>Sin publicidad</li>
                        <li>Acceso a todo el catálogo</li>
                        <li>Descarga en 1080px</li>
                    </ul>
                    <div className="boton-plan">
                        <a href="#/" id="button">Empezar</a>
                    </div>
                    </div>
                </div>

            
            </div>


        </div>
      </div>
    </>
  );
};

export default Subscriptions;
