import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routeConstant from "./routeConstant";
import Home from "../components/Home";

function Router() {
  return (
    <BrowserRouter>
      {routeConstant.map((item, i) => {
        return <Route path={item.path} render={item.component} key={i} exact={true}></Route>;
      })}
      {/* <Route path={"/"} render={Home}></Route> */}
    </BrowserRouter>
  );
}

export default Router;
