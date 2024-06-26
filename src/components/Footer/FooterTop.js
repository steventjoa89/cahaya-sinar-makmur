import React from "react";
import {
  COMPANY_ADDRESS,
  COMPANY_ADDRESS_2,
  COMPANY_ADDRESS_3,
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_PHONE,
} from "../../data/data";
import { Link } from "react-router-dom";
import { FaChevronRight, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ensureArray } from "../../utils/stringUtil";

function FooterTop() {
  const { t } = useTranslation();

  const headerMenuNav = ensureArray(
    t("headerMenuNav", { returnObjects: true })
  );

  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 footer-contact">
            <h3>{COMPANY_NAME}</h3>
            <p>
              {COMPANY_ADDRESS} <br />
              {COMPANY_ADDRESS_2}
              <br />
              {COMPANY_ADDRESS_3} <br />
              <br />
              <strong>{t("phone")}:</strong> {COMPANY_PHONE}
              <br />
              <strong>{t("email")}:</strong> {COMPANY_EMAIL}
              <br />
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>{t("footer.usefulLinks")}</h4>
            <ul>
              {headerMenuNav.map((link, i) => (
                <li key={i}>
                  <FaChevronRight className="chevron-icon" size={12} />
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links"></div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>{t("footer.ourSocialNetworks")}</h4>
            <div className="social-links mt-1" style={{ textAlign: "left" }}>
              <a
                href="https://g.page/r/CZ7e1vbJmx5jEAE"
                target="_blank"
                rel="noopener noreferrer"
                className="google-plus"
              >
                <FaGoogle className="bx" />
              </a>
              <a
                href="https://www.linkedin.com/company/cahaya-sinar-makmur/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <FaLinkedin className="bx" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
