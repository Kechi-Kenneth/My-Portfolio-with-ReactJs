import React from "react";
import "./Hero.css";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="home">
    <section className="hero-container">
      <div className="hero-content">
        <h2 className="fade-in-out">Building Digital Interfaces and Experiences that are seamless</h2>
        <p className="slide-in-left">
          Passionate Frontend Developer | | Bringing Ideas into life | |
          Introducing Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="/icons8-react-js-40.png" alt="" />
          </div>

          <img className="my-image" src="/kaypluz img.jpg" alt="" />
        </div>
<div> 
<div className="tech-icon">
          <img src="/icons8-html5-64.png" />
        </div>
<div className="tech-icon">
          <img src="/icons8-css3-48.png" />
        </div>
        <div className="tech-icon">
          <img src="/icons8-javascript-48.png" />
        </div>
        <div className="tech-icon">
          <img src="/icons8-typescript-32.png" />
        </div>

</div>
      </div>
    </section>
    </Element>
  );
};

export default Hero;
