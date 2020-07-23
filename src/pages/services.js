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
                  The websites we develop are fully responsive and adapt to devices automatically.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
                <i class="far fa-user"></i>
                <h4 class="text-capitalize">User Friendly</h4>
                <p>
                  We create user friendly sites so that it adapts to the user's usability.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
                <i class="far fa-file-alt"></i>
                <h4 class="text-capitalize">Well Documented</h4>
                <p>
                  Our sites are well documented so that we develop them based on user's requirements.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
                <i class="fas fa-key"></i>
                <h4 class="text-capitalize">Easy &amp; Customizable</h4>
                <p>
                  We customize your sites based on your needs and preferences, which can be flexibile enough.
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
                  Our sites support all the latest browsers with ease and give you a nice experience in viewing.
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 margin-b-30">
              <div class="feature-box-center text-center">
                <i class="fab fa-bootstrap"></i>
                <h4 class="text-capitalize">Based on bootstrap</h4>
                <p>
                  Our Bootstrap based websites make them very responsive and user friendly and also give you a smooth usability.
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
                <img
                  class="item-icon"
                  src="assets/images/icons/clock-white.svg"
                  alt=""
                />
                <h3 class="item-title">Web & App Development</h3>
                <div class="item-desc">
                  We provide services in web & app development. We use all the latest 
                  libraries, technologies, and custom development according to the user requirement.
                  We are working with Scripting language and Core Programming languauges for better performance.
                </div>
              </div>
            </div>
            <div class="item col-12 col-md-4">
              <div class="item-inner">
                <img
                  class="item-icon"
                  src="assets/images/icons/presenter-white.svg"
                  alt=""
                />
                <h3 class="item-title">Increase Productivity</h3>
                <div class="item-desc">
                  We initiate working according to the SCRUM, where we can discuss our everyday plan and schedule.
                  It will automatically increase productivity while getting daily status and performance rate.
                </div>
              </div>
            </div>
            <div class="item col-12 col-md-4">
              <div class="item-inner">
                <img
                  class="item-icon"
                  src="assets/images/icons/chat-white.svg"
                  alt=""
                />
                <h3 class="item-title">Better Collaboration</h3>
                <div class="item-desc">
                 We also work on better collaboration with businesses where we will help them grow exponentially 
                 using our custom build websites. Also we will work and give the businesses support in SEO & Digital 
                 Marketing with their brand new websites where they can have a very good start.
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
