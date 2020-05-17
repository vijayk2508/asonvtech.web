import React from "react";
import { withRouter } from "react-router-dom";
import Left from "./Left";
import Right from "./Right";

function Header() {
  return (
    <>
      <div className="tm-row pt-4">
        <Left></Left>
        <Right></Right>
      </div>
    </>
  );
}

export default Header;
