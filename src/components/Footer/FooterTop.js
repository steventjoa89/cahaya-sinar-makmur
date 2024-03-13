import React from "react";
import {
  COMPANY_ADDRESS,
  COMPANY_ADDRESS_2,
  COMPANY_ADDRESS_3,
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_PHONE,
  OUR_SERVICES,
  USEFUL_LINKS,
} from "../../data/info";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

function FooterTop() {
  return (
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 footer-contact">
            <h3>{COMPANY_NAME}</h3>
            <p>
              {COMPANY_ADDRESS} <br />
              {COMPANY_ADDRESS_2}
              <br />
              {COMPANY_ADDRESS_3} <br />
              <br />
              <strong>Phone:</strong> {COMPANY_PHONE}
              <br />
              <strong>Email:</strong> {COMPANY_EMAIL}
              <br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              {USEFUL_LINKS.map((link, i) => (
                <li key={i}>
                  <FaChevronRight className="chevron-icon" size={12} />
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              {OUR_SERVICES.map((link, i) => (
                <li key={i}>
                  <FaChevronRight className="chevron-icon" size={12} />
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
