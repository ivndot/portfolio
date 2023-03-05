import React from "react";
// styles
import "./css/App.css";
// components
import Portfolio from "./pages/Portofolio";
import Blog from "./pages/Blog";
import NotFound from "./components/sections/NotFound";
// wouter
import { Route, Switch } from "wouter";

const App = () => {
  /**
   * =============================================================================
   *                                   RENDER APP                                *
   * =============================================================================
   */
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route component={NotFound}/>
    </Switch>
  );
};

export default App;
