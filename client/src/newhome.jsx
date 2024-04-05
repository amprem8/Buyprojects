import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import bgImage from './img/bg.jpg'; 
import pp1Image from './img/p1.jpg'; 
import pp2Image from './img/p2.jpg'; 
import qrCodeImage1 from './img/qr1.jpg'; // Import QR code image for project 1
import qrCodeImage2 from './img/qr2.jpg'; // Import QR code image for project 2
import Buy from './buy'; // Import the Buy component

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
      imageUrl: pp1Image,
      youtubeLink: 'https://www.youtube.com/shorts/V-OLZIpxtXY',
      originalPrice: 100,
      qrCodeImage: qrCodeImage1 // QR code image for project 1
    },
    {
      id: 2,
      title: 'Fresh Food',
      description: 'Web app development of Fresh Food using HTML, CSS, JS with APIs.',
      department: 'IT',
      imageUrl: pp2Image,
      youtubeLink: 'https://www.youtube.com/shorts/V-OLZIpxtXY',
      originalPrice: 150,
      qrCodeImage: qrCodeImage2 // QR code image for project 2
    },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  const handleBuyProject = (project) => {
    navigate(`/buy/${project.id}`, { state: { project } }); // Pass project data as state
  };
  

  const handleViewOutput = (youtubeLink) => {
    window.open(youtubeLink, '_blank');
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
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={containerStyle}>
      <div className="container-dashboard">
        <div className="bt">
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
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
                    <div>
                      <button
                        className="btn btn-primary mt-2"
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          borderRadius: '20px',
                          padding: '10px 20px',
                          border: 'none',
                          marginRight: '10px',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleBuyProject(project)}
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
                        onClick={() => handleViewOutput(project.youtubeLink)}
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
      <footer style={footerStyle}>
        <div>Contact us at <a href="mailto:amprem8@gmail.com">amprem8@gmail.com</a> for any inquiries</div>
      </footer>
    </div>
  );
};

export default NewHome;
