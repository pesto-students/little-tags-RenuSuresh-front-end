import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faShoppingBag,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function HeaderIndex() {
  const LANG_OPTION = ["en", "hi"];

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
          <img
            src="https://cdn.worldvectorlogo.com/logos/arrow-2.svg"
            alt="logo"
            className="header__logo"
          />
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
          <div>
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingBag} />
          </div>
          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </div>
      {/* <button onClick={() => i18n.changeLanguage("hi")}>hi</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button> */}
    </>
  );
}

export default HeaderIndex;
