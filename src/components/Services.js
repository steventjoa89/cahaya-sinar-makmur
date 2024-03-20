import React from "react";
import { IoMdSpeedometer } from "react-icons/io";
import { FaUserAlt, FaWarehouse } from "react-icons/fa";
import {
  BiCheckCircle,
  BiDollarCircle,
  BiMedal,
  BiTimeFive,
} from "react-icons/bi";
import { ensureArray } from "../utils/stringUtil";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  const serviceItems = ensureArray(
    t("homePage.services.serviceItems", { returnObjects: true })
  );
  const splitPoint = 4;

  const setServiceItemIcon = (iconName) => {
    let icon = undefined;
    switch (iconName) {
      case "BiCheckCircle":
        icon = <BiCheckCircle />;
        break;
      case "BiMedal":
        icon = <BiMedal />;
        break;
      case "BiDollarCircle":
        icon = <BiDollarCircle />;
        break;
      case "FaUserAlt":
        icon = <FaUserAlt />;
        break;
      case "BiTimeFive":
        icon = <BiTimeFive />;
        break;
      case "FaWarehouse":
        icon = <FaWarehouse />;
        break;
      case "IoMdSpeedometer":
        icon = <IoMdSpeedometer />;
        break;
      default:
        break;
    }
    return icon;
  };

  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("homePage.services.title")}</h2>
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
                          <div className="icon-service">
                            {setServiceItemIcon(service.icon)}
                          </div>
                          {/* <div className="icon-service">{service.icon}</div> */}
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
