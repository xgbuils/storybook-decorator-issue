import React from "react";
import {useTranslations} from "../providers/TranslationsProvider";

const Content = () => {
  const translations = useTranslations();

  return (
    <div>
      {Object.keys(translations).map((key) => {
        const translation = translations[key];
        return <div key={key}>{`${key}: ${translation}`}</div>;
      })}
    </div>
  );
};

export default Content;
