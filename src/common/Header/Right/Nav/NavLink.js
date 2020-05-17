import React from "react";
import { Link } from "react-router-dom";
import route from "../../../../router/routeConstant";

function NavLink() {
  return (
    <>
      {Object.values(route).map((item) => (
        <li className="nav-item active">
          <Link to={item.path} className="nav-link tm-nav-link">
            {item.name}
            {/* <span className="sr-only">(current)</span> */}
          </Link>
        </li>
      ))}

      {/* <li className="nav-item active">
        <a className="nav-link tm-nav-link" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link tm-nav-link" href="about.html">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link tm-nav-link" href="services.html">
          Services
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link tm-nav-link" href="contact.html">
          Contact
        </a>
      </li> */}
    </>
  );
}

export default NavLink;
