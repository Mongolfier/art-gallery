import i18next from "i18next";
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';


i18next
  .use(languageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    order: ['localStorage', 'querystring',  'navigator'],
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
  });
// initialized and ready to go!
// i18next is already initialized, because the translation resources where passed via init function
