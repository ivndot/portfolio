import React from "react";
// styles
import "./css/App.css";
// components
import Portfolio from "./pages/Portofolio";
import Blog from "./pages/Blog";
// wouter
import { Route } from "wouter";

const App = () => {
  /**
   * =============================================================================
   *                                   RENDER APP                                *
   * =============================================================================
   */
  return (
    <>
      <Route path="/" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route>404 Not Found!</Route>
    </>
  );
};

export default App;
