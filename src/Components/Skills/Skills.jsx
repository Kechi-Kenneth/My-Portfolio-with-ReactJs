import React from "react";
import { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import SkillCard from "./SkillCard/SkillCard";
import SkillsInfoCard from "./SkillsInfoCard/SkillsInfoCard";
import { Element } from "react-scroll";

const Skills = () => {

const [selectedSkill, setSelectedSkill] = useState (SKILLS[0]);

const handleSelectedSkill = (data) => {
  setSelectedSkill(data);
};

  return (
    <Element name="skills">
    <section className="skills-container">
      <h4> Technical Proficiency </h4>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => (
            <SkillCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() =>{
                handleSelectedSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
           <SkillsInfoCard
           heading={selectedSkill.title}
           skills={selectedSkill.skills}
           />
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Skills;
