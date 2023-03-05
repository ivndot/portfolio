import React from "react";
import "../../css/NotFound.css";
import Navbar from "../Navbar";

const NotFound = () => (
  <>
    <Navbar />
    <div className="notfound">
      <h1 className="notfound-title">Ooops...</h1>
      <p className="notfound-sign">404</p>
      <p className="notfound-message">Page not found</p>
    </div>
  </>
);

export default NotFound;
