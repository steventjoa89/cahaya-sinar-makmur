import React from "react";
import { COMPANY_NAME } from "../data/data";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { addLeadingZero } from "../utils/mathUtil";

function WhyUs() {
  const whyUsQnAs = [
    {
      question: "How do you ensure the quality of your chemical products?",
      answer:
        "We adhere to rigorous quality control procedures at every stage of our supply chain, from sourcing to delivery. Our products are strictly evaluated to ensure they meet international safety and quality standards, providing our clients with the best chemical solutions available.",
    },
    {
      question:
        "How does your customer service set you apart from competitors?",
      answer:
        "Our customer service is unparalleled, focusing on personalized support and swift responses. Our team is dedicated to providing expert guidance and efficient solutions, ensuring your needs are met promptly and effectively, every time.",
    },
    {
      question:
        "Why is PT. Cahaya Sinar Makmur a trusted name in the chemical distribution industry?",
      answer:
        "With decades of experience, PT. Cahaya Sinar Makmur has established itself as a reliable partner in the chemical distribution field. Our deep industry knowledge, extensive network, and commitment to sustainability make us a trusted choice for businesses looking for responsible and efficient chemical solutions.",
    },
    {
      question:
        "What additional benefits do clients gain by partnering with you?",
      answer:
        "Clients benefit from our comprehensive approach to chemical distribution, which includes competitive pricing and a robust product portfolio. We also offer logistical support and inventory management, making the procurement process seamless and cost-effective.",
    },
  ];

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3>
                Why choose&nbsp;
                <strong>{COMPANY_NAME}</strong>
                &nbsp;?
              </h3>
              <p>
                In Indonesia, PT. Cahaya Sinar Makmur stands out as a leading
                company in chemical distribution excellence. Our commitment to
                providing high-quality products, paired with unparalleled
                customer service, positions us as the premier choice for all
                your chemical requirements.
              </p>
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
