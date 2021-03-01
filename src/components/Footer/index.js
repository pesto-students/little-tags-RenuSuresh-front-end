import { Grid } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import Contact from "./Contact";
import Terms from "./Terms";
import QuickLinks from "./QuickLinks";

function FooterIndex() {
  return (
    <div className="footer">
      <Contact />
      <Terms />
      <QuickLinks />
    </div>
  );
}

export default FooterIndex;
