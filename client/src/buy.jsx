import React from 'react';
import { useLocation } from 'react-router-dom';

const Buy = () => {
  const location = useLocation();
  const { project } = location.state;

  return (
    <div>
      <h2>{project.title}</h2>
      <p>Original Price: ${project.originalPrice}</p>
      <img src={project.qrCodeImage} alt={`QR Code for ${project.title}`} style={{ width: '200px' }} />
    </div>
  );
};

export default Buy;
