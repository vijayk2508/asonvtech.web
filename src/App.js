import React, { useState, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import NavBar from "./NavBar";
import Carousal from "./Carousal";

import img1 from "./assets/images/img2.jpeg";

function App() {
  const [loader, setLoader] = useState("loading");

  setTimeout(() => setLoader("loaded"), 3000);

  return (
    <>
      <div className="hero">
        {loader === "loaded" ? (
          <>
            <div className="header" style={{ position: "relative" }}>
              <NavBar></NavBar>

              <div className="row" style={{ margin: 0 }}>
                <div
                  className="col-md-12"
                  style={{ padding: 0, position: "absolute", opacity: ".2", top: "0" }}
                >
                  <div className="container-fluid" style={{ padding: 0 }}>
                    <Carousal></Carousal>
                  </div>
                </div>
                <div style={{ textAlign: "center", color: "white", padding: 64 }}>
                  <h2>About Company Page</h2>

                  <h4 style={{ padding: 64 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </h4>
                  <br />
                  <button
                    class="btn btn-default"
                    style={{ border: "1px solid white", background: "white", color: "black" }}
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>

            <div className="row" style={{ margin: 0, padding: 60 }}>
              {/* <div class="col-lg-12" style={{ paddingTop: 20, paddingBottom: 40 }}>
            <h1 style={{ color: "white", textAlign: "center" }}>Services</h1>
          </div> */}
              <div className="col-md-6" style={{ padding: 0 }}>
                <img src={img1} alt="" style={{ width: "100%" }} />
              </div>
              <div className="col-md-6" style={{ padding: "0 20px 0 20px" }}>
                <h1 style={{ color: "white", textAlign: "lef" }}>About Us</h1>
                <p style={{ color: "white", textAlign: "justify" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
            </div>

            <hr style={{ border: "1px solid white" }}></hr>

            <div className="row" style={{ margin: 0, padding: 60 }}>
              {/* <div class="col-lg-12" style={{ paddingTop: 20, paddingBottom: 40 }}>
            <h1 style={{ color: "white", textAlign: "center" }}>Services</h1>
          </div> */}

              <div className="col-md-6" style={{ padding: "0 20px 0 20px" }}>
                <h1 style={{ color: "white", textAlign: "lef" }}>About Us</h1>
                <p style={{ color: "white", textAlign: "justify" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                  with desktop publishing software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
              </div>
              <div className="col-md-6" style={{ padding: 0 }}>
                <img src={img1} alt="" style={{ width: "100%" }} />
              </div>
            </div>

            <div className="row" style={{ margin: 0 }}>
              <div className="col-md-12" style={{ padding: 0, background: "white" }}>
                <header class="header-design">
                  <div class="listar-map-button">
                    <div
                      class="listar-map-button-text"
                      style={{ opacity: 1, display: "inline-block" }}
                    >
                      <span class="icon-map2">How it Works? </span>
                    </div>
                  </div>

                  <div class="footer-wave"></div>
                </header>
                <div class="pset">
                  <div class="container">
                    <div class="row listar-feature-items">
                      <div
                        class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                        data-aos="fade-zoom-in"
                        data-aos-group="features"
                        data-line-height="25.2px"
                      >
                        <div class="listar-feature-item listar-feature-has-link">
                          <a href="#" target="_blank"></a>

                          <div class="listar-feature-item-inner">
                            <div class="listar-feature-right-border"></div>

                            <div class="listar-feature-block-content-wrapper">
                              <div class="listar-feature-icon-wrapper">
                                <div class="listar-feature-icon-inner">
                                  <div>
                                    <img
                                      alt="Businesses"
                                      class="listar-image-icon"
                                      src="https://image.flaticon.com/icons/svg/1899/1899582.svg"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="listar-feature-content-wrapper" style={{ padding: 0 }}>
                                <div class="listar-feature-item-title listar-feature-counter-added">
                                  <span>
                                    <span>01</span>
                                    Businesses{" "}
                                  </span>
                                </div>

                                <div class="listar-feature-item-excerpt">
                                  Start publish listings to show everyone the details and goodies of
                                  your establishment.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
                      </div>

                      <div
                        class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                        data-aos="fade-zoom-in"
                        data-aos-group="features"
                        data-line-height="25.2px"
                      >
                        <div class="listar-feature-item listar-feature-has-link">
                          <a href="#" target="_blank"></a>

                          <div class="listar-feature-item-inner">
                            <div class="listar-feature-right-border"></div>

                            <div class="listar-feature-block-content-wrapper">
                              <div class="listar-feature-icon-wrapper">
                                <div class="listar-feature-icon-inner">
                                  <div>
                                    <img
                                      alt="Customers"
                                      class="listar-image-icon"
                                      src="https://image.flaticon.com/icons/svg/1899/1899506.svg"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="listar-feature-content-wrapper" style={{ padding: 0 }}>
                                <div class="listar-feature-item-title listar-feature-counter-added">
                                  <span>
                                    <span>02</span>
                                    Customers{" "}
                                  </span>
                                </div>

                                <div class="listar-feature-item-excerpt">
                                  Easily find interesting places by local experts, save time by
                                  checking listing features.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
                      </div>

                      <div
                        class="col-xs-12 col-sm-6 col-md-4 listar-feature-item-wrapper listar-feature-with-image listar-height-changed"
                        data-aos="fade-zoom-in"
                        data-aos-group="features"
                        data-line-height="25.2px"
                      >
                        <div class="listar-feature-item listar-feature-has-link">
                          <a href="#" target="_blank"></a>

                          <div class="listar-feature-item-inner">
                            <div class="listar-feature-right-border"></div>

                            <div class="listar-feature-block-content-wrapper">
                              <div class="listar-feature-icon-wrapper">
                                <div class="listar-feature-icon-inner">
                                  <div>
                                    <img
                                      alt="Feedback"
                                      class="listar-image-icon"
                                      src="https://image.flaticon.com/icons/svg/1899/1899604.svg"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div class="listar-feature-content-wrapper" style={{ padding: 0 }}>
                                <div class="listar-feature-item-title listar-feature-counter-added">
                                  <span>
                                    <span>03</span>
                                    Feedback{" "}
                                  </span>
                                </div>

                                <div class="listar-feature-item-excerpt">
                                  Visitors discuss listings to share experiences, so businesses get
                                  reputation consolidated.{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="listar-feature-fix-bottom-padding listar-fix-feature-arrow-button-height"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div class="cube-wrapper" style={{ display: "block" }}>
            <div class="cube-folding">
              <span class="leaf1"></span>
              <span class="leaf2"></span>
              <span class="leaf3"></span>
              <span class="leaf4"></span>
            </div>
            <span class="loading" data-name="Loading">
              Loading
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
