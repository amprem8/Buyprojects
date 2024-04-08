import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file
import image from "./img/dashboard.jpg"; 
import axios from 'axios';
const Dashboard = () => {
  const [projectDetails, setProjectDetails] = useState({
    projectName: '',
    domain: '',
    department: '',
    price: '',
    videoLink: '',
    selectedFolder: '',
    sampleImage: ''
  });


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProjectDetails(prevState => ({
      ...prevState,
      [name]: files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="dashboard-container" style={{ backgroundImage: `url(${image})` }}>
      <div className="sidebar">
        <div className="sidebar-header">
          Dashboard
        </div>
        <ul className="sidebar-menu">
          <li><Link to="/newhome">Home</Link></li>
          <br></br>
          <li><Link to="/dashboard/profile">Profile</Link></li>
          <br></br>
          <li><Link to="/dashboard/settings">Settings</Link></li>
          <br></br>
        </ul>
      </div>
      <div className="project-details-form" style={{ color: 'white' }}>
        <h2>Enter Project Details</h2>
        <form onSubmit={handleSubmit}>
          &nbsp;&nbsp;&nbsp;
          <input type="text" name="projectName" placeholder="Project Name" value={projectDetails.projectName} onChange={handleChange} />
          &nbsp;&nbsp;&nbsp;
          <input type="text" name="domain" placeholder="Domain" value={projectDetails.domain} onChange={handleChange} />
          &nbsp;&nbsp;&nbsp;
          <input type="text" name="department" placeholder="Department" value={projectDetails.department} onChange={handleChange} />
          &nbsp;&nbsp;&nbsp;
          <input type="text" name="price" placeholder="Price (INR)" value={projectDetails.price} onChange={handleChange} />
          &nbsp;&nbsp;&nbsp;
          <input type="text" name="videoLink" placeholder="Output Video Link" value={projectDetails.videoLink} onChange={handleChange} /><br/>
          <br></br>
          <input type="file" name="selectedFolder" onChange={handleFileChange} webkitdirectory="true" />
          <input type="file" name="sampleImage" accept="image/*" onChange={handleFileChange} />
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default Dashboard;
