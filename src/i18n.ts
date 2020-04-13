import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationsDE from "./locales/de.json";
import TranslationsEN from "./locales/en.json";

const getBootLang = (): "de" | "en" | "fr" | "it" | "es" => {
  const userLang: string = window.navigator.language;
  const locale: string = userLang.substr(0, 2);
  switch (locale) {
    case "de":
    case "fr":
    case "it":
    case "es":
      return locale;
    default:
      return "en";
  }
};

const DEFAULT_LANG = getBootLang();

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: DEFAULT_LANG,
    fallbackLng: "en",
    whitelist: ["de", "en"],
    resources: {
      en: {
        translation: TranslationsEN,
      },
      de: {
        translation: TranslationsDE,
      },
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
export { DEFAULT_LANG };
