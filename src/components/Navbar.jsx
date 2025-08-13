// src/components/Navbar.jsx
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  // 3. Utilizar useContext para mostrar información del usuario en la navbar
  const { user, logout, isAuthenticated } = useAuth();
//isAuthenticated → función que devuelve true si hay sesión iniciada
//<div className="nav-menu"> Menú de navegación condicionado por autenticación
// {isAuthenticated() ? (
//    ...
//  ) : (
//    ...
//  )}
//</div>

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>My App</h1>
        </div>

        <div className="nav-menu">
          {isAuthenticated() ? (
            <div className="nav-user">
              <div className="nav-user-info">
                <img 
                  src={user.picture} 
                  alt={`${user.name} profile`}
                  className="nav-avatar"
                />
                <div className="nav-user-details">
                  <span className="nav-username">{user.given_name}</span>
                  <span className="nav-email">{user.email}</span>
                </div>
              </div>
              <button className="nav-logout" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="nav-guest">
              <span>Not signed in</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;