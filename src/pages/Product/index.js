import React, { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import Masonry from "react-masonry-css";
import {
  getProductsByFirstLetter,
  getproductsFirstLetterFromProductsArr,
  toProperCase,
} from "../../utils/stringUtil";
import { PRODUCTS } from "../../data/data";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function ProductPage() {
  const { t } = useTranslation();

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [searchText, setSearchText] = useState("");

  // Products and Filtered Products
  const filteredProducts =
    searchText.trim() !== ""
      ? PRODUCTS.filter((product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        )
      : PRODUCTS;
  const productsFirstLetter =
    getproductsFirstLetterFromProductsArr(filteredProducts);

  return (
    <main id="main" style={{ borderBottom: "2px solid #f3f5fa" }}>
      <BreadCrumb breadCrumbPath={[t("products")]} />
      {/* <BreadCrumb breadCrumbPath={[t("aboutUs")]} /> */}

      <section id="product" className="product" style={{ paddingTop: 0 }}>
        <div
          className="container"
          data-aos="fade-up"
          style={{ paddingBottom: 30 }}
        >
          <div className="row justify-content-end">
            <div className="col-lg-3">
              <div className="input-group">
                <input
                  className="form-control border-end-0 border rounded-pill"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  placeholder={t("searchProductPlaceholder") + "..."}
                />
                {searchText && (
                  <button
                    type="button"
                    className="btn border-0 rounded-pill"
                    style={{ marginLeft: "-40px", zIndex: 100 }}
                    onClick={() => setSearchText("")}
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container" data-aos="fade-up">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {productsFirstLetter.map((letter, i) => (
              <div key={i} className="mt-4 mt-lg-0">
                <div className="box featured">
                  <h3>{toProperCase(letter)}</h3>
                  <ul>
                    {getProductsByFirstLetter(filteredProducts, letter).map(
                      (product, j) => (
                        <li key={j}>
                          <span className="product-name">{product.name}</span>
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
  );
}

export default ProductPage;
