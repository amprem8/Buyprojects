import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCategoryModal from './AddCategoryModel'; 
import './Dashboard.css';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileUpload = () => {
    console.log("Selected file:", selectedFile);
  };

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
        {selectedFile && (
          <div>
            <h3>Selected File:</h3>
            <p>Name: {selectedFile.name}</p>
            <p>Type: {selectedFile.type}</p>
            <p>Size: {selectedFile.size} bytes</p>
            {/* Display the uploaded file */}
            <div>
              <strong>Preview:</strong>
              <img src={URL.createObjectURL(selectedFile)} alt="Uploaded File" style={{ maxWidth: '100%' }} />
            </div>
          </div>
        )}
      </div>
      <AddCategoryModal /> 
    </div>
  );
};

export default Dashboard;
