import React, { useState } from 'react';
import './GitHub.css';

function GitHub() {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMoreClick = () => {
    setShowDetails(true);
  };

  return (
    <div className="github-container">
      <h1>Welcome to GitHub Info Page!</h1>
      <p>GitHub is a platform for version control and collaboration. It lets you and others work together on projects from anywhere.</p>
      <ul>
        <li>Track changes in your code across versions.</li>
        <li>Collaborate with others in real time.</li>
        <li>Host and review code, manage projects, and build software.</li>
      </ul>
      {showDetails && (
        <div className="details-section">
          <p>GitHub enables teams to collaborate on projects and increase productivity with tools like issue tracking, pull requests, and GitHub Actions.</p>
          <p>Explore more about GitHub at <a href="https://github.com" target="_blank" rel="noopener noreferrer">their official site</a>.</p>
        </div>
      )}
    </div>
  );
}

export default GitHub;
