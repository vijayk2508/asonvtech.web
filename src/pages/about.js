import React from 'react'
import Layout from '../components/_layout'
import Heading from '../components/_common/heading'
import Team from './components/home/team'

function About() {
  return (
    <Layout>
      <Heading title="About Us"></Heading>
      <div className="about">
        <div className="container">
          <p style={{ textAlign: 'justify' }}>
            AsonvTech is mainly specialised in Web Development and Application
            Development services, along with Digital Marketing and SEO. A
            Start-up with innovative minds designed to provide effortless
            digital services in just one go. Losing expensive time is not an
            option while searching for each particular asset at different
            individual sources when AsonvTech is ready with a cause. We
            associate with clients to serve them as their autogenous agent
            providing with what requires to construct a software. Along with
            several software construction services, we take a remarkable
            integrated approach towards digital marketing as well as SEO.
          </p>
          <br />
          <p style={{ textAlign: 'justify' }}>
            We are a team of critical, creative, and technical brains assuring
            that you resort to all sorts of services with the idea of building
            trust. At AsonvTech, we understand that time is valuable to you so
            as your company. Hence, with a string of software services, we are
            also lenient in providing IT and business solutions to help you grow
            your firm in a valuable way. Enabling affordable access to various
            other services such as Re-web designing, mobile app development,
            Cloud services, AI, as well as Machine Learning are also listed to
            providing services in a single source with the most lenient and
            minimal price range than the rest.
          </p>
          <br />
          <p style={{ textAlign: 'justify' }}>
            Other than the technical services, our Content and Digital Marketing
            veterans assure your visibility to your target audience as well as
            help you get them engaged on social media and remarketing, to
            increase your chances to build a new face for your firm.
          </p>
        </div>
        <Team></Team>
      </div>
    </Layout>
  )
}

export default About
