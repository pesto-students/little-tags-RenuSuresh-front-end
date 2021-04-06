import React from "react";
import { CONTACT_DETAILS } from "../../constant/properties";
import { useTranslation } from "react-i18next";
import "./Footer.css";

function Contact() {
  const [t] = useTranslation("common");
  return (
    <>
      <div className="footer__contact">
        <h3>{t(`footer.contactDetails`)}</h3>
        <pre className="footer__contact__details">{CONTACT_DETAILS}</pre>
      </div>
    </>
  );
}

export default Contact;
