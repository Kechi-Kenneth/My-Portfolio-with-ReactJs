import React, { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/workdata";
import './WorkExperience.css';
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";


const WorkExperience = () => {
const sliderRef = useRef();

const settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
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
    <div className="arrow-right">
      <span class="material-symbols-outlined"><img src="./src/assets/icons8-right-button-30.png"/></span>
    </div>
    <div className="arrow-left">
    <span class="material-symbols-outlined"><img src="./src/assets/icons8-left-30.png"/></span>
    </div>
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