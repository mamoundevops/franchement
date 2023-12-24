import React, { useRef, useEffect } from "react";
import "./contact.css";

import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import NavBar from "../../NavBar";
import JoinBtn from '../JoinBtn'
import Footer from '../../Footer'
const Contact = () => {
  const { t, i18n } = useTranslation();

  const sectionRefs = [useRef(null), useRef(null), useRef(null)]; // Add refs for each section
  const sectionsCount = sectionRefs.length;
  let currentSectionIndex = 0;

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const nextSectionIndex = (currentSectionIndex + 1) % sectionsCount;
      const nextSectionRef = sectionRefs[nextSectionIndex];

      if (nextSectionRef.current) {
        nextSectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      currentSectionIndex = nextSectionIndex;
    }, 15000); // 1 minute interval

    return () => clearInterval(scrollInterval);
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="contactcontainer">
       <NavBar /> 
      <div className="contactcontactcontainer center">
        <div className="contactcontent">
          <h2 className="contacttitle"> 
          {t("landingpage.contatus.contactustitle")}
          </h2>
          <p className="contactsubtitle">
          {t("landingpage.contatus.contactusSubtitle")}
          </p>
          <MdEmail className="mailicon" />
          <span className="contactsubtitle"> 
          {t("landingpage.contatus.contactusemail")}
          </span>
          <JoinBtn />
        </div>
      </div>
      <div  className='contact-footer-bottom'><Footer /></div>
     
    </div>
  );
};

export default Contact;
