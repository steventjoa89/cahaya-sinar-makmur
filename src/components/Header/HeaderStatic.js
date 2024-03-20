import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_NAME, MENU_NAV } from "../../data/data";
import { MdMenu } from "react-icons/md";
import LanguageSelector from "./LanguageSelector";

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
            {MENU_NAV.map((menu, i) => (
              <li key={i}>
                <Link
                  to={menu.link}
                  className={`nav-link scroll-to ${
                    activeMenu === (menu.menuName || "") && "active"
                  }`}
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

export default HeaderStatic;
