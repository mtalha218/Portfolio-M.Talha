import React, { useState, useEffect } from "react";
import "./Contact.css";
import gmail from "../../Images/gmail.svg";
import linkedin from "../../Images/linkedin.svg";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Contact() {
  const { inView, ref } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {

      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          ease: "easeInOut",
          duration: 2,
          delay: 0.5,
        },
      });
    }
  }, [inView]);

  const timeOut = new Date();

  const hour = timeOut.getHours();
  const min = timeOut.getMinutes();

  const [time, setTime] = useState(`${hour}:${min}`);

  const updateTime = () => {
    const timeOut = new Date();

    const hour = timeOut.getHours();
    const min = timeOut.getMinutes();

    setTime(`${hour}:${min}`);
  };

  setInterval(updateTime, 1000);

  return (
    <motion.div
      id="contact"
      ref={ref}
      className="contact-container"
      initial={{ opacity: 0, x: -80 }}
      animate={animation}
    >
      <p className="general-heading">CONTACT ME</p>

      <h1 className="contact-header mt-4">
        You can reach <br />
        me here
      </h1>
      <div className="contacts  mt-4">
        <div className="contact">
          <img src={gmail} alt="gmail" className="gmail-logo" />
          <p className="contact-text">mtalha218218@gmail.com</p>
        </div>
        <a
          href="https://www.linkedin.com/in/muhammad-talha-896465212/"
          target="_blank"
          className="contact"
        >
          <img src={linkedin} alt="linkedin" className="linkedin-logo" />
          <p className="contact-text">Muhammad Talha</p>
        </a>
      </div>
      <div className="time-div">
        <p className="local-time">Local Time</p>
        <p className="time">
          {time} {hour < 12 ? "AM" : "PM"} (GMT+5)
        </p>
      </div>
    </motion.div>
  );
}

export default Contact;
