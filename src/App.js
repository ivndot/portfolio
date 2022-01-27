import React from "react";
//components
import SideBar from "./components/SideBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



const App = () => {
  return (
    <>
      <SideBar />
      <div className="container">
        <div className="content">
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
