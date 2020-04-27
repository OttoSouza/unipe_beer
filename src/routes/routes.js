import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Beers from "../pages/Beers";
import About from "../pages/About";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}
