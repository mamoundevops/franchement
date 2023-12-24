import React from 'react'
import './templates.css'
import SecondTempate from './SecondTemplate'
const helpcontent = [
  {
    title: "What is Sarahni's website?",
    content:
      "In one step, you're about to encounter the truth. Get secret messages from your colleagues candidly. Know your strengths and weaknesses, and what people think about you. Strengthen your character by knowing the reality, away from hypocrisy. Engage in direct dialogues with your friends secretly. Face the honesty that compliments have hidden from you.",
  },
  {
    title: "How do I create an account?",
    content:
      "You can create an account easily using your email or social media accounts.",
  },
  {
    title: "Forgot password",
    content:
      "On the login page, click on 'Forgot Password', enter your email, and we'll send you a link to reset your password. Note: If you've registered using social networks, simply click on 'Login with Google' or 'Login with Facebook'.",
  },
  {
    title: "How do I receive candid feedback?",
    content:
      "After creating an account, you'll receive your unique link. Share this link on social media to receive anonymous feedback without knowing the source.",
  },
  {
    title: "Received an upsetting feedback",
    content:
      "Apologies, we won't be able to identify the sender as the system works on receiving anonymous feedback. You can, however, enable the feature in your account settings to filter feedback containing inappropriate words. Please note, we may not be able to filter all words.",
  },
  {
    title: "Report a user",
    content:
      "If you find a user violating the website's terms and conditions, please report this user through their profile page. You'll find a 'Report Abuse' button, and our team will review the report and take necessary actions.",
  },
  {
    title: "Contact Sarahni's administration",
    content:
      "You can directly contact us through the social media buttons located at the bottom of each page.",
  },
];
const FirstTemplate = () => {
  return (
    <div className='firsttemplatefirstdiv'>
      <div className='firsttemplateseconddiv'>
        <SecondTempate arr={helpcontent} />
      </div>
    </div>
  )
}

export default FirstTemplate