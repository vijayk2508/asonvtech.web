/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const technologiesList = [
  {
    name: "React",
    image: require("../../../assets/images/technologies/react.jpg"),
  },
  {
    name: "Android",
    image: require("../../../assets/images/technologies/android.png"),
  },
  {
    name: "Dot Net Core",
    image: require("../../../assets/images/technologies/dotnet.jpg"),
  },
  {
    name: "Dot Net Framework",
    image: require("../../../assets/images/technologies/dotnetframework.jpg"),
  },
  {
    name: "Java",
    image: require("../../../assets/images/technologies/java.png"),
  },
  {
    name: "PHP",
    image: require("../../../assets/images/technologies/php.jpg"),
  },
  {
    name: "IOS",
    image: require("../../../assets/images/technologies/ios.png"),
  },
];
function WhatWeDo() {
  return (
    <section id="what-we-do">
      <div className="container-fluid">
        <h2 className="section-title mb-2 h1">TECHNOLOGIES</h2>
        <div className="row mt-5">
          {technologiesList.map((eachtechnology, idx) => {
            return (
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4" key={idx}>
                <div className="card">
                  <div className="card-block">
                    <div style={{textAlign :"center"}}>
                      <img
                        src={eachtechnology.image}
                        alt=""
                        style={{ height: "50px", width: "100" }}
                      ></img>
                      <h5>{eachtechnology.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div className="card">
              <div className="card-block block-4">
                <h3 className="card-title">Special title</h3>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  //href="https://www.fiverr.com/share/qb8D02"
                  title="Read more"
                  className="read-more"
                >
                  Read more<i className="fa fa-angle-double-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default WhatWeDo;
