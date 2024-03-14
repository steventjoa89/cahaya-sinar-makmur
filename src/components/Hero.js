import React from "react";
import { Link } from "react-router-dom";

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
            <h1>Better Chemical Supplier For Your Business</h1>
            <h2>
              We are a company that fulfill all of your business chemical needs.
            </h2>
            {/* col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate */}
            <div className="d-flex justify-content-center">
              <Link to="#about" className="btn-get-started scrollto">
                Company Profile
              </Link>
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
