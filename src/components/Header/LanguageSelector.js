import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import Flag from "react-flagkit";

function LanguageSelector({ isMobileNavOpen }) {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const { i18n } = useTranslation();

  let languages = [
    {
      code: "en",
      name: "English",
      flagCode: "us",
    },
    {
      code: "id",
      name: "Indonesia",
      flagCode: "id",
    },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  const toggleMobileLanguages = () => {
    if (isMobileNavOpen) {
      setIsDropDownActive(!isDropDownActive);
    }
  };

  const getFlagCodeByCode = (code) => {
    if (code === "en-US") return "US";
    const language = languages.find((lang) => lang.code === code);
    return language ? language.flagCode.toUpperCase() : "";
  };

  return (
    <li id="language" className="dropdown" onClick={toggleMobileLanguages}>
      <div>
        <Flag country={getFlagCodeByCode(i18n.language)} size={18} /> &nbsp;
        <FaChevronDown size={12} style={{ lineHeight: 0, marginLeft: "5px" }} />
      </div>
      <ul className={isDropDownActive ? "dropdown-active" : ""}>
        {languages.map((lang, i) => (
          <li key={i} onClick={() => changeLanguage(lang.code)}>
            <div>
              <Flag country={lang.flagCode.toUpperCase()} size={18} /> &nbsp;{" "}
              {lang.name}
            </div>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default LanguageSelector;
