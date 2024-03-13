// NewHome.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import './output.jsx';
import bgImage from './img/bg.jpg'; // Import background image
import pp1Image from './img/p1.jpg'; // Import project preview image 1
import pp2Image from './img/p2.jpg'; // Import project preview image 2

const NewHome = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("John Doe");
  const [isHovered, setIsHovered] = useState(false);

  const isAuthenticated = true;

  const projects = [
    {
      id: 1,
      title: 'Image Recognition System using ML',
      description: 'Machine Learning with Python is used for recognizing the image of any living and non-living objects.',
      department: 'CSE',
      imageUrl: pp1Image, // Use imported preview image
    },
    {
      id: 2,
      title: 'Fresh Food',
      description: 'Web app development of Fresh Food using HTML, CSS, JS with APIs.',
      department: 'IT',
      imageUrl: pp2Image, // Use imported preview image
    },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const handleBuyProject = (projectId) => {
    navigate(`/buy/${projectId}`);
  };

  const handleViewOutput = (projectId) => {
    navigate(`/output/${projectId}`); // Navigate to the Output component with project ID as route parameter
  };

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    textAlign: 'center',
    marginTop: '20px',
  };

  const containerStyle = {
    backgroundImage: `url(${bgImage})`, // Apply the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={containerStyle}>
      {/* Main content */}
      <div className="container-dashboard">
        <div className="bt">
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
        {/* Projects Grid */}
        <div className="row">
          {projects.map((project) => (
            <div
              className="col-md-4 project-container"
              key={project.id}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`project-card ${isHovered ? 'hovered' : ''}`}
              >
                <div className="project-content">
                  <div className="project-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                  <div className="project-description-container">
                    <div className="project-title" style={{ color: 'white' }}>{project.title}</div>
                    <div className="project-description" style={{ color: 'white' }}>{project.description}</div>
                    <div className="project-department" style={{ color: 'white' }}>Department: {project.department || 'N/A'}</div>
                    {/* Replace Link with button */}
                    <div>
                      <button
                        className="btn btn-primary mt-2"
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          borderRadius: '20px',
                          padding: '10px 20px',
                          border: 'none',
                          marginRight: '10px', // Add margin-right for spacing
                          cursor: 'pointer',
                        }}
                        onClick={() => handleBuyProject(project.id)}
                      >
                        Buy Project
                      </button>
                      <button
                        className="btn btn-secondary mt-2"
                        style={{
                          backgroundColor: 'green',
                          color: 'white',
                          borderRadius: '20px',
                          padding: '10px 20px',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleViewOutput(project.id)} // Call handleViewOutput function
                      >
                        View Output
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={footerStyle}>
        <div>Contact us at <a href="mailto:amprem8@gmail.com">amprem8@gmail.com</a> for any inquiries</div>
      </footer>
    </div>
  );
};

export default NewHome;

