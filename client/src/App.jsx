import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import NewHome from './newhome';
import Settings from './settings';
import Buy from './buy'; // Import the Buy component
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
          <Link to="/newhome" className="navbar-link">New Home</Link>
        </>
      )}
    </nav>
  );
}

function PreLoginScreen() {
  return (
    <div className="pre-login-screen">
      <h1>InnoTrade HUB</h1>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      { !isAuthenticated && <PreLoginScreen /> }
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/newhome" element={<NewHome />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/buy" element={<Buy />} /> {/* Define route for /buy path */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
