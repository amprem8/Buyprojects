import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const NewHome = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState("John Doe");

  const isAuthenticated = true;

  const projects = [
    {
      id: 1,
      title: 'Project A',
      description: 'A project related to CSE department.',
      domain: 'Fullstack',
    },
    {
      id: 2,
      title: 'Project B',
      description: 'A project related to IT department.',
      department: 'IT',
    },
    {
      id: 3,
      title: 'Project C',
      description: 'A project related to AIDS department.',
      department: 'AIDS',
    },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const loginPageStyle = {
    backgroundImage: 'url("dashboard.jpg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div>
      {/* Custom Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/newhome">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex" > 
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <div style={loginPageStyle} className="container-dashboard">
        <div className="bt">
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <div className="project-container">
                <div className="project-card">
                  <div className="project-title">{project.title}</div>
                  <div className="project-description">{project.description}</div>
                  <div className="project-department">Department: {project.department || 'N/A'}</div>
                  <Link to={`/buy/${project.id}`} className="btn btn-primary mt-2">
                    Buy Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div>
          <button className="btn btn-success mr-2">Add Project</button>
          <button className="btn btn-success mr-2">Update Project</button>
        </div>
      </footer>
    </div>
  );
};

export default NewHome;
