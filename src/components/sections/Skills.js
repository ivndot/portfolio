import React from "react";
// styles
import "../../css/Skills.css";
// icons
import PlanetIcon from "../icons/PlanetIcon";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__header">
        <PlanetIcon />
        <h3 id="Skills" className="header__title">
          Skills
        </h3>
      </div>
      <div className="skills__container">
        <ul className="container__front">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>ReactJS</li>
        </ul>
        <div className="container__separator"></div>
        <ul className="container__back">
          <li>Express</li>
          <li>Java</li>
          <li>Servlets</li>
          <li>Firebase</li>
        </ul>
      </div>
    </section>
  );
};

export default React.memo(Skills);
