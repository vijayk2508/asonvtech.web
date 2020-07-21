import React from 'react'

function ToggleButton() {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* <span className="navbar-toggler-icon"></span> */}
        <span style={{ color: 'white' }}>
          <i className="fas fa-bars"></i>
        </span>
      </button>
    </>
  )
}

export default ToggleButton
