import React from "react";
import { PRODUCT_CATEGORIES } from "../data/data";
import { toProperCase } from "../utils/stringUtil";
import { Link } from "react-router-dom";

function Products() {
  return (
    <section id="product" className="product">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Products</h2>
          <p>
            Explore a wide selection of premium chemical products from our
            company, designed to support and advance your industry's
            development.
          </p>
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
                  <img src={category.image} className="img-fluid" alt="" />
                </div>
                <div className="product-info">
                  <p>{toProperCase(category.name)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Link to="/products" className="btn-show-more">
          Explore
        </Link>
      </div>
    </section>
  );
}

export default Products;
