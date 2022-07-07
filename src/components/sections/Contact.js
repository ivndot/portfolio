import React from "react";
// styles
import "../../css/Contact.css";
// icons
import SpaceshipIcon from "../icons/SpaceshipIcon";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__header">
        <SpaceshipIcon />
        <h3 id="Contact" className="header__title">
          Contact
        </h3>
      </div>
      <p className="contact__description">If you want to get in touch with me, email to:</p>
      <a href="mailto:ivndotcontact@gmail.com" className="contact__email">
        ivndotcontact@gmail.com
      </a>
    </section>
  );
};

export default React.memo(Contact);
