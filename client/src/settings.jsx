import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleChangeUsername = async () => {
    try {
      await axios.put('/api/user', { username });
      setSuccessMessage('Username changed successfully');
    } catch (error) {
      console.error('Error updating username:', error);
      setErrorMessage('Failed to change username');
    }
  };

  const handleChangeEmail = async () => {
    try {
      await axios.put('/api/user/email', { email });
      setSuccessMessage('Email changed successfully');
    } catch (error) {
      console.error('Error updating email:', error);
      setErrorMessage('Failed to change email');
    }
  };

  const handleChangePassword = async () => {
    try {
      await axios.put('/api/user/password', { password });
      setSuccessMessage('Password changed successfully');
    } catch (error) {
      console.error('Error updating password:', error);
      setErrorMessage('Failed to change password');
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
  };

  return (
    <div className={`settings-container ${darkMode ? 'dark-mode' : ''}`}>
      <h2>Settings</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div>
        <label htmlFor="username">Change Username:</label><br />
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <button onClick={handleChangeUsername}>Save</button><br /><br />
      </div>
      <div>
        <label htmlFor="email">Change Email:</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <button onClick={handleChangeEmail}>Save</button><br /><br />
      </div>
      <div>
        <label htmlFor="password">Change Password:</label><br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button onClick={handleChangePassword}>Save</button><br /><br />
      </div>
      {/* Toggle button for dark mode */}
      <div>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Settings;
