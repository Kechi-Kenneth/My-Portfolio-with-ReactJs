import React from "react";
import "./MobileNav.css";

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
              <a className="menu-item">Home</a>
            </li>

            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Education</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>

            <li>
              <a className="menu-item">Contact Me</a>
            </li>
          </ul>
          <button className="contact-me contact-again" onClick={() => {}}>
            Hire Me
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
