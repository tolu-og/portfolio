import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
    <NavBar />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    </div>
  );
}

export default App;
