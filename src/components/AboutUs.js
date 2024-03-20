import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AboutUs() {
  const { t } = useTranslation();

  let aboutUsLeft =
    t("homePage.aboutUsLeftDescription", { returnObjects: true }) || [];
  if (!Array.isArray(aboutUsLeft)) {
    aboutUsLeft = [];
  }
  let aboutUsRight =
    t("homePage.aboutUsRightDescription", { returnObjects: true }) || [];
  if (!Array.isArray(aboutUsRight)) {
    aboutUsRight = [];
  }

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("aboutUs")}</h2>
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
              {t("homePage.learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
