import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

import rainbow1 from "./Images/rainbow1.png";
import rainbow2 from "./Images/rainbow2.png";

import Skills from "./Components/Skills/Skills";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <img className="rainbow1" src={rainbow1} alt="rainbow" />
        <img className="rainbow2" src={rainbow2} alt="rainbow" />
        <img className="rainbow3" src={rainbow1} alt="rainbow" />
      </div>
    </div>
  );
}

export default App;
