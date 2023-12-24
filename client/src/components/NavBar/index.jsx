import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../language/LanguageContext";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { language, updateLanguage } = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(language); // Default language is English ('en')

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);

    updateLanguage(event.target.value);
    // window.location.reload();
    // Logic to change the language throughout your app goes here
  };
  return (
    <nav className="navanimation">
      <ul>
        <li className="logoname">
          <Link to="/">{t("landingpage.appname")}</Link>
        </li>

        <div className="rightmenu">
          {/* <li>
            <h5>Home</h5>
          </li> */}
          <li>
            <button className="btnlogin">{t("landingpage.login")}</button>
          </li>
          <li>
            <select value={selectedLanguage} onChange={handleLanguageChange}>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="ar">العربية</option>
            </select>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
