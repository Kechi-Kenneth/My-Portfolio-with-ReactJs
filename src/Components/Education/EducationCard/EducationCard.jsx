import React from 'react';
import './EducationCard.css';

const EducationCard = ({ title, iconUrl, details}) => {
  return (
    <div className="education-card">
      <h5>{details.title}</h5>

      <div className="education-icon">
        <img style={{height: 50}}  src={iconUrl} alt={title} />
      </div>
      <div className='education-school'>{details.School}</div>
     <div className='education-duration'>{details.date}</div>
    </div>
  )
}

export default EducationCard;
