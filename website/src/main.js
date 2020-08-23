import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home.js";
import Music from "./pages/music/Music.js";
import Splash from "./pages/splash/Splash.js";
import Videos from "./pages/videos/Videos.js";

export default () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/music">
            <Music />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
