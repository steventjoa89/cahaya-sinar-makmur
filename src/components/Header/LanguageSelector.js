import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import Flag from "react-flagkit";

function LanguageSelector() {
  const [isDropDownActive, setIsDropDownActive] = useState(false);
  const { t, i18n } = useTranslation();

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
    // document.getElementById("dropdown").click();
  };

  return (
    <li className="dropdown">
      <div>
        <Flag country="US" size={18} /> &nbsp;
        <FaChevronDown size={12} style={{ lineHeight: 0, marginLeft: "5px" }} />
      </div>
      <ul className="dropdown-active">
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
