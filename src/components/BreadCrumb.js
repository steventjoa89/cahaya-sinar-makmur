import React from "react";
import { Link } from "react-router-dom";
import { toProperCase } from "../utils/stringUtil";

function BreadCrumb({ breadCrumbPath = ["page"] }) {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          {breadCrumbPath.map((bc, i) => (
            <li key={i}>{toProperCase(bc)}</li>
          ))}
        </ol>
        <h2>{toProperCase(breadCrumbPath.pop())}</h2>
      </div>
    </section>
  );
}

export default BreadCrumb;
