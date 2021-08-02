import React from "react";
import TranslationsProvider from "../../stories/providers/TranslationsProvider";

export const translationsDecorator = (Story) => {

  return (
    <TranslationsProvider>
      <Story />
    </TranslationsProvider>
  );
};
