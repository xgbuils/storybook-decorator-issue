import React from "react";

import Content from "./Content";
import {translationsDecorator} from "../../.storybook/decorators/translationsDecorator";

export default {
  title: "Components/CMS Content",
};

export const Default = args => {
  return (
    <Content />
  );
};
Default.decorators = [];
