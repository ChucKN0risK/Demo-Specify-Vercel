import { createElement, Fragment } from "react";
// @see https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/attrchange
import "lazysizes/plugins/attrchange/ls.attrchange";
import { unpackDecorator } from "@kickstartds/core/lib/storybook/helpers";
import { Providers } from "../src/Providers";

import "@kickstartds/base/lib/global/base.js";
import "@kickstartds/base/lib/global/base.css";
import "../tokens.css";

import { LightBox } from "@kickstartds/base/lib/lightbox";
import IconSprite from "./IconSprite";

import designTokens from "!!raw-loader!./tokens.css";
import icons from "!!raw-loader!./icons.html";

const providerDecorator = (Story, context) => (
  <Providers>
    <Story {...context} />
  </Providers>
);

export const parameters = {
  designToken: {
    files: [
      {
        filename: "./tokens.css",
        content: designTokens,
      },
      {
        filename: "./icons.svg",
        content: icons,
      },
    ],
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
