import React from "react";

function OurMotive() {
  return (
    <>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">Our Motive</h1>
              <p className="lead text-muted mb-0">
                We use emerging technologies to customize software services
                which mean we create responsive ways to construct flexible but
                powerful products that will result you with exclusive solutions
                for your users.
              </p>
              {/* <p className="lead text-muted">
                Snippet by{' '}
                <a href="#" className="text-muted">
                  <u>Bootstrapious</u>
                </a>
              </p> */}
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src={require("../../../assets/images/illus_kftyh4.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMotive;
