import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Interfaces and Experiences that are seamless</h2>
        <p>
          Passionate Frontend Developer | | Bringing Ideas into life | |
          Introducing Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="public\Assets\icons8-react-js-40.png" alt="" />
          </div>

          <img className="my-image" src="public\Assets\kaypluz img.jpg" alt="" />
        </div>
<div> 
<div className="tech-icon">
          <img src="src\assets\icons8-html5-64.png" />
        </div>
<div className="tech-icon">
          <img src="src\assets\icons8-css3-48.png" />
        </div>
        <div className="tech-icon">
          <img src="src\assets\icons8-javascript-48.png" />
        </div>
        <div className="tech-icon">
          <img src="src\assets\icons8-typescript-32.png" />
        </div>

</div>
      </div>
    </section>
  );
};

export default Hero;
