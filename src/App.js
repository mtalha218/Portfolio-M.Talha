import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import rainbow from "./Images/Group13.svg"
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";

// import { motion } from "framer-motion";
// import square from "./Images/Group 1.svg";
// import tri from "./Images/Group 2.svg";
// import circle from "./Images/Group 3.svg";
// import cylinder1 from "./Images/Group 5.svg";

// import cone from "./Images/Cone.svg";
// import spiral from "./Images/Spiral.svg";
// import glass from "./Images/Glass.svg";
// import torus from "./Images/Torus.svg";
// import spiral2 from "./Images/Spiral-2.svg";
// import Shapeback from "./Components/ShapeBack/Shapeback";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <About/>
        <Skills/>
        <Work/>
        <Contact />
        {/* <img className="rainbow" src={rainbow} alt="rainbow" /> */}

      </div>
    </div>
  );
}

export default App;
