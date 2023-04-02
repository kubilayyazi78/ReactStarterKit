import Backend from "i18next-http-backend";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// const resources = {
//   tr: {
//     translation: {
//       welcome: "Hosgeldin",
//     },
//   },
//   en: {
//     translation: {
//       welcome: "Welcome",
//     },
//   },
// };

i18n.use(initReactI18next).use(Backend).use(LanguageDetector).init({
  fallbackLng: "tr",
  //lng: "tr",
  //resources,
});

export default i18n;
