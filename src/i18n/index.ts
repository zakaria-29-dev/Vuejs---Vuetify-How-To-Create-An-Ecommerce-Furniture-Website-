import { createI18n } from "vue-i18n";

import en from "./en";
import el from "./el";

const languages = { en, el };

const savedLocale = localStorage.getItem("locale");
export default createI18n({
  locale:
    (savedLocale &&
      Object.values(languages)
        .map((l) => l.code)
        .includes(savedLocale) &&
      savedLocale) ||
    "en",
  fallbackLocale: "en",
  legacy: false,
  messages: Object.values(languages).reduce((acc, curr) => {
    acc[curr.code] = curr.translations;
    return acc;
  }, {} as Record<string, any>),
});
