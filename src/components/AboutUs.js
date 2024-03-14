import React from "react";
import { Link } from "react-router-dom";
import { ABOUT_US_HOME } from "../data/info";

function AboutUs() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            {ABOUT_US_HOME.slice(0, 3).map((about_us, i) => (
              <p key={i}>{about_us}</p>
            ))}
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            {ABOUT_US_HOME.slice(3, 4).map((about_us, i) => (
              <p key={i}>{about_us}</p>
            ))}
            <Link to="/about-us" className="btn-learn-more">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
