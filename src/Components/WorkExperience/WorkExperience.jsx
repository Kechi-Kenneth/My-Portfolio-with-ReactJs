import React, { useRef } from "react";
import { WORK_EXPERIENCE } from "../../utils/workdata";
import './WorkExperience.css';
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Slider from "react-slick";


const WorkExperience = () => {
const sliderRef = useRef(false);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
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

const slideRight = () => {
  sliderRef.current.slickNext();
};

const slideLeft = () => {
  sliderRef.current.slickPrev();
};

  return (
   <section className="experience-container">
  <h4>Work Experience </h4>
  <Slider ref={sliderRef} {...settings}>
{WORK_EXPERIENCE.map((item) => (
  <ExperienceCard key={item.title} details={item} />
))}
</Slider>

  <div className="experience-content">
    <div className="arrow-right" onClick={slideRight}>
      <span class="material-symbols-outlined"><img src="./public/icons8-right-button-30.png"/></span>
    </div>
    <div className="arrow-left" onClick={slideLeft}>
    <span class="material-symbols-outlined"><img src="./public/icons8-left-30.png"/></span>
    </div>

  </div>
   </section>
  )
}



export default WorkExperience;