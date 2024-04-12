import React, { useState } from 'react';
import backgroundImg from './img/settings.jpg';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [saveClicked, setSaveClicked] = useState(false);

  const handleChangeUsername = () => {
    if (!validateUsername(username)) {
      setErrorMessage('Username can only contain alphabets');
      return;
    }
    setSuccessMessage('Username changed successfully');
    setSaveClicked(true);
  };

  const handleChangeEmail = () => {
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format');
      return;
    }
    setSuccessMessage('Email changed successfully');
    setSaveClicked(true);
  };

  const handleChangePassword = () => {
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }
    setSuccessMessage('Password changed successfully');
    setSaveClicked(true);
  };

  const closePopup = () => {
    setSuccessMessage('');
    setErrorMessage('');
    setSaveClicked(false);
  };

  const settingsPageStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z]+$/;
    return usernameRegex.test(username);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="settings-container" style={settingsPageStyle}>
      <h2>Settings</h2>
      {successMessage && saveClicked && (
        <div className="popup success-popup">
          <p>{successMessage}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
      {errorMessage && (
        <div className="popup error-popup">
          <p>{errorMessage}</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
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
    </div>
  );
};

export default Settings;
