import React from "react";
import Layout from "../../common/Layout";

function Home() {
  return (
    <Layout>
         <h2 className="mb-5 tm-content-title">Diagoona HTML Template</h2>
          <p className="mb-5">
            Diagoona is provided by TemplateMo website. You are allowed to use
            this template for your websites. You are NOT allowed to redistribute
            this template ZIP file for a download purpose on any template
            collection website.
          </p>
          <hr className="mb-5" />
          <p className="mb-5">
            Diagoona is Bootstrap v4.4.1 layout. This BG is 50% transparent. You
            can set the background images auto play settings (true or false in
            line number 33) in templatemo-script.js file in js folder.
          </p>
          <a href="about.html" className="btn btn-primary">
            Continue...
          </a>
    </Layout>
  );
}

export default Home;
