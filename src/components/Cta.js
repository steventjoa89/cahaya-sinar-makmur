import React from "react";
import { useTranslation } from "react-i18next";

function Cta() {
  const { t } = useTranslation();

  return (
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>{t("contactUs")}</h3>
            <p> {t("homePage.cta.description")}</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a
              className="cta-btn align-middle"
              href="https://wa.me/6281905875858"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
