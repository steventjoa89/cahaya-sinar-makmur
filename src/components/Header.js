import React, { useEffect, useState } from "react";
import { COMPANY_NAME } from "../data/info";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Toggle .header-scrolled class to #header when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      // Check if document is scrolled (i.e., scroll position is greater than 0)
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up: Remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
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
              <Link to="#hero" className="nav-link scrollto active">
                Home
              </Link>
            </li>
            <li>
              <Link to="#about" className="nav-link scrollto">
                About
              </Link>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
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
