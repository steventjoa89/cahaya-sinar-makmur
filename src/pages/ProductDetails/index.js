import React from "react";
import HeaderStatic from "../../components/Header/HeaderStatic";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop";
import BreadCrumb from "../../components/BreadCrumb";

function ProductDetailsPage() {
  return (
    <>
      <HeaderStatic activeMenu="product" />
      <main id="main" style={{ borderBottom: "2px solid #f3f5fa" }}>
        {/* TODO: NESTED BREADCRUMB */}
        <BreadCrumb breadCrumbPath={["Product", "Product-1"]} />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default ProductDetailsPage;
