import React from "react";
import NavLink from "./NavLink";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg" id="tm-main-nav">
      <button
        className="navbar-toggler toggler-example mr-0 ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-nav"
        aria-controls="navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars"></i>
        </span>
      </button>
      <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
        <ul className="navbar-nav text-uppercase">
          <NavLink />
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
