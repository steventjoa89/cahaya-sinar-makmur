import React from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ensureArray } from "../utils/stringUtil";

function Faq() {
  const { t } = useTranslation();

  const faqs = ensureArray(t("homePage.faq.faqs", { returnObjects: true }));

  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("homePage.faq.title")}</h2>
        </div>

        <div className="faq-list">
          <ul>
            {faqs.map((faq, i) => (
              <li
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${(i + 1) * 100}`}
              >
                {/* <i className="bx bx-help-circle icon-help"></i>{" "} */}
                <IoMdHelpCircleOutline className="icon-help" />{" "}
                <Link
                  data-bs-toggle="collapse"
                  className={`${i === 0 ? "collapse" : ""}`}
                  data-bs-target={`#faq-list-${i}`}
                >
                  {faq.question}{" "}
                  <FaChevronUp className="bx chevron-icon icon-close" />
                  <FaChevronDown className="bx chevron-icon icon-show" />
                </Link>
                <div
                  id={`faq-list-${i}`}
                  className={`${i === 0 ? "collapse show" : "collapse"}`}
                  data-bs-parent=".faq-list"
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Faq;
