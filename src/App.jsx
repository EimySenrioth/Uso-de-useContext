// src/App.jsx
//Trae el Provider y el hook de autenticación.
//Trae los componentes que se mostrarán según si el usuario está autenticado: 
// LoginForm y UserProfile.
//Navbar y App.css son solo parte de la interfaz visual.
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import './App.css';

// Componente interno que usa el contexto
const AppContent = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        {isAuthenticated() ? (
          <div>
            <h1 className="welcome-title">Welcome back!</h1>
            <UserProfile />
          </div>
        ) : (
          <LoginForm />
        )}
      </main>
    </div>
  );
};

// Componente App principal con el Provider
function App() {
  return (
    // 2. Envolver la aplicación con el Provider
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
//Envuelve toda la app con <AuthProvider>.
//Esto permite que todos los componentes hijos accedan al contexto de autenticación.
//AppContent es el que decide qué mostrar según el estado de login.


export default App;
