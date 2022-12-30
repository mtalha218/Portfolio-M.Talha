import React, { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Work.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Work() {
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
    id="work"
      ref={ref}
      className="work-container"
      initial={{ opacity: 0, y: 80 }}
      animate={animation}
    >
      <div>
        <div className="work-top">
          <p className="general-heading">MY WORK</p>
          <p className="work-header">
            Some of the projects i've worked on recently
          </p>
        </div>
        <div className="works">
          <div className="work1">
            <div className="image"></div>
            <div className="work-detail">
              <p>The Opportunist (FYP)</p>
              <p>2022</p>
            </div>
            <div className="tools">
              <p>Tools: React.js, Node.js, Express.js, MongoDB...</p>
            </div>
          </div>
          <div className="work2">
            <div className="image"></div>
            <div className="work-detail">
              <p>Hedge</p>
              <p>2022- PRESENT</p>
            </div>
            <div className="tools" >
              <p style={{maxWidth:"80%"}}>Tools: React.js, Redux, REST Api's, TailwindCss, Git/Github, Bootstrap, Figma ...</p>
              <a
                className="link"
                href="https://www.the-hedge.io/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="work3">
            <div className="image"></div>
            <div className="work-detail">
              <p>Innreg</p>
              <p>2022- PRESENT</p>
            </div>
            <div className="tools" >
              <p style={{maxWidth:"80%"}}>Tools: React.js, HTML/CSS, Laravel, REST Api's, Git/Github, Bootstrap, Figma</p>
              <a
                className="link"
                href="https://www.innreg.com/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
          <div className="work4">
            <div className="image"></div>
            <div className="work-detail">
              <p>First Ecommerce App</p>
              <p>2020</p>
            </div>
            <div className="tools">
              <p>Tools: React.js, Bootstrap</p>
              <a
                className="link"
                href="https://talha-smartphone-online-shop.netlify.app/"
                target="_blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
