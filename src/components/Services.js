import React from "react";
import { IoMdSpeedometer } from "react-icons/io";
import { FaUserAlt, FaWarehouse } from "react-icons/fa";
import {
  BiCheckCircle,
  BiDollarCircle,
  BiMedal,
  BiTimeFive,
} from "react-icons/bi";

function Services() {
  const serviceItems = [
    {
      icon: <BiCheckCircle />,
      title: "Quality",
      description:
        "At Cahaya Sinar Makmur, quality is at the core of everything we do. We strive to provide our customers with the highest quality chemical products.",
    },
    {
      icon: <BiMedal />,
      title: "Experience",
      description:
        "With over 20 years of experience in Indonesia, PT. Cahaya Sinar Makmur is the perfect partner for your company.",
    },
    {
      icon: <BiDollarCircle />,
      title: "Cost-Effective",
      description:
        "Why settle for costly materials when we can deliver the same quality at a lower price? Explore our special pricing options designed for your business.",
    },
    {
      icon: <FaUserAlt />,
      title: "Service Oriented",
      description:
        "Experience our customer-centric approach, where both new and existing customers receive the exceptional service they deserve.",
    },
    {
      icon: <BiTimeFive />,
      title: "On-Time Delivery",
      description:
        "Struggling to manage and track your orders? Our trained service agents guarantee on-time delivery of your goods.",
    },
    {
      icon: <FaWarehouse />,
      title: "Large Warehouse",
      description:
        "Situated near Daan Mogot road, PT. Cahaya Sinar Makmur's Indonesia Logistic Center features a sizable warehouse. Our expansive storage capacity guarantees that all chemicals comply with regulatory standards and quality requirements.",
    },
    {
      icon: <IoMdSpeedometer />,
      title: "Efficiency",
      description:
        "We believe that efficiency rests on three key pillars: Cost-effectiveness, Convenience, and Customer Satisfaction. By upholding these pillars, we ensure that we meet our efficiency standards.",
    },
  ];
  const splitPoint = 4;

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
        </div>

        {[...Array(Math.ceil(serviceItems.length / splitPoint))].map(
          (_, outerIdx) => (
            <div key={outerIdx} className="row">
              {serviceItems
                .slice(
                  outerIdx * splitPoint,
                  outerIdx * splitPoint + splitPoint
                )
                .map((service, innerIdx) => {
                  let colSize = "3";
                  if (
                    outerIdx ===
                    Math.ceil(serviceItems.length / splitPoint) - 1
                  ) {
                    colSize =
                      serviceItems.length % splitPoint === 3
                        ? "4"
                        : serviceItems.length % splitPoint === 2
                        ? "6"
                        : serviceItems.length % splitPoint === 1
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
