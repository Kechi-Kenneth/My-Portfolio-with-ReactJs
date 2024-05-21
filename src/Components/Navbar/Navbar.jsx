import React from "react";
// import { useState } from "react";
import './Navbar.css'


const Navbar = () => {

  // const {openMenu, setOpenMenu} = useState(false);
  //  const toggleMenu = () => {
    // setOpenMenu(!openMenu);
  //  };

return (
 <>
{/* <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} /> */}

 <nav className="nav-wrapper">
   <div className="nav-content">
 <img className="nav-logo" src="" alt=""></img>
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
<button className="contact-me" onClick={() =>{}}>
    Hire Me 
    </button>

 </ul>


 <button class="menu-btn" onClick={""}>
  <span 
  class={"material-symbols-outlined"}
  style={{fontSize: "1.8rem"}}
  >
    <img className="menu-icon" src="src/assets/menu-symbol-of-three-parallel-lines-svgrepo-com.png" alt="" />
    {/* {openMenu ? "close" : "menu"} */}
  </span>
 </button>

   </div>

 </nav>
 </>
);
};


export default Navbar