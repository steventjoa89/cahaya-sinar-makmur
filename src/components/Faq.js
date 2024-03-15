import React from "react";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Faq() {
  const faqs = [
    {
      question: "What products does PT Cahaya Sinar Makmur offer?",
      answer:
        "PT Cahaya Sinar Makmur offers a wide range of chemical products for various industries, including pharmaceuticals, agriculture, manufacturing, and more. Our product portfolio includes solvents, acids, bases, and specialty chemicals, among others.",
    },
    {
      question:
        "How long has PT Cahaya Sinar Makmur been in the chemical distribution industry?",
      answer:
        "PT Cahaya Sinar Makmur has been in the chemical distribution industry for over 20 years, establishing ourselves as a trusted and reliable partner for businesses in need of high-quality chemical solutions.",
    },
    {
      question:
        "What are PT Cahaya Sinar Makmur's core values and commitments to its customers?",
      answer:
        "Our core values include integrity, excellence, and customer satisfaction. We are committed to providing our customers with the highest quality products, exceptional customer service, and innovative solutions to meet their needs.",
    },
    {
      question:
        "What sets PT Cahaya Sinar Makmur apart from other chemical distributors?",
      answer:
        "We differentiate ourselves through our commitment to quality, customer service, and sustainability. Our focus on delivering high-quality products, personalized customer service, and sustainable practices sets us apart as a trusted partner in the chemical distribution industry.",
    },
    {
      question: "What industries does PT Cahaya Sinar Makmur serve?",
      answer:
        "We serve a wide range of industries, including pharmaceuticals, agriculture, manufacturing, and more. Our diverse product portfolio caters to the unique needs of each industry, providing them with high-quality chemical solutions.",
    },
  ];

  return (
    <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
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
