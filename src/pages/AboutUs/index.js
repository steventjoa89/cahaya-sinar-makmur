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
                <h2>{t("ourGoalsTitle")}</h2>
                <p>{t("goalsDecription1")}</p>
                <p>{t("goalsDecription2")}</p>
                <p>{t("goalsDecription3")}</p>
                <p>{t("goalsDecription4")}</p>
                <p>{t("goalsDecription5")}</p>
              </div>
            </div>

            <div
              className="row"
              data-aos="fade-up"
              data-aos-delay={200}
              style={{ marginTop: "20px" }}
            >
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h2>{t("ourVision")}</h2>
                <p>{t("ourVisionDesc")}</p>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <h2>{t("ourMission")}</h2>
                <p>{t("ourMissionDesc")}</p>
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
