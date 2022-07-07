import React, { useState, useEffect } from "react";
// styles
import "./css/App.css";
// icons
import MenuBarsIcon from "./components/icons/MenuBarsIcon";
//components
import Landing from "./components/sections/Landing";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

const App = () => {
  /**
   * =============================================================================
   *                                    STATE                                    *
   * =============================================================================
   */
  const [toggleMenuBtn, setToggleMenuBtn] = useState(false);

  /**
   * =============================================================================
   *                                    EFFECT                                   *
   * =============================================================================
   */
  useEffect(() => {
    if (toggleMenuBtn) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [toggleMenuBtn]);

  /**
   * =============================================================================
   *                                   RENDER APP                                *
   * =============================================================================
   */
  return (
    <>
      <Navbar />
      <div className="container">
        <MenuBarsIcon
          className="menuBars"
          width={25}
          height={25}
          fill="#0b132b"
          onClick={() => setToggleMenuBtn(!toggleMenuBtn)}
        />
        <Landing />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <SideBar handleToggle={setToggleMenuBtn} toggle={toggleMenuBtn} />
    </>
  );
};

export default App;
