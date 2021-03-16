import React from "react";
import { Link } from "react-router-dom";
import LOGO_IMG from "../../assets/images/logo.png";

function Logo() {
  return (
    <>
      <Link to="/" className="header__logo">
        <img src={LOGO_IMG} alt="logo" className="header__logo" />
      </Link>
    </>
  );
}

export default Logo;
