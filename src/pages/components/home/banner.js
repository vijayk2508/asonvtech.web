/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner(props) {
  return (
    <>
      <div id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="promo-title">Asonv Technology</h1>
              {/* <p style={{ fontWeight: "bold" }}>Where Innovation Matters</p> */}
              <br></br>
              <p style={{ fontWeight: "bold" }}>
                Energize your Business with customized Websites and
                Applications.
              </p>
              <p style={{ fontWeight: "bold" }}>
                We also provide services in - SEO , Digital Marketing & Social Media Marketing
              </p>

              {/* <a href="#">
                <span>
                  <i className="far fa-play-circle"></i> Get Start
                </span>
              </a> */}
            </div>
            <div className="col-md-6">
              <img
                id="img-intro"
                className="rounded-lg"
                src={require("../../../assets/svg/intro.svg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
