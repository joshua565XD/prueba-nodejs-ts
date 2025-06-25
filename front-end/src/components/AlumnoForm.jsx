// src/components/AlumnoForm.jsx
import { useState } from 'react';

const AlumnoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    fechaNacimiento: '',
    nombrePadre: '',
    nombreMadre: '',
    grado: '',
    seccion: '',
    fechaIngreso: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((field) => (
        <div key={field} style={{ marginBottom: '10px' }}>
          <label>{field}</label><br />
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">Registrar Alumno</button>
    </form>
  );
};

export default AlumnoForm;
