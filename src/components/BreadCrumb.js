import React from "react";
import { Link } from "react-router-dom";
import { toProperCase } from "../utils/stringUtil";
import { useTranslation } from "react-i18next";

function BreadCrumb({ breadCrumbPath = ["page"] }) {
  const { t } = useTranslation();

  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          {breadCrumbPath.map((bc, i) => (
            <li key={i}>{toProperCase(bc)}</li>
          ))}
        </ol>
        <h2>{toProperCase(breadCrumbPath[breadCrumbPath.length - 1])}</h2>
      </div>
    </section>
  );
}

export default BreadCrumb;
