import React from "react";
import PropTypes from "prop-types";
// styles
import "../css/CardProject.css";
// icons
import GithubIcon from "./icons/GithubIcon";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";

const CardProject = (props) => {
  const { projectName, description, githubLink, externalLink } = props.project;
  return (
    <div className="card">
      <h3 className="card__title">{projectName}</h3>
      <p className="card__description">{description}</p>
      <div className="card__links">
        <a href={githubLink} target="_blank" rel="noreferrer noopener" className="links__item">
          <GithubIcon fill="#fdfdfd" width={30} height={30} className="animate-icon" />
        </a>
        <a href={externalLink} target="_blank" rel="noreferrer noopener" className="links__item">
          <ExternalLinkIcon fill="#fdfdfd" width={30} height={30} className="animate-icon" />
        </a>
      </div>
    </div>
  );
};

// proptypes
CardProject.propTypes = {
  project: PropTypes.shape({
    projectName: PropTypes.string,
    description: PropTypes.string,
    githubLink: PropTypes.string,
    externalLink: PropTypes.string,
  }),
};

export default CardProject;
