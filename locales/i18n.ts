import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/common.json";
import vi from "./vi/common.json";
import cn from "./cn/common.json";

const resources = {
  en: { translation: en },
  vi: { translation: vi },
  cn: { translation: cn }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof window !== "undefined"
      ? localStorage.getItem("lang") || "en"
      : "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
