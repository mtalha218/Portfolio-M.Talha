import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import resume from "../../Resume-MuhammadTalha.pdf";
import profilePic from "../../Images/ProfilePic.png"
import "./About.css";
function About() {
  return (
    <div className="about-container">
      <div className="about-left">
        <img className="profilePic" src={profilePic} alt="profile-pic"></img>
      </div>
      <div className="about-right">
        <p className="general-heading">ABOUT ME</p>
        <p className="about-header">
          I'm a professional software developer from Islamabad, Pakistan.
        </p>
        <p className="about-detail">
          I develop high-end web applications for your businesses
        </p>
        <div className="resume-div">
          <a href={resume} target="_blank" className="btn-primary">
            <AiOutlineDownload className="down" />
            My Resume
          </a>
          <a
            href="https://github.com/mtalha-dab"
            target="_blank"
            className="git"
          >
            View My Github
          </a>
        </div>{" "}
      </div>
    </div>
  );
}

export default About;
