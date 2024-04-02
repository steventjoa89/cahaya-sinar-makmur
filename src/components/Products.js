import React from "react";
import { PRODUCT_CATEGORIES } from "../data/data";
import { toProperCase } from "../utils/stringUtil";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation();

  return (
    <section id="product" className="product">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("products")}</h2>
          <p>{t("homePage.product.description")}</p>
        </div>

        <div
          className="row product-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {PRODUCT_CATEGORIES.map((category, i) => (
            <div key={i} className="col-lg-3 col-md-6 product-item">
              <Link to="/products">
                <div className="product-img">
                  <img
                    src={process.env.PUBLIC_URL + category.image}
                    className="img-fluid"
                    alt={category.name}
                  />
                </div>
                <div className="product-info">
                  <p>{toProperCase(category.name)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Link to="/products" className="btn-show-more">
          {t("seeMore")}
        </Link>
      </div>
    </section>
  );
}

export default Products;
