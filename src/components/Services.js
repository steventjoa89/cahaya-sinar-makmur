import React from "react";
import { SERVICES_ITEMS } from "../data/data";

function Services() {
  const splitPoint = 4;

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
        </div>

        {[...Array(Math.ceil(SERVICES_ITEMS.length / splitPoint))].map(
          (_, outerIdx) => (
            <div key={outerIdx} className="row">
              {SERVICES_ITEMS.slice(
                outerIdx * splitPoint,
                outerIdx * splitPoint + splitPoint
              ).map((service, innerIdx) => {
                let colSize = "3";
                if (
                  outerIdx ===
                  Math.ceil(SERVICES_ITEMS.length / splitPoint) - 1
                ) {
                  colSize =
                    SERVICES_ITEMS.length % splitPoint === 3
                      ? "4"
                      : SERVICES_ITEMS.length % splitPoint === 2
                      ? "6"
                      : SERVICES_ITEMS.length % splitPoint === 1
                      ? "12"
                      : colSize;
                }

                return (
                  <div
                    key={innerIdx}
                    className={`col-xl-${colSize} col-md-6 d-flex align-items-stretch`}
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    style={{ paddingTop: "20px" }}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <div className="icon-service">{service.icon}</div>
                      </div>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        )}

        {/* <div className="row">
          {SERVICES_ITEMS.slice(0, 4).map((service, i) => (
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
        <div className="row" style={{ paddingTop: "20px" }}>
          {SERVICES_ITEMS.slice(4, 5).map((service, i) => (
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
        </div> */}
      </div>
    </section>
  );
}

export default Services;
