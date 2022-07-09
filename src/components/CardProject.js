import React from "react";
import PropTypes from "prop-types";
// styles
import "../css/CardProject.css";
// icons
import GithubIcon from "./icons/GithubIcon";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";

const CardProject = (props) => {
  const { projectName, imgName, description, technologies, githubLink, externalLink } = props.project;
  return (
    <div className="card">
      <div className="card__thumb-container">
        <div className="card__thumb" style={{ backgroundImage: `url(/img/${imgName})` }}></div>
      </div>
      <div className="card__content">
        <h3 className="content__title">{projectName}</h3>
        <p className="content__description">{description}</p>
        <p className="content__tech">{technologies.join("  •  ")}</p>
        <div className="content__links">
          <a href={githubLink} target="_blank" rel="noreferrer noopener" className="links__item">
            <GithubIcon fill="#fdfdfd" width={30} height={30} className="animate-icon" />
          </a>
          <a href={externalLink} target="_blank" rel="noreferrer noopener" className="links__item">
            <ExternalLinkIcon fill="#fdfdfd" width={30} height={30} className="animate-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

// proptypes
CardProject.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string,
    imgName: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.array,
    githubLink: PropTypes.string,
    externalLink: PropTypes.string,
  }),
};

export default CardProject;
