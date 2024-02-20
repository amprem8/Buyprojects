// App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './signup';
import Home from './Home';
import Dashboard from './Dashboard'; // Import the Dashboard component
import './App.css';

function NavBar({ isAuthenticated }) {
  return (
    <nav className="navbar">
      {!isAuthenticated && (
        <>
          <Link to="/login" className="navbar-link">Login</Link>
          <Link to="/register" className="navbar-link">Register</Link>
        </>
      )}
      {isAuthenticated && (
        <>
          <Link to="/dashboard" className="navbar-link">Dashboard</Link>
        </>
      )}
    </nav>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/register"
          element={<Signup />} />
        <Route
          path="/home"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        {/* Add a route for the root URL */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
