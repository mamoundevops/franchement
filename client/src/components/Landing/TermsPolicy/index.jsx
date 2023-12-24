import React, { useState, useRef, useEffect } from "react";
import "./termspolicy.css";

import { useTranslation } from "react-i18next";
import { useLanguage } from "../../language/LanguageContext";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import Footer from "../../Footer";

let arr = [
  {
    title: "Respect",
    content:
      "Respect is the foundation upon which human societies thrive. On our site, we hope users have an experience that exceeds their expectations. Although the site is primarily based on frankness, respect is essential in posing questions and engaging with them. (We don’t censor any expressions that may be considered impolite, unless reported by a user or deleted by the user themselves using the delete button that appears on each message.) Posting threatening, bullying, or harassing questions or answers is never acceptable on our site.",
  },
  {
    title: "Privacy Policy",
    content:
      "By using the site, you agree to the collection and use of your data and information as outlined in the Privacy Policy page. You'll need to read it before using or accessing the services.",
  },
  {
    title: "Unregistered Users",
    content:
      "Unregistered users can access parts of the site's services and use them, but they do not enjoy all the privileges of membership. However, unregistered users are still subject to the site's Privacy Policy and terms and conditions.",
  },
  {
    title: "Access Denial",
    content:
      "The 'Honesty' site reserves the right to deny any user access to the site or its services in general.",
  },
  {
    title: "Legal Age",
    content:
      "The use of the 'Honesty' site by those under 16 years old is not permitted. We implement this condition to protect you.",
  },
  {
    title: "Your True Identity",
    content:
      "There is no need to pretend to be someone else on the 'Honesty' site because the nature of the site requires showing your true identity to benefit from a unique experience. In fact, we do not allow the creation of fake accounts, and any detected fake account may face suspension. Impersonating others using the name or subdomain of an account is not allowed.",
  },
  {
    title: "Inactive Accounts",
    content:
      "The 'Honesty' site reserves the right to remove inactive accounts within a period deemed sufficient by the site's administrators.",
  },
  {
    title: "Your Safety",
    content:
      "Despite providing various safety measures, such as the message deletion feature, you can also take specific steps to be responsible for your experience. The most important is not to share your page on unknown-source websites but keep it limited to your personal pages on social media.",
  },
  {
    title: "Accounts Subject to Deletion",
    content:
      "In addition to fake accounts, individuals affiliated with terrorist groups or violent extremist groups intending to encourage or commit any violent or criminal activities are prohibited from being present on our site.",
  },
  {
    title: "Site Security",
    content:
      "You are prohibited from engaging in any kind of business activities on the site. It is also forbidden to gather information about members, regardless of the means used in this process. Uploading any type of viruses or harmful codes to the site is prohibited. Our site ensures prevention of any access to member accounts, including obtaining login information or accessing someone else's account. The use of the 'Honesty' mark in any activities related to drugs, alcohol, or illegal substances is prohibited. Violating one or more of the above clauses may lead to the permanent termination of the account without recourse to the owner or even legal action if required.",
  },
  {
    title: "Changes to Terms and Conditions",
    content:
      "We reserve the right to modify the terms and conditions when necessary.",
  },
  {
    title: "Liability Limits",
    content:
      "All content posted on the site is the responsibility of its creators. The site is not responsible for its content or any damage that may result from this content or the use of any site services.",
  },
  {
    title: "Governing Law",
    content:
      "You agree that the services provided by the 'Honesty' site are subject to all the prevailing laws in the State of Palestine. Any disputes will be settled in the courts of the State of Palestine.",
  },
];

const TermsPolicy = () => {
  const { t, i18n } = useTranslation();

  const detailsElements = document.querySelectorAll("details");

  detailsElements.forEach((details) => {
    details.addEventListener("toggle", function (event) {
      if (this.open) {
        detailsElements.forEach((item) => {
          if (item !== this && item.open) {
            item.open = false;
          }
        });
      }
    });
  });

  return (
    <div className="termscontainer">
      {" "}
      <NavBar />
      <div className="termstermscontainer">
       
          <h2 className="termstitle">Terms and Conditions of Website Use</h2>
          <p className="termssubtitle">
            Honesty is a social networking site that relies on anonymous
            messaging. This method enables users to explicitly understand their
            friends' emotions. It keeps them connected to others to identify
            their flaws for improvement and their strengths, allowing them to
            learn new things about themselves. We consider using the anonymity
            feature as the best means to ask questions and uncover the truth
            about individuals. Our objective is to support users in establishing
            a secure and inclusive environment within Honesty. To facilitate
            better comprehension of the site and the required responsibilities,
            we've outlined the following terms for your adherence:,
          </p>

          {arr.map((item, index) => {
            return (
              <details key={index}>
                <summary className="termssummary">{item.title}</summary>
                <span className="summarycontent">{item.content}</span>
              </details>
            );
          })}
       
      </div>
     <Footer/>
    </div>
  );
};

export default TermsPolicy;
