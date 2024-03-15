import React from "react";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop";
import HeaderStatic from "../../components/Header/HeaderStatic";
import BreadCrumb from "../../components/BreadCrumb";

function AboutUsPage() {
  return (
    <>
      <HeaderStatic activeMenu="about" />
      <main id="main" style={{borderBottom: '2px solid #f3f5fa'}}>
        <BreadCrumb breadCrumbPath={["About Us"]} />

        <section className="inner-page" style={{ paddingTop: "30px" }}>
          <div className="container" style={{ textAlign: "left" }}>
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-12 pt-4 pt-lg-0">
                <h2>Our Goals</h2>
                <p>
                  PT. Cahaya Sinar Makmur is a renowned leader in the chemical
                  industry, specializing in the import and distribution of
                  high-quality products from our headquarters in Jakarta,
                  Indonesia.
                </p>

                <p>
                  Established in May 1989, PT Cahaya Sinar Makmur is dedicated
                  to providing superior chemical solutions that bolster the
                  local manufacturing sector. Our commitment to quality ensures
                  that our products meet or exceed international standards, all
                  while remaining competitively priced.
                </p>
                <p>
                  At PT. Cahaya Sinar Makmur, we adhere to the principle of
                  being a trusted partner to our clients. This commitment
                  extends beyond product quality to encompass exceptional
                  service and support. Our success is underpinned by seven
                  foundational pillars, upheld by our dedicated and motivated
                  team.
                </p>
                <p>
                  Driven by our founder's vision of fostering strong customer
                  relationships, we take pride in the long-standing satisfaction
                  of our clients. Over the past 30 years, we have cultivated a
                  strong sense of family within our organization, united in our
                  pursuit of excellence and our shared dream of success.
                </p>
                <p>
                  PT. Cahaya Sinar Makmur's commitment to excellence extends
                  beyond product quality to include a strong emphasis on
                  environmental sustainability. We prioritize eco-friendly
                  practices in our operations, ensuring that our impact on the
                  environment is minimized. Additionally, our dedication to
                  innovation and continuous improvement drives us to constantly
                  explore new technologies and methodologies to better serve our
                  customers and the community. Our goal is not only to be a
                  leader in the chemical industry but also a responsible
                  corporate citizen contributing positively to society and the
                  environment.
                </p>
              </div>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay={200} style={{ marginTop: "20px" }}>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h2>Our Vision</h2>
                <p>
                  To be the leading importer and distributor of chemicals,
                  renowned for our commitment to quality, reliability, and
                  sustainability. We strive to exceed customer expectations,
                  foster innovation, and contribute positively to the industry
                  and society as a whole.
                </p>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h2>Our Mission</h2>
                <p>
                  Our mission is to reliably source and supply high-quality
                  chemicals, meeting the diverse needs of our customers. We are
                  dedicated to fostering long-term partnerships, delivering
                  exceptional value, and upholding the highest standards of
                  safety and environmental responsibility. Through continuous
                  innovation and operational excellence, we aim to be the
                  preferred choice for chemical solutions worldwide.
                </p>
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

export default AboutUsPage;
