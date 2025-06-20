import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      test: "This is a test translation",
      "Add New Room": "Add New Room",
      Reserve: "Reserve",
      Edit: "Edit",
      Remove: "Remove",
      Reservations: "Reservations",
    },
  },
  pl: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      test: "To jest testowe tłumaczenie",
      "Add New Room": "Dodaj nowy pokój",
      Reserve: "Zarezerwuj",
      Edit: "Edytuj",
      Remove: "Usuń",
      Reservations: "Rezerwacje",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pl", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: "pl", // language to use if translations in user language are not available
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
