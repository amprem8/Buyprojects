import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileBackground from './img/profile.jpg'; // Import your profile background image

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout action, e.g., clear session, remove tokens, etc.
    // Then navigate to the login page
    navigate('/login');
  };

  return (
    <div className="profile-container" style={{ 
      backgroundImage: `url(${profileBackground})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh', // Ensures the background covers the entire viewport height
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white', // Text color
    }}>
      <h2>User Profile</h2>
      <p>Welcome to your profile page!</p>
      <p>This is where you can view and manage your account information.</p>
      {/* Add profile content related to project source code selling */}
      
      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
