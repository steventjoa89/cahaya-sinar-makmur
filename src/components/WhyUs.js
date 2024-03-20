import React from "react";
import { COMPANY_NAME } from "../data/data";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { addLeadingZero } from "../utils/mathUtil";
import { useTranslation } from "react-i18next";
import { ensureArray } from "../utils/stringUtil";

function WhyUs() {
  const { t } = useTranslation();

  const whyUsQnAs = ensureArray(
    t("homePage.whyUs.whyUsQnAs", { returnObjects: true })
  );

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3>
                {t("homePage.whyUs.title")}&nbsp;
                <strong>{COMPANY_NAME}</strong>
                &nbsp;?
              </h3>
              <p>{t("homePage.whyUs.description")}</p>
            </div>

            <div className="accordion-list">
              <ul>
                {whyUsQnAs.map((qna, i) => (
                  <li key={i}>
                    <Link
                      data-bs-toggle="collapse"
                      className={`${i === 0 ? "collapse" : ""}`}
                      data-bs-target={`#accordion-list-${i}`}
                    >
                      <span>{addLeadingZero(i + 1)}.</span>
                      {qna.question}{" "}
                      <FaChevronUp className="bx chevron-icon icon-close" />
                      <FaChevronDown className="bx chevron-icon icon-show" />
                    </Link>
                    <div
                      id={`accordion-list-${i}`}
                      className={`${i === 0 ? "collapse show" : "collapse"}`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>{qna.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
