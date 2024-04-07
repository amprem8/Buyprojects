import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import NewHome from './newhome';
import Profile from './Profile';
import Settings from './Settings';
import Buy from './buy';
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/newhome" element={<NewHome />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/buy/:projectId" element={<Buy />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
