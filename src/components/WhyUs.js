import React from "react";
import {
  WHY_US_DESCRIPTION,
  WHY_US_POINTS,
  WHY_US_TITLE,
  WHY_US_TITLE_STRONG,
} from "../data/info";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { addLeadingZero } from "../utils/mathUtil";

function WhyUs() {
  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3>
                {WHY_US_TITLE}
                <strong>{WHY_US_TITLE_STRONG}</strong>
                &nbsp;?
              </h3>
              <p>{WHY_US_DESCRIPTION}</p>
            </div>

            <div className="accordion-list">
              <ul>
                {WHY_US_POINTS.map((point, i) => (
                  <li key={i}>
                    <Link
                      data-bs-toggle="collapse"
                      className={`${i === 0 ? "collapse" : ""}`}
                      data-bs-target={`#accordion-list-${i}`}
                    >
                      <span>{addLeadingZero(i + 1)}.</span>
                      {point.question}{" "}
                      <FaChevronUp className="bx chevron-icon icon-close" />
                      <FaChevronDown className="bx chevron-icon icon-show" />
                    </Link>
                    <div
                      id={`accordion-list-${i}`}
                      className={`${i === 0 ? "collapse show" : "collapse"}`}
                      data-bs-parent=".accordion-list"
                    >
                      <p>{point.answer}</p>
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
