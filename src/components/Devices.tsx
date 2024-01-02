import React from 'react';
import "../styles/Devices.css";

const Devices: React.FC = () => {
  return (
    <div id="usabilidad">
      <div id="container-usabilidad">
        <h1>¡Conéctate mediante todos tus dispositivos!</h1>
        <p className='usability-desc'>Disfrútalo en tu pantalla favorita, TV, tableta, computadora, teléfono y otros. Además, puedes ver en cuatro pantallas en simultáneo.</p>

        <div className="img-text">
          <img src="/assets/usabilidad.png" alt="Usabilidad" />

            <div className="tipos-uso">

                <div className="columna">
                    <div className="elemento">
                        <img src="/assets/pc-icon.png" alt="Computadora" />
                        <p>PC / Lap</p>
                    </div>

                    <div className="elemento">
                        <img src="/assets/console-icon.png" alt="Consola" />
                        <p>Consola</p>
                    </div>                  
                </div>

                <div className="columna">
                    <div className="elemento">
                        <img src="/assets/phone-icon.png" alt="Movil" />
                        <p>Movil</p>
                    </div>

                    <div className="elemento">
                        <img src="/assets/tv-icon.png" alt="Televisor" />
                        <p>Televisor</p>
                    </div>
                </div>

            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Devices;
