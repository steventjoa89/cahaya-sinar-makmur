import React from "react";
import { COMPANY_NAME } from "../../data/data";

function FooterBottom() {
  return (
    <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright&nbsp;2021&nbsp;
        <strong>
          <span>{COMPANY_NAME}</span>
        </strong>
        .&nbsp;All Rights Reserved
      </div>
    </div>
  );
}

export default FooterBottom;
