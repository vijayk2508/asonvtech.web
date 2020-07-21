/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import routeConstant from '../../../../routes/routeConstant'
import { Link } from 'react-router-dom'

function CollapseNavBar() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav ml-auto mb-1">
          {routeConstant.map((eachRoute, idx) =>
            eachRoute.visible === true ? (
              <li className="nav-item" key={idx}>
                <Link
                  to={eachRoute.path}
                  key={idx}
                  className="nav-link active"
                  aria-current="page"
                >
                  {eachRoute.name}
                </Link>
              </li>
            ) : (
            ""),
          )}
        </ul>
      </div>
    </>
  )
}

export default CollapseNavBar
