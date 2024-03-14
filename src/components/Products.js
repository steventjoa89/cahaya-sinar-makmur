import React, { useState } from "react";
import { PRODUCTS, TOTAL_PRODUCTS_OVERVIEW } from "../data/data";
import { getUniqueProductCategories, toProperCase } from "../utils/stringUtil";
import { getRandomObjectFromObjectArray } from "../utils/mathUtil";

function Products() {
  const [randomProducts] = useState(
    getRandomObjectFromObjectArray(PRODUCTS, TOTAL_PRODUCTS_OVERVIEW)
  );
  const [uniqueCategories] = useState(
    getUniqueProductCategories(randomProducts)
  );

  return (
    <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Products</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <ul
          id="portfolio-flters"
          className="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li data-filter="*" className="filter-active">
            All
          </li>
          {uniqueCategories.map((category, i) => (
            <li key={i} data-filter={`.filter-${category[0]}`}>
              {toProperCase(category)}
            </li>
          ))}
        </ul>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {randomProducts.map((product, i) => (
            <div
              key={i}
              className={`col-lg-4 col-md-6 portfolio-item ${product.category
                .map((el) => `filter-${el}`)
                .join(" ")}`}
            >
              <div className="portfolio-img">
                <img src={product.image} className="img-fluid" alt="" />
              </div>
              <div className="portfolio-info">
                <h4>{product.name}</h4>
                <p>{product.category.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
