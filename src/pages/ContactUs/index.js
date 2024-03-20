import React from "react";
import HeaderStatic from "../../components/Header/HeaderStatic";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  COMPANY_ADDRESS,
  COMPANY_ADDRESS_2,
  COMPANY_ADDRESS_3,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from "../../data/data";
import { useTranslation } from "react-i18next";

function ContactUsPage() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderStatic activeMenu="contact" />
      <main id="main" style={{ borderBottom: "2px solid #f3f5fa" }}>
        <BreadCrumb breadCrumbPath={[t("contactUs")]} />

        <section id="contact" className="contact">
          <div
            className="container"
            data-aos="fade-up"
            style={{ paddingBottom: 30 }}
          >
            <div className="section-title">
              <h2>{t("contactUs")}</h2>
              <p>{t("contactUsPage.contactUsDescription")}</p>
            </div>

            <div className="row">
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <div className="address">
                    <FaMapMarkerAlt className="icon" />
                    <h4>{t("location")}:</h4>
                    <p>
                      {COMPANY_ADDRESS}
                      <br />
                      {COMPANY_ADDRESS_2}, {COMPANY_ADDRESS_3}
                    </p>
                  </div>

                  <div className="email">
                    <FaEnvelope className="icon" />
                    <h4>{t("email")}:</h4>
                    <p>{COMPANY_EMAIL}</p>
                  </div>

                  <div className="phone">
                    <FaPhoneAlt className="icon" />
                    <h4>{t("call")}:</h4>
                    <p>{COMPANY_PHONE}</p>
                  </div>
                </div>
              </div>
              {/* Google Maps */}
              <div className="col-lg-7 d-flex align-items-stretch">
                <iframe
                  src="https://maps.google.com/maps?q=Jl.%20Pejagalan%20Raya%20No.85K&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  allowFullScreen={true}
                  title="Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default ContactUsPage;
