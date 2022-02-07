/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../../assets/images/logo-new.png";
function Logo() {
  return (
    <>
      {/* <a className="navbar-brand" href="#">
              <div>
                <img src={require('../../../../assets/images/transparent-img.png')} alt="" id="img-logo" />
              </div>
              <div style={{ marginLeft: '0px' }} className="" id="header-title">
                <label
                  style={{ lineHeight: '26.5px' }}
                  className="col-sm-12 d-none d-lg-block"
                >
                  <span style={{ color: '#00b9d7', fontWeight: 'bold' }}>
                    Asonv Tech
                  </span>
                  <br />
                  <span style={{ color: '#0078b3' }}>
                    Where Innovation Matters
                  </span>
                </label>
              </div>
            </a> */}

            <img 
            style={{
              resizeMode: "contain",
              height: 100,
              
              }}
            src= {logo} 
            alt= "logo" 
            />
            
      <a
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
      </a>
    </>
  );
}

export default Logo;
