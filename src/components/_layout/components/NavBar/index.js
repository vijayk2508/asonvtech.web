import React from 'react'
import Logo from './logo'
import ToggleButton from './ToggleButton'
import CollapseNavBar from './CollapseNavBar'

function NavBar() {
  return (
    <div id="nav-bar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Logo/>
          <ToggleButton />
          <CollapseNavBar></CollapseNavBar>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
