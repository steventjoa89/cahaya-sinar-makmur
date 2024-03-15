import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  const aboutUsLeft = [
    "Since its inception in May 1989, PT Cahaya Sinar Makmur has been at the forefront of the chemical distribution industry, committed to providing unparalleled chemical solutions that enhance the quality of domestically produced goods.",
    "Our steadfast dedication to excellence and innovation has established us as a trusted partner to businesses across various sectors, offering a meticulously curated selection of chemicals to meet diverse needs.",
  ];
  const aboutUsRight = [
    "With an unwavering vision to drive progress and sustainability, we empower our clients with the resources and support necessary for their success.",
    "Join us in our journey towards a brighter future, where quality chemicals lead to quality products.",
  ];

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            {aboutUsLeft.map((about, i) => (
              <p key={i}>{about}</p>
            ))}
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            {aboutUsRight.map((about, i) => (
              <p key={i}>{about}</p>
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
