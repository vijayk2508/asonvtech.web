/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const teamData = [
  {
    imageUrl: require(`../../../assets/images/avatar-1_s02nlg.png`),
    name: "Vijay Kumar",
    designation: "CEO Founder",
    socialLink: {
      facebook: "https://www.facebook.com/VijayK2508",
      instagram: "",
      twitter: "",
      linkedIn: "",
    },
  },
  {
    imageUrl: require(`../../../assets/images/avatar-2_f8dowd.png`),
    name: "User 1",
    designation: "Designation 1",
    socialLink: {
      facebook: "",
      instagram: "",
      twitter: "",
      linkedIn: "",
    },
  },
  {
    imageUrl: require(`../../../assets/images/avatar-3_hzlize.png`),
    name: "User 2",
    designation: "Desgination 2",
    socialLink: {
      facebook: "",
      instagram: "",
      twitter: "",
      linkedIn: "",
    },
  },
  {
    imageUrl: require(`../../../assets/images/avatar-4_ozhrib.png`),
    name: "User 3",
    designation: "Desgination 3",
    socialLink: {
      facebook: "",
      instagram: "",
      twitter: "",
      linkedIn: "",
    },
  },
];

function Team() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-md-12 text-center">
              <h2 className="display-4 font-weight-light ">Our team</h2>
              <p className="font-italic text-muted ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="row text-center">
            {teamData.map((eachTeamMember, idx) => {
              return (
                <div className="col-xl-3 col-sm-6 mb-5" key={idx}>
                  <div className="bg-white rounded shadow-sm py-5 px-4">
                    <img
                      src={eachTeamMember.imageUrl}
                      alt=""
                      width="100"
                      className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    />
                    <h5 className="mb-0">{eachTeamMember.name}</h5>
                    <span className="small text-uppercase text-muted">
                      {eachTeamMember.designation}
                    </span>
                    <ul className="social mb-0 list-inline mt-3">
                      <li className="list-inline-item">
                        <a
                          href={eachTeamMember.socialLink.facebook}
                          className="social-link"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={eachTeamMember.socialLink.twitter}
                          className="social-link"
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={eachTeamMember.socialLink.instagram}
                          className="social-link"
                          target="_blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          href={eachTeamMember.socialLink.linkedIn}
                          className="social-link"
                          target="_blank"
                        >
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
