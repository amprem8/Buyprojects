// Output.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Output = () => {
  const { id } = useParams(); // Get the project ID from URL parameter
  const [videoUrl, setVideoUrl] = useState('');

  // Simulated function to fetch video URL based on project ID
  const fetchVideoUrl = (projectId) => {
    // Simulated data for demonstration purposes
    const videoData = {
      1: 'video_for_project_1.mp4',
      2: 'video_for_project_2.mp4',
      // Add more project IDs and corresponding video URLs as needed
    };

    // Check if the project ID exists in the video data
    if (projectId in videoData) {
      setVideoUrl(videoData[projectId]);
    } else {
      setVideoUrl(null);
    }
  };

  useEffect(() => {
    fetchVideoUrl(id);
  }, [id]);

  return (
    <div>
      <h2>Output Video for Project {id}</h2>
      {videoUrl ? (
        <video src={videoUrl} controls />
      ) : (
        <p>No video available for this project</p>
      )}
    </div>
  );
};

export default Output;
