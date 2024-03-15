import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero";
import AboutUs from "../../components/AboutUs";
import WhyUs from "../../components/WhyUs";
import Services from "../../components/Services";
import Faq from "../../components/Faq";
import Products from "../../components/Products";
import Cta from "../../components/Cta";
import BackToTop from "../../components/BackToTop";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <div id="main">
        <AboutUs />
        <WhyUs />
        <Services />
        <Products />
        <Cta />
        <Faq />
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

export default HomePage;
