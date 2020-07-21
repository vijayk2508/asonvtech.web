import React from 'react'
import Layout from '../components/_layout'
import Heading from '../components/_common/heading'

function About() {
  return (
    <Layout>
      <Heading title="About Us"></Heading>
      <div className="about">
        <div className="container">
          <p className="justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
