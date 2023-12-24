import i18next from 'i18next';
 import { initReactI18next } from 'react-i18next';
 import languagedetector from 'i18next-browser-languagedetector';

 import Arabic from './ar.json'
 import Francais from './fr.json'
 import Anglais from './en.json'

i18next
.use(languagedetector)
.use(initReactI18next)
.init({
   // lng: 'fr', if you're using a language detector, do not define the lng option
  debug: true,
  fallbackLang:"ar",
  interpolation:{
    escapeValue:false
  },
  resources: {
    ar: {
      translation: 
        Arabic
      
    },
   
    en: {
        translation: 
          Anglais
        
    } ,
    fr: {
        translation: 
          Francais
        
    }
  }
});
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
export default i18next;
 