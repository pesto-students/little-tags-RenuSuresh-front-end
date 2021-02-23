import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";

function HeaderIndex() {
  const [t, i18n] = useTranslation("common");
  const [lang, setLang] = useState("en");

  const changeLang = (event) => {
    console.log(event.target);
    setLang(event.target.value);
    i18n.changeLanguage(lang);
    console.log(lang);
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
        </div>

        <select onChange={changeLang} value={lang}>
          <option value="en">en</option>
          <option value="hi">hi</option>
        </select>
      </div>
      <button onClick={() => i18n.changeLanguage("hi")}>hi</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </>
  );
}

export default HeaderIndex;
