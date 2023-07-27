import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="container-hero">
      <div className="hero-left">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            delay: 0.5,
          }}
          className="hero-heading"
        >
          <span className="colorName">Muhammad Talha</span>
          <br /> Your Next Creative Developer.
        </motion.h1>
      </div>

      <div className="scroll">
        <div className="mouse-body">
          <div className="mouse-scroll"></div>
        </div>
        <p style={{  fontSize: "var(--ft-small)", color: "var(--clr-bg)", fontWeight: 200 }}>Scroll Down</p>
      </div>
    </div>
  );
}

export default Hero;
