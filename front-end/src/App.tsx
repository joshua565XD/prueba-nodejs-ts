import RegistroAlumno from './pages/RegistroAlumno';
import ListarAlumnos from './pages/ListarAlumnos';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Sistema de Alumnos</h1>
      <RegistroAlumno />
      <ListarAlumnos />
    </div>
  );
}

export default App;
