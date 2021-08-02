import React, {createContext, useContext} from "react";
const TranslationsContext = createContext({});

export const useTranslations = () => useContext(TranslationsContext);

const translations = {
  one: 'translation one',
  two: 'translation two',
};

const TranslationsProvider = ({ children }) => {
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
};

export default TranslationsProvider;
