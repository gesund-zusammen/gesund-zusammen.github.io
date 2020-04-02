import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import TranslationsDE from "./locales/de.json";
import TranslationsEN from "./locales/en.json";

const getBootLang = (): "de" | "en" => {
  const userLang: string = window.navigator.language;
  if (userLang.substr(0, 2) === "de") {
    return "de";
  }
  return "en";
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
