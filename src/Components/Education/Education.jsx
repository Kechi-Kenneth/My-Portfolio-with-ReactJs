import React from 'react';
import './Education.css';
import { EDUCATION } from '../../utils/education';
import EducationCard from './EducationCard/EducationCard';

const Education = () => {
  return (
   <section>
<div className="education-container">
   <h3>Education</h3>
   
   {EDUCATION.map((item) => (
  <EducationCard key={item.title} details={item} />
))}

   <div className='education-content'>
    
   </div>

</div>

   </section>
  )
}

export default Education
