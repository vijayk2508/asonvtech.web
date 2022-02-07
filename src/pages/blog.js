import React from "react";
import Layout from "../components/_layout";
import BlogList from "./components/blog/list";

function Blog() {
  return (
    <Layout>
      <section>
        <div class="container">
          <div class="text-center mb-5">
            {/* <h5 class="text-primary h6">Our Blog</h5> */}
            <h1 class="display-20 display-md-18 display-lg-16">
              Most recent our blog
            </h1>
          </div>
          <BlogList />
        </div>
      </section>
    </Layout>
  );
}

export default Blog;
