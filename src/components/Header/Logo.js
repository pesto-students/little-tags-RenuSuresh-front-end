import React from "react";
import { Link } from "react-router-dom";
import { LOGO_IMG } from "../../constant/properties";

function Logo() {
  return (
    <>
      <Link to="/">
        <img src={LOGO_IMG} alt="logo" className="header__logo" />
      </Link>
    </>
  );
}

export default Logo;
