import React, { useState } from "react";
import logo from "../../Images/M.T.svg";
import "./Navbar.css";
import { motion } from "framer-motion";

function Navbar() {
  const [dot1, setDot1] = useState(true);
  const [dot2, setDot2] = useState(true);
  const [dot3, setDot3] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        delay: 0.5,
      }}
      className="container-navbar"
    >
      <div>
        <a href="/">
          <img className="logo" src={logo} alt="Logo" />
        </a>
      </div>

      <div className="link-line">
        <section className="link-group">
          <a
            href="#about"
            className="links"
            onMouseOut={() => setDot1(true)}
            onMouseOver={() => setDot1(false)}
          >
            About
          </a>
          <div className={dot1 ? "dot" : "dot-visible"}></div>
        </section>
        <section className="link-group">
          <a
            href="#skills"
            className="links"
            onMouseOut={() => setDot2(true)}
            onMouseOver={() => setDot2(false)}
          >
            Skills
          </a>
          <div className={dot2 ? "dot" : "dot-visible"}></div>
        </section>
        <section className="link-group">
          <a
            href="#work"
            className="links"
            onMouseOut={() => setDot3(true)}
            onMouseOver={() => setDot3(false)}
          >
            Work
          </a>
          <div className={dot3 ? "dot" : "dot-visible"}></div>
        </section>

        <section className="link-btn">
          
          <a href="#contact" className="btn-primary">Contact</a>
        </section>
      </div>
    </motion.div>
  );
}

export default Navbar;
