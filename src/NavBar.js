/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./assets/img/transparent-img.png";

function NavBar(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{ zIndex: 999 }}>
      {/* <a class="navbar-brand" href="#">
        <img src={logo} alt=""></img>
      </a> */}
      <a class="navbar-brand" href="#" style={{ display: "flex" }}>
        <div>
          <img src={logo} alt="" id="img-logo" style={{ height: 60 }} />
        </div>
        <div style={{ paddingLeft: "11px", marginLeft: "0px" }} class="row" id="header-title">
          <label style={{ lineHeight: "26.5px" }} class="col-sm-12 hidden-sm-12">
            <span style={{ color: "#00b9d7", fontWeight: "bold" }}>Asonv Tech</span>
            <br />
            <span style={{ color: "#0078b3" }}>Where Innovation Matters</span>
          </label>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Products
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              About us
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              Contact us
            </a>
          </li>

          {/* <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
              Disabled
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

NavBar.propTypes = {};

export default NavBar;
