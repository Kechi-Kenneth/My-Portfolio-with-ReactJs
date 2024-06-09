import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, iconUrl, details}) => {
  return (
    <div className="project-card">
      <h5>{details.title}</h5>
  <p>{details.role}</p>
      <div className="project-icon">
      <div className='project-description'>{details.description}
    <div>  {details.technology} </div>
      </div>
        <img style={{height: 70}}  src={iconUrl} alt={title} />
      </div>
   
     <div className='project-duration'>{details.date}</div>
    </div>
  )
}

export default ProjectCard;
