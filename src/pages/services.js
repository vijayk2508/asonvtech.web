import React from "react";
import Layout from "../components/_layout";
import Heading from "../components/_common/heading";
//import '../assets/css/icon.css'

function Services() {
  return (
    <Layout>
      <Heading title="Services" />
      <div class="grey-bg">
        <div class="space-90"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
                <i class="fas fa-mobile-alt"></i>
                <h4 class="text-capitalize">Fully Responsive</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
                <i class="far fa-user"></i>
                <h4 class="text-capitalize">User Friendly</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
              <i class="far fa-file-alt"></i>
                <h4 class="text-capitalize">Well Documented</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
              <i class="fas fa-key"></i>
                <h4 class="text-capitalize">Easy &amp; Customizable</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
              <i class="fas fa-globe"></i>
                <h4 class="text-capitalize">Cross Browser</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
              <i class="fab fa-bootstrap"></i>
                <h4 class="text-capitalize">Based on bootstrap</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </div>
          </div>
          <div class="space-60"></div>
        </div>
      </div>
      <div class="benefits-wrapper">
            <div class="container text-center">
                <div class="row">
                    <div class="item col-12 col-md-4">
                        <div class="item-inner">
                            <img class="item-icon" src="assets/images/icons/clock-white.svg" alt=""/>
                            <h3 class="item-title">10X Faster Development</h3>
                            <div class="item-desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            </div>
                        </div>
                    </div>
                    <div class="item col-12 col-md-4">
                        <div class="item-inner">
                            <img class="item-icon" src="assets/images/icons/presenter-white.svg" alt=""/>
                            <h3 class="item-title">Increase Productivity</h3>
                            <div class="item-desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            </div>
                        </div>
                    </div>
                    <div class="item col-12 col-md-4">
                        <div class="item-inner">
                            <img class="item-icon" src="assets/images/icons/chat-white.svg" alt=""/>
                            <h3 class="item-title">Better Collabration</h3>
                            <div class="item-desc">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  );
}

export default Services;
