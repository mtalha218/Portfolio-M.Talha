import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import "./Skills.css";

function Skills() {
  const skills = [
    "React.js",
    "HTML5/CSS3",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "Bootstrap",
    "SCSS",
    "Redux",
    "AdobeXD/Figma",
    "Git/Github",
  ];
  const familiar = [
    "Material Ui",
    "Styled Components",
    "Tailwind CSS",
    "ReactNative",
    "Firebase",
    "NEXT.js",
  ];

  const { inView, ref } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {

      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          ease: "easeInOut",
          duration: 2,
          delay: 0.5,
        },
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="skills-container"
      initial={{ opacity: 0, y: 80 }}
      animate={animation}
    >

      <div className="skills-left">
      <p className="general-heading">MY SKILLS</p>

        <p className="skills-heading">Technologies I’ve been working with</p>
        <div className="techs">
          {skills.map((i) => {
            return <div className="tech">{i}</div>;
          })}
        </div>
      </div>
      <div className="skills-right">
        <p className="skills-detail">
          Here are a few technologies I'm familiar with
        </p>
        <div className="techs">
          {familiar.map((i) => {
            return <div className="tech">{i}</div>;
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
