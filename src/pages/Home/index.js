import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Clients from "../../components/Clients";
import AboutUs from "../../components/AboutUs";
import WhyUs from "../../components/WhyUs";
import Services from "../../components/Services";
import Faq from "../../components/Faq";
import Products from "../../components/Products";
import Cta from "../../components/Cta";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <div id="main">
        <Clients />
        <AboutUs />
        <WhyUs />
        <Services />
        <Cta />
        <Products />
        <Faq />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
