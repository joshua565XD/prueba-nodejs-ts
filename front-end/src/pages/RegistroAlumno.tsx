import React, { useState } from 'react';

const RegistroAlumno = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    fechaNacimiento: '',
    nombrePadre: '',
    nombreMadre: '',
    grado: '',
    seccion: '',
    fechaIngreso: '',
  });

  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje('');
    setError('');

    // Validar campos simples
    if (!formData.nombre || !formData.email || !formData.grado) {
      setError('Por favor llena los campos obligatorios: nombre, email y grado');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/crear-alumno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin:secret123'),
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Error al crear alumno');
      }
      const data = await response.json();
      setMensaje(`Alumno creado con ID: ${data._id}`);

      setFormData({
        nombre: '',
        email: '',
        fechaNacimiento: '',
        nombrePadre: '',
        nombreMadre: '',
        grado: '',
        seccion: '',
        fechaIngreso: '',
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      maxWidth: 480,
      margin: '2rem auto',
      padding: '2rem',
      borderRadius: 15,
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Registrar Nuevo Alumno</h2>

      {mensaje && <p style={{ color: 'green', textAlign: 'center' }}>{mensaje}</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre completo *"
          style={inputStyle}
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          style={inputStyle}
          required
        />
        <input
          name="fechaNacimiento"
          type="date"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          placeholder="Fecha de nacimiento"
          style={inputStyle}
        />
        <input
          name="nombrePadre"
          value={formData.nombrePadre}
          onChange={handleChange}
          placeholder="Nombre del padre"
          style={inputStyle}
        />
        <input
          name="nombreMadre"
          value={formData.nombreMadre}
          onChange={handleChange}
          placeholder="Nombre de la madre"
          style={inputStyle}
        />
        <input
          name="grado"
          value={formData.grado}
          onChange={handleChange}
          placeholder="Grado *"
          style={inputStyle}
          required
        />
        <input
          name="seccion"
          value={formData.seccion}
          onChange={handleChange}
          placeholder="Sección"
          style={inputStyle}
        />
        <input
          name="fechaIngreso"
          type="date"
          value={formData.fechaIngreso}
          onChange={handleChange}
          placeholder="Fecha de ingreso"
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            ...buttonStyle,
            width: '100%',
            marginTop: '1rem',
            backgroundColor: '#1976d2',
          }}
        >
          Registrar Alumno
        </button>
      </form>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  marginBottom: 14,
  borderRadius: 8,
  border: '1px solid #ccc',
  fontSize: 16,
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const buttonStyle: React.CSSProperties = {
  color: 'white',
  border: 'none',
  padding: '12px 20px',
  borderRadius: 8,
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: 18,
};

export default RegistroAlumno;
