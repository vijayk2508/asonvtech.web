/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <>
      <footer style={{ background: "#2c292f" }}>
        <div className="container">
          <div className="row ">
            <div className="col-md-4 text-center text-md-left ">
              <div className="py-0">
                <h3 className="my-4 text-white">Get In Touch</h3>

                <div className="py-2 my-4 text-white">
                  {/* <div>
                    <p>
                      <i className="fa fa-map-marker mx-2 "></i>
                      309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1 Mahape,
                      Navi Mumbai - 400710
                    </p>
                  </div> */}

                  {/* <div>
                    <p>
                      <i className="fa fa-phone  mx-2 "></i> +91 7983868472
                    </p>
                  </div> */}
                  <div>
                    <p>
                      <i className="fa fa-envelope  mx-2"></i>
                      <a href="mailto:service@asonvtech.com">
                        {/* asonv.tech@gmail.com */}
                        service@asonvtech.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8 text-white my-4 text-center text-md-left ">
              <span className=" font-weight-bold ">About the Company</span>
              <p className="my-2 desc">
                AsonvTech is mainly specialised in Web Development and
                Application Development services, along with Digital Marketing
                and SEO. A Start-up with innovative minds designed to provide
                effortless digital services
              </p>
              <div className="py-2">
                <a href="www.linkedin.com/in/asonv-tech" target="_blank">
                  <i
                    className="fab fa-linkedin fa-2x mx-0"
                  ></i>
                </a>
                {/* <a href="#">s
                  <i className="fab fa-facebook fa-2x text-primary mx-3"></i>
                </a>
                <a href="#">
                  <i className="fab fa-google-plus fa-2x text-danger mx-3"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter fa-2x text-info mx-3"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube fa-2x text-danger mx-3"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="p-0 m-0 b-0 bg-white" />
        <div className="py-2">
          <div className="container text-center">
            <p className="text-muted mb-0 py-2">
              © {new Date().getFullYear()} AsonvTech All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
