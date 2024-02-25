import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Profile from './profile';
import Settings from './settings';
const Dashboard = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/newhome'); // Navigate to the new homepage
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          Dashboard
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/newhome">Home</Link></li> {/* Use button and onClick to navigate */}
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
          {/* Add more sidebar links with icons as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
