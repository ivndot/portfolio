import React from "react";
//styles
import "../css/About.css";
import blob from "../img/blob.svg";
import resume from "../files/Ivan_Alamos_resume.pdf";

const About = () => (
  <section className="about">
    <div className="about--title">
      <h1 className="title--name" id="about">
        Ivan Alamos
      </h1>
      <p className="title--degree">
        <span className="bg">Software Engineer</span>
      </p>
      <p className="title--student">student</p>
    </div>

    <p className="about--description">
      Hi everyone, i&apos;m a frontend developer and sometimes backend too :)
    </p>

    <p className="about--resume">
      Download my resume &nbsp;
      <span className="bg">
        <a href={resume} target="_blank">
          here
        </a>
      </span>
    </p>

    <img src={blob} alt="blob" className="blob" />
  </section>
);

export default About;
