import React from "react";
//styles
import "../css/Projects.css";
import Card from "./Card";

const projects = [
  {
    projectName: "API-RSA",
    description:
      "This is an API developed in JAVA that allows you to encrypt and decrypt plain text or text of a file with the RSA method. It also can generate a key-pair (public and private key).",
    githubLink: "https://github.com/ivndot/api-rsa",
    externalLink: "https://api-rsa.herokuapp.com/",
  },
  {
    projectName: "Webapp RSA",
    description:
      "Here I consume the API-RSA from a webapp, where you can encrypt, decrypt and download a key-pair of 256 bits.",
    githubLink: "https://github.com/ivndot/frontend-rsa",
    externalLink: "https://wizardly-bell-7ddb9a.netlify.app/",
  },
  {
    projectName: "Yelsan",
    description:
      "This is a webapp built for the Yelsan company. They needed a mobile/web app that allow their employees fill out forms about the parameters that each department of a store have to follow (auditing).",
    githubLink: "https://github.com/ivndot/yelsan",
    externalLink: "https://focused-lamport-ae857c.netlify.app/",
  },
  {
    projectName: "To-Do",
    description: "A simple to-do list with some additional features.",
    githubLink: "https://github.com/ivndot/todo-list",
    externalLink: "https://suspicious-kare-dc55cd.netlify.app/",
  },
];

const Projects = () => (
  <section className="projects">
    <div className="projects--title">
      <h1 className="title" id="projects">
        <span className="bg">Projects</span>
      </h1>
    </div>
    <p className="projects--description">These are things that i have developed in ReactJS and Java</p>
    {/* cards */}
    <div className="projects--cards">
      {projects.map((item, idx) => (
        <Card key={idx} project={item} />
      ))}
    </div>
  </section>
);

export default Projects;
