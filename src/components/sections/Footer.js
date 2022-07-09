import React from "react";
// styles
import "../../css/Footer.css";
// icons
import GithubIcon from "../icons/GithubIcon";
import TwitterIcon from "../icons/TwitterIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <span className="about__user">ivndot</span>
        <p className="about__role">Frontend developer</p>
      </div>
      <div className="footer__social">
        <div className="social__icons">
          <a href="https://github.com/ivndot" target="_blank" rel="noreferrer noopener">
            <GithubIcon width={30} height={30} fill="#fdfdfd" className="animate-icon" />
          </a>
          <a href="https://twitter.com/ivndot" target="_blank" rel="noreferrer noopener">
            <TwitterIcon width={30} height={30} fill="#fdfdfd" className="animate-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ivan-alamos/" target="_blank" rel="noreferrer noopener">
            <LinkedinIcon width={30} height={30} fill="#fdfdfd" className="animate-icon" />
          </a>
        </div>
        <div className="social__separator"></div>
        <div className="social__description">Made with React and a cup of water</div>
      </div>
      <div className="footer__button">
        <a href="#" className="button__container">
          <ArrowUpIcon width={30} height={30} fill="#0b132b" />
        </a>
        <span>Go up</span>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
