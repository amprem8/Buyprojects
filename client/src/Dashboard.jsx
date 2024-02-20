// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file for dashboard styles
import Chart from './Chart.jsx'; // Import the Chart component

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          Dashboard
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
          {/* Add more sidebar links with icons as needed */}
        </ul>
      </div>
      <div className="main-content">
        <h1>Welcome to the Dashboard!</h1>
        <Chart /> {/* Include the Chart component */}
        {/* Add other content here */}
      </div>
    </div>
  );
};

export default Dashboard;
