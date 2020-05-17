import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import PageContent from "../PageContent";
import { withRouter } from "react-router-dom";

function Layout(props) {
  return (
    <div class="tm-container">
      <Header></Header>
      <PageContent {...props}></PageContent>
      <Footer></Footer>
    </div>
  );
}

export default (Layout);
