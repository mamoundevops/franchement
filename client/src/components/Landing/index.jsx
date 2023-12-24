import React, { useState, useRef, useEffect } from "react";
import "./landing.css";

import { GrHelpBook } from "react-icons/gr";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineSecurity } from "react-icons/md";

import Sharelink1 from "./photos/sharelink1.png";
import JoinUs1 from "./photos/joinus1.png";
import Feedback1 from "./photos/feedback1.png";

import { MdDeleteSweep } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";

import { useTranslation } from "react-i18next";
 

import { Link } from 'react-router-dom';
import JoinBtn from "./JoinBtn";
import NavBar from "../NavBar";
import Footer from '../Footer'
const GetHelp = ({ toggleetHelpModale }) => {
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
    <div className="modal">
      <div onClick={toggleetHelpModale} className="overlay"></div>
      <div className="modal-content">
        <h2>Get Help</h2>
        <p>This is how to get Help</p>
        <div>
          <details>
            <summary className="summarytitle">What is the Saraha website?</summary>
            <span className="summarycontent">
              In one step, you're on a date with the truth. Get secret messages
              from your peers candidly. Know your strengths and weaknesses, and
              what people think about you. Strengthen your character by knowing
              the reality away from hypocrisy. Engage in direct conversations
              with your friends secretly. Face the honesty hidden by
              compliments.
            </span>
          </details>
          <details>
            <summary className="summarytitle">How do I create an account?</summary>
            <span className="summarycontent">
              You can easily register an account using your email or social
              media accounts.
            </span>
          </details>
          <details>
            <summary className="summarytitle">Forget password?</summary>
            <span className="summarycontent">
              On the login page, click 'Forgot Password,' enter your email, and
              we'll send you a link to reset your password. Note: If you signed
              up using social networks, simply click on 'Login with Google' or
              'Login with Facebook'.
            </span>
          </details>
        </div>
        <button className="close-modal" onClick={toggleetHelpModale}>
          X
        </button>
      </div>
    </div>
  );
};

