import React from "react";

function Cta() {
  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Contact Us</h3>
            <p>
              {" "}
              For inquiries, partnerships, or to learn more about our chemical
              products and services, please feel free to contact us. Our
              dedicated team is ready to assist you and provide the information
              you need. You can reach us via phone or email. We look forward to
              hearing from you and discussing how we can support your business
              needs.
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a
              className="cta-btn align-middle"
              href="https://wa.me/6281905875858"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
