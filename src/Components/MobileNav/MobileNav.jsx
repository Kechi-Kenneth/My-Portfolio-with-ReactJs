import React from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="close-tab">
             <button className="close-tab-button">
              <img className="close-tab-icon" src="./public/icons8-close-50.png"/>
             </button>
          </div>

          <img className="nav-logo" src="" alt="" />

          <ul>
            <li>
            <Link to="home" smooth={true} duration={500}>
              <a className="menu-item">Home</a>
              </Link>
            </li>


            <li>
            <Link to="skills" smooth={true} duration={500}>
              <a className="menu-item">Skills</a>
              </Link>
            </li>
            <li>
            <Link to="education" smooth={true} duration={500}>
              <a className="menu-item">Education</a>
              </Link>
            </li>
            <li>
            <Link to="work" smooth={true} duration={500}>
              <a className="menu-item">Work Experience</a>
              </Link>
            </li>

            <li>
            <Link to="contact" smooth={true} duration={500}>
              <a className="menu-item">Contact Me</a>
             </Link>
            </li>
          </ul>
          <Link to="contact" smooth={true} duration={500}>
          <button className="contact-me contact-again" onClick={() => {}}>
            Hire Me
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
