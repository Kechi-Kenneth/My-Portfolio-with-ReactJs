import React, { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/workdata";
import './WorkExperience.css';
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";


const WorkExperience = () => {
const sliderRef = useRef();

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
    breakpoint:760,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
],
};

  return (
   <section className="experience-container">
  <h4>Work Experience </h4>
  
  <div className="experience-content">
<Slider Ref={sliderRef} {...settings}>
{WORK_EXPERIENCE.map((item) => (
  <ExperienceCard key={item.title} details={item} />
))}
</Slider>
  </div>
   </section>
  )
}



export default WorkExperience;