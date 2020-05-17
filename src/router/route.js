import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import route from "./routeConstant";

function Route() {
  return (
    <Router>
      <Switch>
        {Object.values(route).map((item) => (
          <Route path={item.path}> {item.component}</Route>
        ))}
      </Switch>
    </Router>
  );
}

export default Route;
