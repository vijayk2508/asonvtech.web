import React from "react";
import img1 from "./assets/images/image1.jpg";
import img2 from "./assets/images/image2.jpg";
import logo from "./assets/img/transparent-img.png";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav class="navbar fixed-top navbar-expand-lg navbar-light" style={{ zIndex: 999 }}>
          <a class="navbar-brand" href="#" style={{ display: "flex" }}>
            <div>
              <img src={logo} alt="" id="img-logo" style={{ height: 60 }} />
            </div>
            <div style={{ paddingLeft: "11px", marginLeft: "0px" }} class="row" id="header-title">
              <label style={{ lineHeight: "26.5px" }} class="col-sm-12 hidden-sm-12">
                <span style={{ color: "#00b9d7", fontWeight: "bold" }}>Asonv Tech</span>
                <br />
                <span style={{ color: "#0078b3" }}>Where Innovation Matters</span>
              </label>
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact us
                </a>
              </li>

              {/* <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
              Disabled
            </a>
          </li> */}
            </ul>
          </div>
        </nav>
        {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            Navbar
          </a>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact us
                </a>
              </li>

              {/* <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
              Disabled
            </a>
          </li> 
            </ul>
          </div>
        </nav> */}
      </header>
      <main>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={img1} class="d-block w-100 carousal-img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={img2} class="d-block w-100 carousal-img" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div
            style={{
              textAlign: "center",
              color: "white",
              padding: 64,
              // position: "absolute",
              // top: 0,
            }}
          >
            <h2>About Company Page</h2>

            <h4 style={{ padding: 64 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,.
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
        <hr style={{ border: "1px solid white" }}></hr>

        <div className="row" style={{ margin: 0, padding: 60 }}>
          <div className="col-md-6" style={{ padding: 0 }}>
            <img src={img1} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-md-6" style={{ padding: "0 20px 0 20px" }}>
            <h1 style={{ color: "white", textAlign: "lef" }}>About Us</h1>
            <p style={{ color: "white", textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <hr style={{ border: "1px solid white" }}></hr>

        <div className="row" style={{ margin: 0, padding: 60 }}>
          <div className="col-md-6" style={{ padding: "0 20px 0 20px" }}>
            <h1 style={{ color: "white", textAlign: "lef" }}>About Us</h1>
            <p style={{ color: "white", textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                <div class="listar-map-button-text" style={{ opacity: 1, display: "inline-block" }}>
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
                              Easily find interesting places by local experts, save time by checking
                              listing features.{" "}
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
      </main>
      <footer class="page-footer font-small blue pt-4">
        <div class="container-fluid text-center text-md-left">
          <div class="row">
            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3 mb-md-0 mb-3">
              <h5 class="text-uppercase">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>

            <hr class="clearfix w-100 d-md-none pb-3" />

            <div class="col-md-6 mt-md-0 mt-3">
              <h5 class="text-uppercase">Footer Content</h5>
              <p>Here you can use rows and columns to organize your footer content.</p>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href=""> AsonTech.com</a>
        </div>
      </footer>
    </>
  );
}

export default App;
