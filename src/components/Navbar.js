import React, { useEffect, useState } from "react";
// styles
import "../css/Navbar.css";

const Navbar = () => {
  /**
   * =============================================================================
   *                                    STATE                                    *
   * =============================================================================
   */
  const [offset, setOffset] = useState(false);

  /**
   * =============================================================================
   *                                    EFFECT                                   *
   * =============================================================================
   */
  useEffect(() => {
    const nav = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > nav.offsetTop) {
        setOffset(true);
      } else {
        setOffset(false);
      }
    });
  }, []);

  /**
   * =============================================================================
   *                                 RENDER NAVBAR                               *
   * =============================================================================
   */
  return (
    <nav className={offset ? "navbar sticky navbar--dark" : "navbar"}>
      <a
        href="#"
        className={offset ? "navbar__logo navbar__item--ligth" : "navbar__logo"}
      >
        ivndot
      </a>
      <div className="navbar__items">
        <a
          href="#Skills"
          className={
            offset ? "navbar__item navbar__item--ligth" : "navbar__item"
          }
        >
          Skills
        </a>
        <a
          href="#Projects"
          className={
            offset ? "navbar__item navbar__item--ligth" : "navbar__item"
          }
        >
          Projects
        </a>
        <a
          href="#Contact"
          className={
            offset ? "navbar__item navbar__item--ligth" : "navbar__item"
          }
        >
          Contact
        </a>
        <a
          href="https://blog-ivndot.netlify.app/"
          className={
            offset ? "navbar__item navbar__item--ligth" : "navbar__item"
          }
          target="_blank"
          rel="noreferrer noopener"
        >
          Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
