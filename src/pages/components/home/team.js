/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const teamData = [
  {
//    imageUrl: require(`../../../assets/images/vijay.jpg`),
    imageUrl: require(`../../../assets/images/avatar-1_s02nlg.png`),
    name: 'Vijay Kumar',
    designation: 'Founder & CEO',
    socialLink: {
      linkedIn: 'https://www.linkedin.com/in/vijay-kumar-652646111/',
    },
  },
  {
    //imageUrl: require(`../../../assets/images/subendu.jpeg`),
    imageUrl: require(`../../../assets/images/avatar-1_s02nlg.png`),
    name: 'Subhendu Mahapatra',
    designation: 'Co-Founder',
    socialLink: {
      linkedIn : '',
      // linkedIn: 'https://www.linkedin.com/in/subhendu-kumar-mahapatra/',
    },
  },
  {
    //imageUrl: require(`../../../assets/images/sonali.jpeg`),
    imageUrl: require(`../../../assets/images/avatar-4_ozhrib.png`),
    name: 'Sonali Mahapatra',
    designation: 'Content Writer & Management',
    socialLink: {
      linkedIn: 'https://www.linkedin.com/in/sonali-mahapatra-211a96176/',
    },
  },
  {
    imageUrl: require(`../../../assets/images/avatar-4_ozhrib.png`),
    name: "Saraswati Mohapatra",
    designation: "Digital Marketing",
    socialLink: {
      linkedIn : "",
     // linkedIn: "https://www.linkedin.com/in/saraswati-mohapatra-5230b2193/",
    },
  },
]

function Team() {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-md-12 text-center">
              <h2 className="display-4 font-weight-light ">Our Team</h2>
              <p className="font-italic text-muted ">
                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. */}
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
                      style={{ height: '208px', width: '100%' }}
                      className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                    />
                    <h5 className="mb-0">{eachTeamMember.name}</h5>
                    <span className="small text-uppercase text-muted">
                      {eachTeamMember.designation}
                    </span>
                    <ul className="social mb-0 list-inline mt-3">
                      {/* <li className="list-inline-item">
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
                      </li> */}
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
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
