import React, { useState } from "react";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "./../constants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app_navbar_logo">
        <img src={images.logo} alt="Logo" />
      </div>
      <div>
        <ul className="app__navbar-links">
          {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => settoggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300,0] }}
            transtion={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => settoggle(true)} />
            <ul>
              {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => settoggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
