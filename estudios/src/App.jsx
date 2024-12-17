import React from 'react';
import DatosPersonales from './components/DatosPersonales';
import EstudiosRealizados from './components/EstudiosRealizados';
import Herramientas from './components/Herramientas';
import GaleriaDeportes from './components/GaleriaDeportes';
import './components/App.css';

function App() {
  return (
    <div>
      <h1>Mi Proyecto React</h1>
      <DatosPersonales />
      <EstudiosRealizados />
      <Herramientas />
      <GaleriaDeportes />
    </div>
  );
}

export default App;

