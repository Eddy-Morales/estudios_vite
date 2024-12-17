import React from 'react';

// Importar imágenes desde src
import deporte3 from '../assets/deporte3.jpg';
import deporte4 from '../assets/deporte4.jpg';

const GaleriaDeportes = () => {
  return (
    <div>
      <h2>Deportes Favoritos</h2>
      <div className="galeria">
        <div className="imagen">
          <img src="/deporte1.jpg" alt="Deporte 1" />
          <p>Fútbol</p>
        </div>
        <div className="imagen">
          <img src="/deporte2.jpg" alt="Deporte 2" />
          <p>Ecuavolley</p>
        </div>
        <div className="imagen">
          <img src={deporte3} alt="Deporte 3" />
          <p>Basket</p>
        </div>
        <div className="imagen">
          <img src={deporte4} alt="Deporte 4" />
          <p>Levantamiento</p>
        </div>
      </div>
    </div>
  );
};

export default GaleriaDeportes;
