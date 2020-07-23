import React from 'react'
import Logo from './logo'
import ToggleButton from './ToggleButton'
import CollapseNavBar from './CollapseNavBar'

function NavBar() {
  return (
    <div id="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <ToggleButton />
          <Logo/>
          <CollapseNavBar></CollapseNavBar>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
