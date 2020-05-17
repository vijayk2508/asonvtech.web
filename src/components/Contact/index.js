import React from "react";
import Layout from "../../common/Layout";

function Contact() {
  return (
    <Layout section_className="tm-contact" main_className="tm-contact-main">
      <h2 class="mb-4 tm-content-title">Contact Us</h2>
      <p class="mb-85">
        Etiam et egestas arcu. Fusce congue quis elit vitae commodo. Cras neque
        mauris, vehicula in ipsum sit amet, faucibus aliquam arcu.
      </p>
      <form id="contact-form" action="" method="POST">
        <div class="form-group mb-4">
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Name"
            required=""
          />
        </div>
        <div class="form-group mb-4">
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            required=""
          />
        </div>
        <div class="form-group mb-5">
          <textarea
            rows="6"
            name="message"
            class="form-control"
            placeholder="Message..."
            required=""
          ></textarea>
        </div>
        <div class="text-right">
          <button type="submit" class="btn btn-big btn-primary">
            Send It
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default Contact;