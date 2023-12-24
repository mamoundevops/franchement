import React from 'react'
import './joinbtn.css'
import { useTranslation } from "react-i18next";
const JoinBtn = () => {
    const { t, i18n } = useTranslation();
  return (
    <button className="joinus  text-pop-up-btn">
    
    {t("landingpage.joinus")}
  </button>
  )
}

export default JoinBtn