import React from "react";
import { scrollToElement } from "../utils/customUtil";

function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Chemical Supplier For Your Business Needs</h1>
            <h2>
              We provide comprehensive solutions for all your business's
              chemical requirements.
            </h2>
            <div className="d-flex justify-content-center">
              <div
                to="#about"
                className="btn-get-started scrollto"
                onClick={() => scrollToElement("about")}
                style={{ cursor: "pointer" }}
              >
                About Us
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="/images/hero-img.png"
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
