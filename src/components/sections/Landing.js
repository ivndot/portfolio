import React from "react";
// styles
import "../../css/Landing.css";
// icons
import PlanetLanding from "../icons/PlanetLanding";
import SpaceshipLanding from "../icons/SpaceshipLanding";

const Landing = () => {
  return (
    <section className="landing">
      <h1 className="landing__name">Ivan Alamos</h1>
      <h2 className="landing__role">Frontend developer</h2>
      <div className="landing__content">
        <div className="landing__planet-container">
          <SpaceshipLanding className="spaceship--animation" />
          <PlanetLanding className="planet--animation" />
        </div>
        <div className="landing__greetings">
          <h3 className="greetings__title"> Hi everyone!</h3>
          <p className="greetings__description">
            I build things with javascript and java, checkout my projects below or if you prefer, download my
            resume&nbsp;
            <a href="/files/Ivan_Alamos_CV.pdf" className="highlight" target="_blank" rel="noreferrer noopener">
              here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Landing);
