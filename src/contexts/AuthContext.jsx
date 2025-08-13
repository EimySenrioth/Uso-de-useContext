// src/contexts/AuthContext.jsx
//contenedor global donde guardarás el estado y funciones relacionadas 
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

// 2. Implementar el Provider y Guarda el estado del usuario.
//Proporciona funciones para iniciar y cerrar sesión.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
//user → Guarda la información del usuario autenticado (o null si no hay sesión).
//loading → Indica si se está procesando un inicio de sesión.
  // Simular datos de usuario de Google (en un proyecto real usarías Google OAuth)
  //simular un usuario de Google sin configurar OAuth real.
  //Al montar el componente, busca en localStorage si ya hay un usuario guardado (sesión persistente).
//Si lo encuentra, lo convierte de texto a objeto (JSON.parse) y lo coloca en user.

  const mockGoogleUser = {
    id: '123456789',
    name: 'Juan Pérez',
    email: 'juan.perez@gmail.com',
    picture: 'https://lh3.googleusercontent.com/a/ACg8ocK7mi7qN4eWBHaq0e_6LW5J3_1wXFfMvx2sBzXvkWl9=s96-c',
    given_name: 'Juan',
    family_name: 'Pérez'
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Función de login (simulando Google OAuth), Login simulado
  const login = async () => {
    setLoading(true);
    try {

      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Aquí hará la autenticación con Google
      setUser(mockGoogleUser);
      localStorage.setItem('user', JSON.stringify(mockGoogleUser));
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Función para verificar si está autenticado
  //Devuelve true si hay usuario autenticado, false si no.
//Crea un objeto con todo lo necesario para manejar autenticación y lo pasa a 
// AuthContext.Provider.
//Cualquier componente hijo podrá acceder a esto usando useAuth()
  const isAuthenticated = () => {
    return user !== null;
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};