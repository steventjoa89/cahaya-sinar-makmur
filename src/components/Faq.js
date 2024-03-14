import React from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { FAQS } from "../data/info";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Faq() {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="faq-list">
          <ul>
            {FAQS.map((faq, i) => (
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
