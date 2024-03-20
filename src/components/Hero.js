import React from "react";
import { scrollToElement } from "../utils/scrollUtil";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>{t("homePage.hero.heroTitle")}</h1>
            <h2>{t("homePage.hero.heroDescription")}</h2>
            <div className="d-flex justify-content-center">
              <div
                to="#about"
                className="btn-get-started scrollto"
                onClick={() => scrollToElement("about")}
                style={{ cursor: "pointer" }}
              >
                {t("aboutUs")}
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/hero-img.png`}
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
