import React from "react";
import { useState } from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="nav-logo" src="" alt=""></img>
          <ul>
            <li>
            <Link to="home" smooth={true} duration={500}>
              <a  className="menu-item">Home</a>
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
            <Link to="projects" smooth={true} duration={500}>
            <button className="contact-me" onClick={() => {}}>
               Projects
            </button>
            </Link>
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              <img
                className="menu-icon"
                src="/menu-symbol-of-three-parallel-lines-svgrepo-com.png"
                alt=""
              />
              {openMenu}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
