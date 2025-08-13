// src/components/UserProfile.jsx
import { useAuth } from '../contexts/AuthContext';

const UserProfile = () => {
  // 3. Utilizar useContext para acceder al estado del usuario
  const { user, logout } = useAuth();

  if (!user) return null; //Validación: si no hay usuario, no se muestra nada

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img 
              src={user.picture} 
              alt={`${user.name} profile`}
              className="avatar-image"
            />
            <div className="online-indicator"></div>
          </div>
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
            <span className="profile-badge">Google Account</span>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h3>Account Information</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>First Name</label>
                <span>{user.given_name}</span>
              </div>
              <div className="info-item">
                <label>Last Name</label>
                <span>{user.family_name}</span>
              </div>
              <div className="info-item">
                <label>User ID</label>
                <span className="user-id">{user.id}</span>
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button className="edit-profile-btn">
              Edit Profile
            </button>
            <button className="logout-btn" onClick={logout}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;