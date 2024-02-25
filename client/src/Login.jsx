// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from "./img/download.jpg"; 
import './login.css'; 

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/login', { email: email, password: password })
      .then((result) => {
        console.log(result);
        if (result.data === 'Success') {
          setIsAuthenticated(true); // Update authentication status
          navigate('/home'); // Redirect to the home page
        } else {
          setShowError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowError(true);
      });
  };

  const loginPageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const closeErrorPopup = () => {
    setShowError(false);
  };
  
  return (
    <div>
      {showError && (
        <div className="error-popup">
          <p>Invalid credentials. Please try again.</p>
          <button onClick={closeErrorPopup}>Close</button>
        </div>
      )}
      <div style={loginPageStyle} className="login-container">
        <div className="bg-white p-3 rounded w-25">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0" id="loginButton">
              Login
            </button>
          </form>
          <p>Don't have an account?</p>
          <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Sign up
          </Link>
        </div>
      </div>
      <div class="visme_d" data-title="Custom Form" data-url="pvmw16ge-custom-form?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="21253"></div><script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script></div>
  );
};

export default Login;
