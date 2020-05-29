import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import Hoc from "./Blog/ES6";

function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/blog/es6" exact>
            <Hoc />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
