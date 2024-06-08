import React, { useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../../Resume-MuhammadTalha.pdf";
import profilePic from "../../Images/ProfilePic.jpg";
import "./About.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function About() {
  const { inView, ref } = useInView({ threshold: 0.25 });
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
    id="about"
      ref={ref}
      className="about-container"
      initial={{ opacity: 0, y: 80 }}
      animate={animation}
    >
      <div className="about-left">
        <img className="profilePic" src={profilePic} alt="profile-pic"></img>
      </div>
      <div className="about-right">
        <p className="general-heading">ABOUT ME</p>
        <p className="about-header mt-6">
          I'm a professional software developer from Islamabad, Pakistan.
        </p>
        <p className="about-detail !mt-4">
          I develop high-end web applications for your businesses
        </p>
        <div className="resume-div !mt-6">
          <div>
          <a href={resume} target="_blank" className="btn-primary">
            <AiOutlineDownload className="down" />
            Resume
          </a>
          </div>
          <a
            href="https://github.com/mtalha218"
            target="_blank"
            className="git"
          >
            View My Github
          </a>
        </div>{" "}
      </div>
    </motion.div>
  );
}

export default About;
