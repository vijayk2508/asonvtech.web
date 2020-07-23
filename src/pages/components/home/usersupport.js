import React from "react";

function UserSupport() {
  return (
    <>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">User Support</h2>
              <p className="font-italic text-muted mb-4">
                Our users can rely on us anytime they want. As we are creating a
                perfect workplace where we will provide help to support their
                websites and applications.
              </p>
              {/* <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a> */}
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src={require("../../../assets/images/img-1_e25nvh.jpg")}
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src={require("../../../assets/images/img-2_vdgqgn.jpg")}
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">SEO & Digital Marketing</h2>
              <p className="font-italic text-muted mb-4">
                Our team of SEO & Digital Marketing will help you grow your
                Business so that they can rank better on Search Engines. And
                also will make your websites SEO Friendly.
              </p>
              {/* <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserSupport;
