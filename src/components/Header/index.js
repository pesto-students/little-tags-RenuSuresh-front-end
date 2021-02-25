import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import DehazeIcon from "@material-ui/icons/Dehaze";
import "./Header.css";
import { LANG_OPTION, LOGO_IMG } from "../../constant/properties";

function HeaderIndex() {
  const [t, i18n] = useTranslation("common");
  const [lang, setLang] = useState("en");

  const changeLang = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={LOGO_IMG} alt="logo" className="header__logo" />
        </Link>

        <div className="header__category">
          <a href="/men">{t("header.category.men")}</a>
          <a href="/women">{t("header.category.women")}</a>
          <a href="/electronics">{t("header.category.electronics")}</a>
        </div>

        <div className="header__search">
          <input type="text" className="header__search__input" />
          <button className="header__search__button">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="header__right">
          <div className="header__lang">
            <i className="fa fa-globe"></i>
            <select onChange={(e) => changeLang(e)} value={lang}>
              {LANG_OPTION.map((lan, key) => (
                <option value={lan} key={key}>
                  {lan}
                </option>
              ))}
            </select>
          </div>
          <div className="header__user">
            <AccountCircleIcon />
            <label className="header__user__label">
              {t("header.user.login")} / {t("header.user.signup")}
            </label>
          </div>
          <div>
            <LocalMallIcon />
          </div>
          <div>
            <DehazeIcon />
          </div>
        </div>
      </div>
      {/* <button onClick={() => i18n.changeLanguage("hi")}>hi</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button> */}
    </>
  );
}

export default HeaderIndex;
