import { createElement, Fragment } from "react";
import { actions } from "@storybook/addon-actions";
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import "lazysizes/plugins/attrchange/ls.attrchange";
import { unpackDecorator } from "@kickstartds/core/lib/storybook/helpers";
import { Providers } from "../src/Providers";
import { LightBox } from "@kickstartds/base/lib/lightbox";
import IconSprite from "./IconSprite";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";
import "../tokens.css";

const myActions = actions("radio");
window.rm.radio.on("*", myActions.radio);

const providerDecorator = (Story, context) => (
  <Providers>
    <Story {...context} />
  </Providers>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 4,
    },
  },
  designToken: {
    disable: true,
  },
};

export const decorators = [
  unpackDecorator,
  providerDecorator,
  (Story) =>
    createElement(Fragment, null, [
      createElement(IconSprite, { key: "IconSprite" }),
      createElement(Story, { key: "Story" }),
      createElement(LightBox, { key: "LightBox" }),
    ]),
];
