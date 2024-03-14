import React from "react";
import { SERVICES_DESCRIPTION, SERVICES_ITEMS } from "../data/info";

function Services() {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>{SERVICES_DESCRIPTION}</p>
        </div>

        <div className="row">
          {SERVICES_ITEMS.map((service, i) => (
            <div
              key={i}
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="icon-box">
                <div className="icon">
                  <div className="icon-service">{service.icon}</div>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
