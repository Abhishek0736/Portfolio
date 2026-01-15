import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="theme-root overflow-hidden">
       {/* <audio controls>
        <source src="/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio> */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
