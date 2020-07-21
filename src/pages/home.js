/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from '../components/_layout'
import WhatWeDo from './components/home/whatwedo'
import Team from './components/home/team'
import Banner from './components/home/banner'


function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <WhatWeDo></WhatWeDo>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us page</h1>
              <p className="lead text-muted mb-0">
                Create a minimal about us page using Bootstrap 4.
              </p>
              <p className="lead text-muted">
                Snippet by{' '}
                <a href="#" className="text-muted">
                  <u>Bootstrapious</u>
                </a>
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src={require('../assets/images/illus_kftyh4.png')}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src={require('../assets/images/img-1_e25nvh.jpg')}
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src={require('../assets/images/img-2_vdgqgn.jpg')}
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
