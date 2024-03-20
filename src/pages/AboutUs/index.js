import React from "react";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop";
import HeaderStatic from "../../components/Header/HeaderStatic";
import BreadCrumb from "../../components/BreadCrumb";
import { useTranslation } from "react-i18next";

function AboutUsPage() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderStatic activeMenu="about" />
      <main id="main" style={{ borderBottom: "2px solid #f3f5fa" }}>
        <BreadCrumb breadCrumbPath={[t("aboutUs")]} />

        <section className="inner-page" style={{ paddingTop: "30px" }}>
          <div className="container" style={{ textAlign: "left" }}>
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-12 pt-4 pt-lg-0">
                <h2>{t("aboutUsPage.ourGoalsTitle")}</h2>
                <p>{t("aboutUsPage.goalsDecription1")}</p>
                <p>{t("aboutUsPage.goalsDecription2")}</p>
                <p>{t("aboutUsPage.goalsDecription3")}</p>
                <p>{t("aboutUsPage.goalsDecription4")}</p>
                <p>{t("aboutUsPage.goalsDecription5")}</p>
              </div>
            </div>

            <div
              className="row"
              data-aos="fade-up"
              data-aos-delay={200}
              style={{ marginTop: "20px" }}
            >
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h2>{t("aboutUsPage.ourVision")}</h2>
                <p>{t("aboutUsPage.ourVisionDesc")}</p>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h2>{t("aboutUsPage.ourMission")}</h2>
                <p>{t("aboutUsPage.ourMissionDesc")}</p>
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
