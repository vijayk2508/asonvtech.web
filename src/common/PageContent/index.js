import React from "react";
import { withRouter } from "react-router-dom";

function PageContent(props) {
  const { section_className, main_className, children } = props;
  return (
    <div className="tm-row">
      <div className="tm-col-left"></div>
      <main className={`tm-col-right ${main_className}`}>
        <section className={`tm-content ${section_className}`}>
          {children}
        </section>
      </main>
    </div>
  );
}

PageContent.defaultProps = {
  section_className: "",
  main_className: "",
};

export default (PageContent);
