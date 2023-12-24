import React from 'react'
import { useTranslation } from "react-i18next";
import './footer.css'
const Footer = () => {
    const { t, i18n } = useTranslation();
  return (
    <div className="footercontainer">
    <h2 className="footer-title">
      {t("landingpage.footer")}
    </h2>
  </div>
  )
}

export default Footer