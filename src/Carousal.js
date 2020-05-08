import React from "react";
import img1 from "./assets/images/image1.jpg";
import img2 from "./assets/images/image2.jpg";

let data = [
  {
    image: img1,
    title: "Title 1",
    subTitle: "Sub Title 1",
  },
  {
    image: img2,
    title: "Title 2",
    subTitle: "Sub Title 2",
  },
];

function Carousal(props) {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      {/* <ol className="carousel-indicators">
        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol> */}
      <div className="carousel-inner">
        {data.map((item, idx) => {
          return (
            <div className={`carousel-item ${idx === 0 ? "active" : ""}`}>
              <img src={item.image} className="d-block w-100 carousal-img" alt="..." />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>{item.title}</h5>
                <p>{item.subTitle}</p>
              </div> */}
            </div>
          );
        })}
      </div>
      {/* <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a> */}
    </div>
  );
}

export default Carousal;
