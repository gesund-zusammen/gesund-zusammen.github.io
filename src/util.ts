import Copy from "./data/copy.json";

const translated = (lang: "de" | "en") => {
  return Copy[lang];
};

export { translated };
