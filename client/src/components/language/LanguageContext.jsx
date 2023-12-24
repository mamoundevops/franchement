// src/LanguageContext.js
import i18next from "i18next";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
const LanguageContext = createContext();

// Create a context provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(navigator.language); //  

  // Define a function to update the language
  const updateLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("appLanguage", newLanguage); 
    i18next.changeLanguage(newLanguage);
  };

  useEffect(() => {
    i18next.changeLanguage(localStorage.getItem("appLanguage"));
  }, []);
  

  // useEffect(() => {
  //   i18next.changeLanguage(localStorage.getItem("appLanguage"));
  // }, [language]);

  // Provide the language state and update function to the children components
  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to consume the context
export function useLanguage() {
  return useContext(LanguageContext);
}
