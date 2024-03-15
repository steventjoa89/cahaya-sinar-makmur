import React from "react";
import HeaderStatic from "../../components/Header/HeaderStatic";
import Footer from "../../components/Footer/Footer";
import BackToTop from "../../components/BackToTop";
import BreadCrumb from "../../components/BreadCrumb";
import Masonry from "react-masonry-css";
import {
  getProductsByCategory,
  getUniqueCategoriesFromProductsArr,
  toProperCase,
} from "../../utils/stringUtil";
import { PRODUCTS } from "../../data/data";
import { Link } from "react-router-dom";

function ProductPage() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const uniqueProductCategories = getUniqueCategoriesFromProductsArr(PRODUCTS);

  return (
    <>
      <HeaderStatic activeMenu="product" />
      <main id="main" style={{ borderBottom: "2px solid #f3f5fa" }}>
        <BreadCrumb breadCrumbPath={["Products"]} />

        <section id="product" className="product">
          <div className="container" data-aos="fade-up">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {uniqueProductCategories.map((category, i) => (
                <div key={i} className="mt-4 mt-lg-0" data-aos="fade-up">
                  <div className="box featured">
                    <h3>{toProperCase(category)}</h3>
                    <ul>
                      {getProductsByCategory(PRODUCTS, category).map(
                        (product, j) => (
                          <li key={j}>
                            <Link to={`/products/${product.id}`}>
                              {product.name}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default ProductPage;
