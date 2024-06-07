import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, iconUrl, details}) => {
  return (
    <div className="project-card">
      <h5>{details.title}</h5>

      <div className="project-icon">
        <img style={{height: 70}}  src={iconUrl} alt={title} />
      </div>
      <div className='project-school'>{details.School}</div>
     <div className='project-duration'>{details.date}</div>
    </div>
  )
}

export default ProjectCard;