const Landing = () => {
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

  // Get Help
  const [openGetHelpModal, setOpenGetInTouchModal] = useState(false);
  const toggleetHelpModal = () => {
    setOpenGetInTouchModal(!openGetHelpModal);
  };
  if (openGetHelpModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="landingcontainer">
      {/* Nav Bar  */}
      {/* {openGetHelpModal && <GetHelp toggleetHelpModale={toggleetHelpModal} />} */}
      <section className="hero" ref={sectionRefs[0]}>
        <NavBar/>
        <div className="hero-firstdiv">
          <h1 className="hero-title text-pop-up-title">
            {/* What Do They Think About You ? */}
            {t("landingpage.bigtitle")}
          </h1>
          <span className="hero-span  text-pop-up-span">
            {/* Are you ready to know people's feedback about you without knowing
            them ? */}
            {t("landingpage.smaltitle")}
          </span>
          <JoinBtn/>
       
        </div>

        <div className="hero-lastdiv animatlastdiv">
          <Link className="hero-lastdiv-item" to='/contact'>
             
            <SiMinutemailer />   
            <span>{t("landingpage.getintouch")}</span>
          
          </Link>
          
          <Link className="hero-lastdiv-item" to='/help'>
           
            <GrHelpBook />
            <span>{t("landingpage.gethelp")}</span>
          </Link>
          <Link className="hero-lastdiv-item" to='/termspolicy'>
            <MdOutlineSecurity />
            <span>{t("landingpage.termsandprivacy")}</span>
          </Link>
        </div>
      </section>

      <section className="howto" ref={sectionRefs[1]}>
        <div className="howto-firstdiv">
          <h1 className="howto-title oneline animathowtotitle">
            {/* 3 Easy Steps */}
            {t("landingpage.howtotitle")}
          </h1>
          <span className="howto-title-span animathowtospan">
            {/* Being straightforward can be very simple. Once you sign up using a
            username and password, you can share your profile link on any social
            media platform and ask people to use the link to provide feedback.
            Individuals can anonymously write anything, and it will be delivered
            to you through the website. */}
            {t("landingpage.howtosmaltitle")}
          </span>
        </div>
        <div className="howto-lastdiv animatehowtocardspan">
          <div className="howto-card">
            <img
              className="howto-card-img animatehowtocardimg"
              src={JoinUs1}
              alt=""
              width="2000"
              height="2000"
            />
            <h3 className="howto-card-title animatehowtocardtitle">
              {t("landingpage.howtocard.firsttitle")}
            </h3>
            <span className="howto-card-span animatehowtocardspan">
              {/* When you log into your account, you'll find all the feedback your
              friends have written about you. Only you can read them. */}
              {t("landingpage.howtocard.firsttext")}
            </span>
          </div>

          <div className="howto-card">
            <img
              className="howto-card-img animatehowtocardimg"
              src={Sharelink1}
              alt=""
            />
            <h3 className="howto-card-title animatehowtocardtitle">
              {/* Share Your Link */}
              {t("landingpage.howtocard.secondtitle")}
            </h3>
            <span className="howto-card-span animatehowtocardspan">
              {/* Once you have your link, you can share it on social media to
              receive feedback anonymously. */}
              {t("landingpage.howtocard.secondtext")}
            </span>
          </div>

          <div className="howto-card">
            <img
              className="howto-card-img animatehowtocardimg"
              src={Feedback1}
              alt=""
            />
            <h3 className="howto-card-title animatehowtocardtitle">
              {/* Read Feedback */}
              {t("landingpage.howtocard.thirdtitle")}
            </h3>
            <span className="howto-card-span animatehowtocardspan">
              {/* You can easily create an account using your email or social media
              accounts */}
              {t("landingpage.howtocard.thirdtext")}
            </span>
          </div>
        </div>
      </section>

      <section className="testimonial" ref={sectionRefs[2]}>
        <div className="testimonial-title-div">
          <h2 className="testimonial-title animattestimonialtitle">
            {t("landingpage.testimonialtitle")}
          </h2>
        </div>
        <div className="testimonial-cards">
          <div className="testimonial-card animatecard1">
            <div className="testimonial-card-img">
              <FaUserSecret />
            </div>
            <div className="testimonial-card-content">
              <div className="testimonial-card-content-header">
                <div className="testimonial-card-content-header-namedate">
                  <div className="testimonial-card-content-header-name">
                    {/* Annonymous */}
                    {t("landingpage.testimonialcard.firstcardtitle")}
                  </div>
                  <div className="testimonial-card-content-header-date">
                    <div className="testimonial-card-content-header-date-date">
                      {/* 12/12/1991 */}
                      {t("landingpage.testimonialcard.firstdate")}
                    </div>
                    <div className="testimonial-card-content-header-date-time">
                      {/* 22:45min */}
                      {t("landingpage.testimonialcard.firsthour")}
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content-header-delete">
                  <MdDeleteSweep />
                </div>
              </div>
              <div className="testimonial-card-content-message">
                {t("landingpage.testimonialcard.firsttext")}
                {/* Your vibrant spirit illuminates every room you grace. Your
                kindness and wit weave magic into moments. A true gem among
                friends, your presence shines endlessly. */}
              </div>
            </div>
          </div>

          <div className="testimonial-card testimonial-card2 animatecard2">
            <div className="testimonial-card-img">
              <FaUserSecret />
            </div>
            <div className="testimonial-card-content">
              <div className="testimonial-card-content-header">
                <div className="testimonial-card-content-header-namedate">
                  <div className="testimonial-card-content-header-name">
                    {/* Annonymous */}
                    {t("landingpage.testimonialcard.secondcardtitle")}
                  </div>
                  <div className="testimonial-card-content-header-date">
                    <div className="testimonial-card-content-header-date-date">
                      {/* 12/12/1991 */}
                      {t("landingpage.testimonialcard.seconddate")}
                    </div>
                    <div className="testimonial-card-content-header-date-time">
                      {/* 22:45min */}
                      {t("landingpage.testimonialcard.secondhour")}
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content-header-delete">
                  <MdDeleteSweep />
                </div>
              </div>
              <div className="testimonial-card-content-message">
                {t("landingpage.testimonialcard.secondtext")}
                {/* Your style is a delightful blend of charm and humor! Your
                fashion choices always bring a smile. You truly own the art of
                dressing with panache! */}
              </div>
            </div>
          </div>

          <div className="testimonial-card testimonial-card3 animatecard3">
            <div className="testimonial-card-img">
              <FaUserSecret />
            </div>
            <div className="testimonial-card-content">
              <div className="testimonial-card-content-header">
                <div className="testimonial-card-content-header-namedate">
                  <div className="testimonial-card-content-header-name">
                    {/* Annonymous */}
                    {t("landingpage.testimonialcard.thirdcardtitle")}
                  </div>
                  <div className="testimonial-card-content-header-date">
                    <div className="testimonial-card-content-header-date-date">
                      {/* 12/12/1991 */}
                      {t("landingpage.testimonialcard.thirddate")}
                    </div>
                    <div className="testimonial-card-content-header-date-time">
                      {/* 22:45min */}
                      {t("landingpage.testimonialcard.thirdhour")}
                    </div>
                  </div>
                </div>
                <div className="testimonial-card-content-header-delete">
                  <MdDeleteSweep />
                </div>
              </div>
              <div className="testimonial-card-content-message">
                {t("landingpage.testimonialcard.thirdtext")}
                {/* Your smile lights up every room, and your ability to make
                everyone laugh is pure magic. Your presence brings joy to life.
                Keep spreading that contagious positivity! */}
              </div>
            </div>
          </div>
        </div>

      <Footer/>
      </section>
    </div>
  );
};

export default Landing;
