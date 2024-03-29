import React from "react";
import Hero from "../../components/Hero";
import AboutUs from "../../components/AboutUs";
import WhyUs from "../../components/WhyUs";
import Services from "../../components/Services";
import Faq from "../../components/Faq";
import Products from "../../components/Products";
import Cta from "../../components/Cta";

function HomePage() {
  return (
    <>
      <Hero />
      <div id="main">
        <AboutUs />
        <WhyUs />
        <Services />
        <Products />
        <Cta />
        <Faq />
      </div>
    </>
  );
}

export default HomePage;
