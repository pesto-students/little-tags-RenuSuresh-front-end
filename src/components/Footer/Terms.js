import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Terms() {
  const [t] = useTranslation("common");

  return (
    <>
      <div className="footer__terms">
        <h3>{t(`footer.policy`)}</h3>

        <ul>
          <li>{t(`footer.terms`)}</li>
          <li>{t(`footer.shipping`)}</li>
          <li>{t(`footer.cancel`)}</li>
          <li>{t(`footer.privacy`)}</li>
        </ul>
      </div>
    </>
  );
}

export default Terms;
