import React from "react";
import { CONTACT_DETAILS } from "../../constant/properties";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Contact() {
  const [t] = useTranslation("common");
  return (
    <>
      <div className="footer__contact">
        <h3>{t(`footer.contactdetails`)}</h3>
        <pre>{CONTACT_DETAILS}</pre>
      </div>
    </>
  );
}

export default Contact;
