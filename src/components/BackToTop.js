import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollUtil";

function BackToTop() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      to="#"
      className={`back-to-top d-flex align-items-center justify-content-center ${
        isScrolled && "active"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="bi active" color="white" />
    </Link>
  );
}

export default BackToTop;
