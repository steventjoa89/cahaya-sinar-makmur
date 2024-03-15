import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../../data/data";
import { MdMenu } from "react-icons/md";

function HeaderStatic({ activeMenu = "" }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <header id="header" className="fixed-top header-inner-pages">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link to="/">{COMPANY_NAME}</Link>
        </h1>
        <nav
          id="navbar"
          className={`navbar ${
            isMobileNavOpen && "navbar-mobile bi-list bi-x"
          }`}
        >
          <ul>
            <li>
              {/* <div className="nav-link scroll-to">Home</div> */}
              <Link to="/" className="nav-link scroll-to">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`nav-link scroll-to ${
                  activeMenu === "about" && "active"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className={`nav-link scroll-to ${
                  activeMenu === "product" && "active"
                }`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className={`nav-link scroll-to ${
                  activeMenu === "contact" && "active"
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <MdMenu className="mobile-nav-toggle" onClick={toggleMobileNav} />
        </nav>
      </div>
    </header>
  );
}

export default HeaderStatic;
