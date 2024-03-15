import React, { useEffect, useState } from "react";
import { COMPANY_NAME } from "../data/data";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { scrollToElement, scrollToTop } from "../utils/scrollUtil";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [navbarPosition, setNavbarPosition] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    const navbarlinksActive = () => {
      const scrollY = window.scrollY + 200;
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const navbarHeight = document.getElementById("navbar").offsetHeight;
        // Loop through each section and check if it's in view
        document.querySelectorAll("section").forEach((section) => {
          const sectionTop = section.offsetTop - navbarHeight;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            setNavbarPosition(section.id);
          }
        });
      }
    };

    // window.addEventListener("scroll", [handleScroll, a]);
    window.addEventListener("scroll", () => {
      handleScroll();
      navbarlinksActive();
    });
    return () =>
      window.removeEventListener("scroll", () => {
        handleScroll();
        navbarlinksActive();
      });
  }, []);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <header
      id="header"
      className={`fixed-top ${isScrolled && "header-scrolled"}`}
    >
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
              <div
                className={`nav-link scrollto ${
                  navbarPosition === "hero" && "active"
                }`}
                onClick={() => scrollToTop()}
              >
                Home
              </div>
            </li>
            <li>
              <div
                data-track="about"
                className={`nav-link scrollto ${
                  navbarPosition === "about" && "active"
                }`}
                onClick={() => scrollToElement("about")}
              >
                About Us
              </div>
            </li>
            <li>
              <div
                data-track="product"
                className={`nav-link scrollto ${
                  navbarPosition === "product" && "active"
                }`}
                onClick={() => scrollToElement("product")}
              >
                Products
              </div>
            </li>
            <li>
              <div
                data-track="cta"
                className={`nav-link scrollto ${
                  navbarPosition === "cta" && "active"
                }`}
                onClick={() => scrollToElement("cta")}
              >
                Contact Us
              </div>
            </li>
          </ul>
          {/* <i className="bi bi-list mobile-nav-toggle"></i> */}
          <MdMenu className="mobile-nav-toggle" onClick={toggleMobileNav} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
