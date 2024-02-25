import React, { useState } from 'react';
import axios from 'axios';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    // Perform logout action, e.g., clear session, remove tokens, etc.
    // Then navigate to the login page
    navigate('/login');
  };

  const handleChangeUsername = async () => {
    // Regular expression for alphanumeric characters only
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;

    // Check if username matches the regex pattern
    if (!alphanumericRegex.test(username)) {
      alert("Username should contain only alphanumeric characters.");
      return;
    }

    try {
      await axios.put('/api/user', { username });
      alert("Username changed successfully");
    } catch (error) {
      console.error('Error updating username:', error);
      alert("Failed to change username");
    }
  };

  const handleChangeEmail = async () => {
    // Regular expression for email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email matches the regex pattern
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      await axios.put('/api/user/email', { email });
      alert("Email changed successfully");
    } catch (error) {
      console.error('Error updating email:', error);
      alert("Failed to change email");
    }
  };

  const handleChangePassword = async () => {
    // Regular expression for password strength (minimum 6 characters)
    const passwordRegex = /^.{6,}$/;

    // Check if password matches the regex pattern
    if (!passwordRegex.test(password)) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    try {
      await axios.put('/api/user/password', { password });
      alert("Password changed successfully");
    } catch (error) {
      console.error('Error updating password:', error);
      alert("Failed to change password");
    }
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div>
        <label htmlFor="username">Change Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleChangeUsername}>Save</button>
      </div>
      <div>
        <label htmlFor="email">Change Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleChangeEmail}>Save</button>
      </div>
      <div>
        <label htmlFor="password">Change Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Save</button>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Settings;
