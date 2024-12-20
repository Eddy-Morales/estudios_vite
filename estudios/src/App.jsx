import React from 'react';
import DatosPersonales from './components/DatosPersonales';
import EstudiosRealizados from './components/EstudiosRealizados';
import Herramientas from './components/Herramientas';
import GaleriaDeportes from './components/GaleriaDeportes';
import './App.css';
import FormularioRegistro from './components/FormularioRegistro';

function App() {
  return (
    <div>
      <h1>Mi Proyecto React</h1>
      <DatosPersonales />
      <EstudiosRealizados />
      <Herramientas />
      <GaleriaDeportes />
      <h2>formulario</h2>
      <FormularioRegistro />
    </div>
  );
}

export default App;

