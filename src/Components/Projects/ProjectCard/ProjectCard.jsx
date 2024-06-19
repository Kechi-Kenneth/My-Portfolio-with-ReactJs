import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, iconUrl, details}) => {
  return (
   <div className="project-card">
    <div className='project-icon'>
      <img src='' /> icon
    </div>
    <div className='project-content'>
    <h5>{details.title} <span><img  className='project-symbol' src='./icons8-forward-arrow-50.png'/></span></h5>
    <p className='project-date'>{details.date}</p>
    <div className='project-description'>{details.description}</div>
    <p>{details.role}</p>
    <div> {details.technology} </div>
    </div>
   </div>
  )
}

export default ProjectCard;

