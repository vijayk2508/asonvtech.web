import React from "react";

function Footer() {
  return (
    <>
      <div class="tm-row">
        <div class="tm-col-left text-center">
          <ul class="tm-bg-controls-wrapper">
            <li class="tm-bg-control active" data-id="0"></li>
            <li class="tm-bg-control" data-id="1"></li>
            <li class="tm-bg-control" data-id="2"></li>
          </ul>
        </div>
        <div class="tm-col-right tm-col-footer">
          <footer class="tm-site-footer text-right">
            <p class="mb-0">
              Copyright 2020 Diagoona Co. | Design:{" "}
              <a href="https://templatemo.com" class="tm-text-link">
                TemplateMo
              </a>
            </p>
          </footer>
        </div>
      </div>

      <div class="tm-bg">
        <div class="tm-bg-left"></div>
        <div class="tm-bg-right"></div>
      </div>
    </>
  );
}

export default Footer;
