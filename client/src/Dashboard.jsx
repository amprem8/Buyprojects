// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import AddCategoryModal from './AddCategoryModel'; 
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header">
          Dashboard
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/newhome">Home</Link></li>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
          <li><Link to="/dashboard/products">Products</Link></li>
          <li><Link to="/dashboard/categories">Categories</Link></li> 
          <li><Link to="/dashboard/orders">Orders</Link></li> 
        </ul>
      </div>
      <div className="dashboard-content">
        <h2>Dashboard Overview</h2>
        {/* Your dashboard content goes here */}
      </div>
      <AddCategoryModal /> 
    </div>
  );
};

export default Dashboard;
