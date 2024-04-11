import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import bgImage from './img/bg.jpg'; 
import pp1Image from './img/p1.jpg'; 
import pp2Image from './img/p2.jpg'; 
import pp3Image from './img/email.png'; 
import Buy from './buy';

const NewHome = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("John Doe");
  const [isHovered, setIsHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterOption, setFilterOption] = useState("name");
  const [filteredProjects, setFilteredProjects] = useState([]);
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
    },
    {
      id: 2,
      title: 'Fresh Food',
      description: 'Web app development of Fresh Food using HTML, CSS, JS with APIs.',
      department: 'IT',
      imageUrl: pp2Image,
      youtubeLink: 'https://www.youtube.com/shorts/V-OLZIpxtXY',
      originalPrice: 150,
    },
    {
      id: 3,
      title: 'Email Spam Detection',
      description: 'Spam detection using machine learning algorithms.',
      department: 'CSE',
      imageUrl: pp3Image,
      youtubeLink: 'https://youtu.be/u6eFNqXuA4w?si=iscJO8dInGqs-OC0',
      originalPrice: 200,
    }
  ];

  useEffect(() => {
    // Filter projects based on searchQuery and filterOption
    const filtered = projects.filter(project => {
      if (filterOption === "name") {
        return project.title.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (filterOption === "dept") {
        return project.department.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (filterOption === "price") {
        return project.originalPrice.toString().includes(searchQuery);
      }
    });
    setFilteredProjects(filtered);
  }, [searchQuery, filterOption]);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleBuyProject = (project) => {
    navigate(`/buy`, { state: { project } }); // Redirect to the buy page with project information
  };

  const handleViewOutput = (youtubeLink) => {
    window.open(youtubeLink, '_blank');
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterOptionChange = (event) => {
    setFilterOption(event.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

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
    overflowX: 'hidden',
  };

  return (
    <div style={containerStyle}>
      <div className="container-dashboard">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by title, department, or price..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{ width: '70%' }} // Make the search bar wider
          />
          <select onChange={handleFilterOptionChange} value={filterOption}>
            <option value="name">Name</option>
            <option value="dept">Department</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="row">
          {filteredProjects.map((project) => (
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
                    <img src={project.imageUrl} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
                  </div>
                  <div className="project-description-container">
                    <div className="project-title">{project.title}</div>
                    <div className="project-description">{project.description}</div>
                    <div className="project-department">Department: {project.department}</div>
                    <div className="project-price">Price: {project.originalPrice}₹</div>
                    <div className="project-buttons">
                      <button
                        className="btn btn-primary mt-2"
                        onClick={() => handleBuyProject(project)}
                      >
                        Buy Project
                      </button>
                      <button
                        className="btn btn-secondary mt-2"
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
        <div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div>Contact us at <a href="mailto:amprem8@gmail.com">amprem8@gmail.com</a> for any inquiries</div>
      </footer>
    </div>
  );
};

export default NewHome;
