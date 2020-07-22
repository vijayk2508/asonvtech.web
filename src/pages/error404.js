import React from 'react'
import Layout from '../components/_layout'

function Error404() {
  return (
    <Layout>
      <div class="row bg-light" style={{ margin: 0 }}>
        <div class="col-md-12" style={{ textAlign: 'center' }}>
          <div class="section-inner bg-light" style={{ padding: '15%' }}>
            <h1 class="entry-title">Page Not Found</h1>
            <div class="intro-text">
              <p>
                The page you were looking for could not be found. It might have
                been removed, renamed, or did not exist in the first place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Error404
