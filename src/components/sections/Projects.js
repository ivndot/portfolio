import React from "react";
// styles
import "../../css/Projects.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// icons
import AstronautIcon from "../icons/AstronautIcon";
import PlanetCardIcon from "../icons/PlanetCardIcon";
// components
import CardProject from "../CardProject";
import { Carousel } from "react-responsive-carousel";

const projects = [
  {
    projectName: "API-RSA",
    description:
      "This is an API developed with java servlets that allows you to encrypt and decrypt plain text or text of a file with the RSA method. It can also generate a key-pair (public and private key) files.",
    githubLink: "https://github.com/ivndot/api-rsa",
    externalLink: "https://api-rsa.herokuapp.com/",
  },
  {
    projectName: "RSA Encryption",
    description:
      "Here I consume the API-RSA from a webapp developed with ReactJS, where you can encrypt, decrypt and download a key-pair of 4096 bits.",
    githubLink: "https://github.com/ivndot/frontend-rsa",
    externalLink: "https://wizardly-bell-7ddb9a.netlify.app/",
  },
  {
    projectName: "El rincón del tragón",
    description:
      "A webapp built with java servlets and stores data in a MySQL database that shows a list of recipes where you can search and filter by best raiting and also manage user sessions.",
    githubLink: "https://github.com/ivndot/el-rincon-del-tragon",
    externalLink: "https://el-rincon-del-tragon.herokuapp.com/",
  },
  {
    projectName: "API-IoT",
    description:
      "API developed with express and websockets that gets the temperature from an LM35 sensor and stores the data in a MySQL database, controls also the 'mode' of an IoT device (Fan and led's controlled by a NodeMCU esp8266 module).",
    githubLink: "https://github.com/ivndot/api-iot",
    externalLink: "https://api-iot-maria.herokuapp.com/",
  },
  {
    projectName: "Maria IoT",
    description:
      "A webapp developed with ReactJS that consumes the API-IoT, getting the temperature in real time with websockets from an LM35 sensor and controlling an IoT device (Fan and led's) that can also be controlled by an assistant called 'Maria' through voice commands.",
    githubLink: "https://github.com/ivndot/maria-iot",
    externalLink: "https://splendid-gelato-81ae0d.netlify.app/",
  },
  {
    projectName: "API-StPharm",
    description:
      "API developed with express for an Android application created with React Native and Expo. This app was designed to help independent pharmacy owners by manage the expiring date of the medicines in their stock, saving money and having a better managment of their products.",
    githubLink: "https://github.com/ivndot/api-stpharm",
    externalLink: "https://api-stpharm.herokuapp.com/",
  },
  {
    projectName: "Yelsan",
    description:
      "This is a webapp developed with ReactJS and Firebase for the Yelsan company. They needed a mobile/web app that allow their employees fill out forms about the parameters that each department of a store have to follow (auditing).",
    githubLink: "https://github.com/ivndot/yelsan",
    externalLink: "https://focused-lamport-ae857c.netlify.app/",
  },
  {
    projectName: "To-Do",
    description:
      "A to-do list developed with ReactJS with some additional features like filter by state, activate or complete all items and remove completed ones.",
    githubLink: "https://github.com/ivndot/todo-list",
    externalLink: "https://suspicious-kare-dc55cd.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__header">
        <AstronautIcon />
        <h3 id="Projects" className="header__title">
          Projects
        </h3>
      </div>
      <div className="projects__carousel">
        <PlanetCardIcon className="projects__planet" />
        <Carousel
          axis="horizontal"
          emulateTouch
          infiniteLoop
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
          dynamicHeight
        >
          {projects.map((project, idx) => (
            <CardProject key={idx} project={project} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default React.memo(Projects);
