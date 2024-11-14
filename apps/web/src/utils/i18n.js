import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsFR from "../locales/fr/translation.json";
import translationsEN from "../locales/en/translation.json";

const resources = {
  fr: { translation: translationsFR },
  en: { translation: translationsEN },
};

const lng = localStorage.getItem("i18nextLng") || "fr";

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
