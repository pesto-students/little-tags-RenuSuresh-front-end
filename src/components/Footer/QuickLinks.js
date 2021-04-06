import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function QuickLinks() {
  const [t] = useTranslation("common");

  return (
    <>
      <div className="footer__quicklinks">
        <h3>{t(`footer.quickLinks`)}</h3>
        <ul className="footer__contact__details">
          <li>{t("header.category.men")}</li>
          <li> {t("header.category.women")}</li>
          <li>{t("header.category.electronics")}</li>
        </ul>
      </div>
    </>
  );
}

export default QuickLinks;
