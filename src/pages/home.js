/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Layout from "../components/_layout";
import WhatWeDo from "./components/home/whatwedo";
import Banner from "./components/home/banner";
import OurMotive from "./components/home/ourmotive";
import UserSupport from "./components/home/usersupport";

function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <WhatWeDo></WhatWeDo>
      <OurMotive></OurMotive>
      <UserSupport></UserSupport>
    </Layout>
  );
}

export default Home;
