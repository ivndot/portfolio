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
    imgName: "api_rsa.png",
    description:
      "This is an API that allows you to encrypt and decrypt plain text or text of a file with the RSA method. It can also generate a key-pair (public and private key) files.",
    technologies: ["Java", "Servlets"],
    githubLink: "https://github.com/ivndot/api-rsa",
    externalLink: "https://api-rsa.herokuapp.com/",
  },
  {
    projectName: "RSA Encryption",
    imgName: "rsa.png",
    description:
      "Here I consume the API-RSA from a webapp where you can encrypt, decrypt and download a key-pair of 4096 bits.",
    technologies: ["ReactJS", "Axios"],
    githubLink: "https://github.com/ivndot/frontend-rsa",
    externalLink: "https://wizardly-bell-7ddb9a.netlify.app/",
  },
  {
    projectName: "El rincón del tragón",
    imgName: "rincon.png",
    description:
      "A webapp that shows a list of recipes where you can search and filter by best raiting and also manage user sessions.",
    technologies: ["Java", "Servlets", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/ivndot/el-rincon-del-tragon",
    externalLink: "https://el-rincon-del-tragon.herokuapp.com/",
  },
  {
    projectName: "API-IoT",
    imgName: "api_iot.png",
    description:
      "API that gets the temperature from an LM35 sensor, controls also the 'mode' of an IoT device (Fan and led's controlled by a NodeMCU esp8266 module).",
    technologies: ["NodeJS", "Express", "Socket.io", "MySQL"],
    githubLink: "https://github.com/ivndot/api-iot",
    externalLink: "https://api-iot-maria.herokuapp.com/",
  },
  {
    projectName: "Maria IoT",
    imgName: "maria.png",
    description:
      "A webapp that consumes the API-IoT, getting the temperature in real time with websockets from an LM35 sensor and controlling an IoT device (Fan and led's) that can also be controlled by an assistant called 'Maria' through voice commands.",
    technologies: ["ReactJS", "Socket.io", "Axios", "SpeechRecognitionAPI"],
    githubLink: "https://github.com/ivndot/maria-iot",
    externalLink: "https://splendid-gelato-81ae0d.netlify.app/",
  },
  {
    projectName: "API-StPharm",
    imgName: "api_stpharm.png",
    description:
      "API for an Android application created with React Native and Expo. This app was designed to help independent pharmacy owners managing the expiring date of the medicines in their stock, saving money and having a better managment of their products.",
    technologies: ["NodeJS", "Express", "Firestore", "Firebase auth"],
    githubLink: "https://github.com/ivndot/api-stpharm",
    externalLink: "https://api-stpharm.herokuapp.com/",
  },
  {
    projectName: "Yelsan",
    imgName: "yelsan.png",
    description:
      "This is a webapp for the Yelsan company. They needed a mobile/web app that allow their employees fill out forms about the parameters that each department of a store have to follow (auditing).",
    technologies: ["ReactJS", "Firestore", "Axios", "Formik"],
    githubLink: "https://github.com/ivndot/yelsan",
    externalLink: "https://focused-lamport-ae857c.netlify.app/",
  },
  {
    projectName: "To-Do",
    imgName: "todo.png",
    description:
      "A to-do list with some additional features like filter by state, activate or complete all items and remove completed ones.",
    technologies: ["ReactJS"],
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
