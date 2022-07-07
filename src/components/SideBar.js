import React from "react";
import PropTypes from "prop-types";
// sytles
import "../css/SideBar.css";
// icons
import CrossIcon from "./icons/CrossIcon";

const SideBar = ({ handleToggle, toggle }) => {
  return (
    <>
      <nav className={toggle ? "sidebar sidebar--show" : "sidebar"}>
        <CrossIcon
          width={25}
          height={25}
          fill="#fdfdfd"
          className="sidebar__closeBtn"
          onClick={() => handleToggle(!toggle)}
        />
        <ul className="sidebar__list">
          <li>
            <a href="#Skills" onClick={() => handleToggle(!toggle)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={() => handleToggle(!toggle)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={() => handleToggle(!toggle)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

SideBar.propTypes = {
  handleToggle: PropTypes.func,
  toggle: PropTypes.bool,
};

export default SideBar;
