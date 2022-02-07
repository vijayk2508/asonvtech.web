/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import logo from "../../../../assets/images/logo-new.png";


function Logo() {
  return (
    <>
      <a className="navbar-brand" href="#">
        <div>
          <img style={{ height: 50, width: 50 }} src={require('../../../../assets/images/logo-new.png')} alt="" id="img-logo" />
        </div>
        <div style={{ marginLeft: '0px' }} className="" id="header-title">
          <label
            style={{ lineHeight: '26.5px' }}
            className="col-md-12 d-lg-block"
          >
            <span style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'unset', fontSize: 20 }}>
              Asonv Tech
            </span>
            <br />
            <span style={{ color: '#fff', fontWeight: 'bold', fontSize: 10, fontFamily: 'revert' }}>
              Where Innovation Matters
            </span>
          </label>
        </div>
      </a>


      {/* <a href="#">

        <img
          style={{
            resizeMode: "contain",
            height: 75,
          }}
          src={logo}
          alt="logo"
        />
      </a> */}



      {/* <a
        className="navbar-brand"
        href="#"
        style={{
          border: "none",
          background: "none",
          color: "white",
          fontSize: "30",
          fontWeight: 600,
        }}
      >
        ASONV TECH
      </a> */}
    </>
  );
}

export default Logo;
