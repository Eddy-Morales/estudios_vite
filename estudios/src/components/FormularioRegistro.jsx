import React, { useState } from "react";
import "./FormularioRegistro.css"; 

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [materias, setMaterias] = useState([{ nombre: "", fecha: "" }]);
  const [mensaje, setMensaje] = useState("");

  const handleMateriaChange = (index, field, value) => {
    const nuevasMaterias = [...materias];
    nuevasMaterias[index][field] = value;
    setMaterias(nuevasMaterias);
  };

  const agregarMateria = () => {
    setMaterias([...materias, { nombre: "", fecha: "" }]);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!nombre || !correo || materias.some((m) => !m.nombre || !m.fecha)) {
      alert("Por favor, llena todos los campos.");
      return;
    }

    const resumenMaterias = materias
      .map((m) => `- ${m.nombre} (Fecha: ${m.fecha})`)
      .join("\n");

    setMensaje(`¡Gracias, ${nombre}! Has cursado:\n${resumenMaterias}`);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Formulario de Registro</h2>
      <form onSubmit={manejarEnvio} className="form-content">
        <div className="form-group">
          <label>Nombre completo:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <h3 className="form-subtitle">Materias Cursadas</h3>
          {materias.map((materia, index) => (
            <div key={index} className="materia-group">
              <input
                type="text"
                placeholder="Nombre de la materia"
                value={materia.nombre}
                onChange={(e) => handleMateriaChange(index, "nombre", e.target.value)}
                required
                className="form-input"
              />
              <input
                type="date"
                value={materia.fecha}
                onChange={(e) => handleMateriaChange(index, "fecha", e.target.value)}
                required
                className="form-input"
              />
            </div>
          ))}
          <button type="button" onClick={agregarMateria} className="form-button">
            Agregar otra materia
          </button>
        </div>
        <button type="submit" className="form-button">
          Enviar
        </button>
      </form>
      {mensaje && <p className="form-message">{mensaje}</p>}
    </div>
  );
};

export default FormularioRegistro;