import React from "react";
import { COMPANY_NAME } from "../../data/info";

function FooterBottom() {
  return (
    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>{COMPANY_NAME}</span>
        </strong>
        .
      </div>
    </div>
  );
}

export default FooterBottom;
