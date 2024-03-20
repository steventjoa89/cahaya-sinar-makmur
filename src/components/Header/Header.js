import React, { useEffect, useState } from "react";
import { COMPANY_NAME, MENU_NAV } from "../../data/data";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import { ensureArray } from "../../utils/stringUtil";

function Header() {
  const { t } = useTranslation();

  const headerMenuNav = ensureArray(
    t("headerMenuNav", { returnObjects: true })
  );

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
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
            {headerMenuNav.map((menu, i) => (
              <li key={i}>
                <Link
                  to={menu.link}
                  className={`nav-link scrollto ${i === 0 && "active"}`}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            <LanguageSelector isMobileNavOpen={isMobileNavOpen} />
          </ul>
          <MdMenu className="mobile-nav-toggle" onClick={toggleMobileNav} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
