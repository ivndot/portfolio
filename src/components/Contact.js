import React from "react";
//style
import "../css/Contact.css";

const Contact = () => (
  <div className="contact">
    <div className="contact-title">
      <h1 className="title" id="contact">
        <span className="bg">Contact</span>
      </h1>
    </div>
    <p className="contact--description">If you want to talk about something, please mail to:</p>
    <p className="contact--email">
      <a href="mailto:ivndotcontact@gmail.com" className="bg email">
        ivndotcontact@gmail.com
      </a>
    </p>
    <div className="social">
      <div className="social--line"></div>
      {/* github */}
      <a href="https://github.com/ivndot" target="_blank" className="social--icon">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="1.87rem"
          height="1.87rem"
        >
          <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
        </svg>
      </a>
      {/* twitter */}
      <a href="https://twitter.com/ivndot" target="_blank" className="social--icon">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="1.87rem"
          height="1.87rem"
        >
          <path d="M61.932,15.439c-2.099,0.93-4.356,1.55-6.737,1.843c2.421-1.437,4.283-3.729,5.157-6.437	c-2.265,1.328-4.774,2.303-7.444,2.817C50.776,11.402,47.735,10,44.366,10c-6.472,0-11.717,5.2-11.717,11.611	c0,0.907,0.106,1.791,0.306,2.649c-9.736-0.489-18.371-5.117-24.148-12.141c-1.015,1.716-1.586,3.726-1.586,5.847	c0,4.031,2.064,7.579,5.211,9.67c-1.921-0.059-3.729-0.593-5.312-1.45c0,0.035,0,0.087,0,0.136c0,5.633,4.04,10.323,9.395,11.391	c-0.979,0.268-2.013,0.417-3.079,0.417c-0.757,0-1.494-0.086-2.208-0.214c1.491,4.603,5.817,7.968,10.942,8.067	c-4.01,3.109-9.06,4.971-14.552,4.971c-0.949,0-1.876-0.054-2.793-0.165C10.012,54.074,16.173,56,22.786,56	c21.549,0,33.337-17.696,33.337-33.047c0-0.503-0.016-1.004-0.04-1.499C58.384,19.83,60.366,17.78,61.932,15.439" />
        </svg>
      </a>
      {/* linkedin */}
      <a href="https://www.linkedin.com/in/ivan-a-713203230/" target="_blank" className="social--icon">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="1.87rem"
          height="1.87rem"
        >
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
        </svg>
      </a>
      <div className="social--line"></div>
    </div>
  </div>
);

export default Contact;
