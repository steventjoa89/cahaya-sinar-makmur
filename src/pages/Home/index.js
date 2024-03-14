import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Clients from "../../components/Clients";
import AboutUs from "../../components/AboutUs";
import WhyUs from "../../components/WhyUs";
import Services from "../../components/Services";

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
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
