import React from "react";
//styles
import "../css/Card.css";
//icons
import searchIcon from "../img/icon-search.svg";
import githubIcon from "../img/icon-github.svg";
import externalIcon from "../img/icon-external-link.svg";

const Card = (props) => {
  const { projectName, description, githubLink, externalLink } = props.project;

  return (
    <div className="card">
      {/* menu */}
      <div className="card--menu">
        <div className="menu">
          <div className="menu--btn"></div>
          <div className="menu--btn"></div>
          <div className="menu--btn"></div>
        </div>
      </div>
      {/* title */}
      <div className="card--img">
        <div className="engine">
          <span style={{ color: "#4e81ee" }}>D</span>
          <span style={{ color: "#e1183a" }}>o</span>
          <span style={{ color: "#f7c228" }}>o</span>
          <span style={{ color: "#4e81ee" }}>d</span>
          <span style={{ color: "#24bf5a" }}>l</span>
          <span style={{ color: "#e1183a" }}>e</span>
        </div>
        <div className="search">
          <span>{projectName}</span>
          <img src={searchIcon} alt="icon for search" className="search--icon" />
        </div>
      </div>
      {/* description */}
      <div className="card--description">
        <p>{description}</p>
      </div>
      <div className="card--footer">
        <a href={githubLink} target="_blank">
          <img src={githubIcon} alt="icon of github" className="footer--links" />
        </a>
        <a href={externalLink} target="_blank">
          <img src={externalIcon} alt="icon for external page" className="footer--links" />
        </a>
      </div>
    </div>
  );
};

export default Card;
