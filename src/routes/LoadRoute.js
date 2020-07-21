import React from "react";
import LazyLoader from "./LazyLoader";
import Loader from "../components/_common/loader";

function LoadRoute(props) {
  return (
    <LazyLoader
      componentPath={props.routeComponentPath}
      componentParent={props.routeComponentParent}
      // fallback={<div className="full-page-loader">
      // <div className="css-loader" />
      // <h1>Loading...</h1></div>}
      fallback = {<Loader/>}
      {...props}
    />
  );
}

export default LoadRoute;
