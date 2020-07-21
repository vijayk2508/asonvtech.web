/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

function Banner() {
  return (
    <>
      <div id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title">Asonv Technology</p>
              <p>Where the Innovation Matters</p>
              <a href="#">
                <span>
                  <i className="far fa-play-circle"></i> Get Start
                </span>
              </a>
            </div>
            <div className="col-md-6">
              <img
                id="img-intro"
                className="rounded-lg"
                src={require('../../../assets/svg/intro.svg')}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
