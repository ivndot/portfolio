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
      <h2 className="landing__role">Software Developer</h2>
      <div className="landing__content">
        <div className="landing__planet-container">
          <SpaceshipLanding className="spaceship--animation" />
          <PlanetLanding className="planet--animation" />
        </div>
        <div className="landing__greetings">
          <h3 className="greetings__title"> Hi everyone!</h3>
          <p className="greetings__description">
            I&rsquo;m a developer and cybersecurity enthusiast. I build things
            with javascript and java, checkout my projects below and visit my&nbsp;
            <a
              href="https://blog-ivndot.netlify.app/"
              className="highlight"
              target="_blank"
              rel="noreferrer noopener"
            >
              blog
            </a>
            &nbsp;where I write walkthroughs of TryHackMe and HackTheBox machines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Landing);
