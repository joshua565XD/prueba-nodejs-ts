import React, { useEffect, useState } from 'react';

type Alumno = {
  _id: string;
  nombre: string;
  email: string;
  grado: string;
  seccion: string;
  fechaNacimiento: string;
};

const ListarAlumnos = () => {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const [error, setError] = useState('');
  const [editingAlumno, setEditingAlumno] = useState<Alumno | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    grado: '',
    seccion: '',
    fechaNacimiento: '',
  });
  const [filtroGrado, setFiltroGrado] = useState('');

  // Función para cargar alumnos según filtro de grado
  const cargarAlumnos = async (grado: string) => {
    try {
      setError('');
      const url = grado ? `http://localhost:3000/consultar-alumno/${grado}` : `http://localhost:3000/consultar-alumno-todos`;
      const res = await fetch(url, {
        headers: {
          'Authorization': 'Basic ' + btoa('admin:secret123'),
        },
      });
      if (!res.ok) throw new Error('Error al obtener alumnos');
      const data = await res.json();
      setAlumnos(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  // Cargar alumnos cuando cambia el filtro de grado
  useEffect(() => {
    cargarAlumnos(filtroGrado);
  }, [filtroGrado]);

  const handleEditClick = (alumno: Alumno) => {
    setEditingAlumno(alumno);
    setFormData({
      nombre: alumno.nombre,
      email: alumno.email,
      grado: alumno.grado,
      seccion: alumno.seccion,
      fechaNacimiento: alumno.fechaNacimiento,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!editingAlumno) return;
    try {
      const res = await fetch(`http://localhost:3000/alumno/${editingAlumno._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin:secret123'),
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Error al actualizar');
      alert('Alumno actualizado');
      setEditingAlumno(null);
      cargarAlumnos(filtroGrado);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleCancel = () => setEditingAlumno(null);

  const handleDelete = async (alumno: Alumno) => {
    if (window.confirm(`¿Eliminar a ${alumno.nombre}?`)) {
      try {
        const res = await fetch(`http://localhost:3000/alumno/${alumno._id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': 'Basic ' + btoa('admin:secret123'),
          },
        });
        if (!res.ok) throw new Error('Error al eliminar');
        alert('Alumno eliminado');
        cargarAlumnos(filtroGrado);
      } catch (err: any) {
        alert(err.message);
      }
    }
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: '2rem auto',
      padding: '2rem',
      borderRadius: 15,
      boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      backgroundColor: '#fefefe',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Lista de Alumnos</h2>

      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <label htmlFor="grado" style={{ marginRight: 8, fontWeight: 'bold' }}>Filtrar por Grado:</label>
        <input
          id="grado"
          type="text"
          value={filtroGrado}
          onChange={e => setFiltroGrado(e.target.value)}
          placeholder="Ejemplo: 3"
          style={{
            padding: '6px 10px',
            borderRadius: 6,
            border: '1px solid #ccc',
            width: 100,
            fontSize: 16,
          }}
        />
        <button
          onClick={() => cargarAlumnos(filtroGrado)}
          style={{
            marginLeft: 10,
            padding: '6px 12px',
            borderRadius: 6,
            border: 'none',
            backgroundColor: '#1976d2',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Buscar
        </button>
        <button
          onClick={() => { setFiltroGrado(''); cargarAlumnos(''); }}
          style={{
            marginLeft: 10,
            padding: '6px 12px',
            borderRadius: 6,
            border: 'none',
            backgroundColor: '#555',
            color: 'white',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Mostrar Todos
        </button>
      </div>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
        {alumnos.map(alumno => (
          <li key={alumno._id} style={{
            backgroundColor: '#fff',
            marginBottom: 12,
            padding: 15,
            borderRadius: 10,
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 16,
            color: '#555',
          }}>
            <div>
              <strong>{alumno.nombre}</strong> <br />
              <small>{alumno.email}</small> <br />
              <small>Grado: {alumno.grado} - Sección: {alumno.seccion}</small>
            </div>
            <div>
              <button
                style={{
                  marginRight: 10,
                  backgroundColor: '#1976d2',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onClick={() => handleEditClick(alumno)}
              >
                Editar
              </button>
              <button
                style={{
                  backgroundColor: '#d32f2f',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onClick={() => handleDelete(alumno)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editingAlumno && (
        <div style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: 15,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          color: '#333'
        }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Editar Alumno</h3>

          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            placeholder="Nombre"
            style={inputStyle}
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            type="email"
            style={inputStyle}
          />
          <input
            name="grado"
            value={formData.grado}
            onChange={handleInputChange}
            placeholder="Grado"
            style={inputStyle}
          />
          <input
            name="seccion"
            value={formData.seccion}
            onChange={handleInputChange}
            placeholder="Sección"
            style={inputStyle}
          />
          <input
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleInputChange}
            placeholder="Fecha Nacimiento (YYYY-MM-DD)"
            style={inputStyle}
          />

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button
              onClick={handleSave}
              style={{ ...buttonStyle, backgroundColor: '#1976d2', marginRight: 10 }}
            >
              Guardar
            </button>
            <button
              onClick={handleCancel}
              style={{ ...buttonStyle, backgroundColor: '#555' }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '8px 12px',
  marginBottom: 12,
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
  padding: '8px 20px',
  borderRadius: 8,
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: 16,
};

export default ListarAlumnos;
