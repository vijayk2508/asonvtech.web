/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Heading from "./heading";

function Contact() {
  const heading_style = {
    padding: "29px 0px",
    backgroundColor: "#6338a3 !important",
    color: "white !important",
    textAlign: "center !important",
  };

  return (
    <>
      <Heading title="Feel Free To Contact US" 
      //style={heading_style} 
      className="" />
      <div className="container py-5 animated fadeIn">
        <div className="row" id="parent">
          <div className="col-md-6">
            <iframe
              width="100%"
              height="320px;"
              frameborder="0"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaY32Qm3KWTkRuOnKfoIVZws&key=AIzaSyAf64FepFyUGZd3WFWhZzisswVx2K37RFY"
              allowfullscreen
            ></iframe>
          </div>

          <div className="col-6">
            <form className="row g-3">
              {/* <div className="col-md-12">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div> */}
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="nm"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="em"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
             //     onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                  maxlength="10"
                  placeholder="Mobile No."
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  id="companyname"
                  name="companyname"
                  placeholder="Company Name"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control textarea-contact"
                  rows="5"
                  id="comment"
                  name="FB"
                  placeholder="Type Your Message/Feedback here..."
                  required=""
                ></textarea>
                <br />
                <button className="btn btn-default btn-send">
                  <span>
                    <i className="fas fa-paper-plane"></i>
                  </span>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="container second-portion">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4">
              <div className="box">
                <div className="icon">
                  <div className="image">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="info">
                    <h3 className="title">MAIL & WEBSITE</h3>
                    <p>
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                      &nbsp; gondhiyahardik6610@gmail.com
                      <br />
                      <br />
                      <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                      &nbsp;www.hardikgondhiya.com
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="box">
                <div className="icon">
                  <div className="image">
                    <i className="fa fa-mobile-alt" aria-hidden="true"></i>
                  </div>
                  <div className="info">
                    <h3 className="title">CONTACT</h3>
                    <p>
                      <i className="fa fa-mobile-alt" aria-hidden="true"></i>
                      &nbsp; (+91)-9624XXXXX
                      <br />
                      <br />
                      <i className="fa fa-mobile-alt" aria-hidden="true"></i>
                      &nbsp; (+91)-756706XXXX
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="box">
                <div className="icon">
                  <div className="image">
                    <i className="fa fa-map-marker-alt" aria-hidden="true"></i>
                  </div>
                  <div className="info">
                    <h3 className="title">ADDRESS</h3>
                    <p>
                      <i
                        className="fa fa-map-marker-alt"
                        aria-hidden="true"
                      ></i>
                      &nbsp; 15/3 Junction Plot "Shree Krishna Krupa", Rajkot -
                      360001.
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
