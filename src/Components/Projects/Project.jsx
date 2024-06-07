import React from 'react';
import './Project.css';
import { PROJECTS } from '../../utils/project';
import ProjectCard from './ProjectCard/ProjectCard';


const Project = () => {
  return (
    <section>
      <h2>
        PROJECTS
      </h2>
      <div className='project-container'>
           
   {PROJECTS.map((item) => (
  <ProjectCard  iconUrl={item.icon}
   key={item.title}
    details={item} />
))} 
      </div>
      <div className="project-content">
        fetch Github repositories 
        <button>Click Here </button>
      </div>
    </section>
  )
}

export default Project;
