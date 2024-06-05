import React from 'react';
import './Education.css';
import { EDUCATION } from '../../utils/education';
import EducationCard from './EducationCard/EducationCard';
import { Element } from 'react-scroll';

const Education = () => {
  return (
   <Element name="education">
   <section>
<div className="education-container">
   <h3>Education</h3>
   
   {EDUCATION.map((item) => (
  <EducationCard  iconUrl={item.icon}
   key={item.title}
    details={item} />
))} 

   <div className='education-content'>
    
   </div>

</div>

   </section>
   </Element>
  )
}

export default Education;
