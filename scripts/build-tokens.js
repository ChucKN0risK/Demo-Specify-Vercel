const path = require('path');
const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/core/design-tokens");

StyleDictionary.extend(config)
  .extend({
    source: [
      "tokens/deprecated.json",
      "tokens/depth.json",
      "tokens/typo.json",
      "tmp-tokens/*.json",
      path.join(__dirname, "../node_modules/@kickstartds/core/source/design-tokens/icons/*.svg"),
      path.join(__dirname, "../static/icons/*.svg"),
    ],
    platforms: {
      jsx: {
        buildPath: ".storybook/",
      },
      storybook: {
        buildPath: ".storybook/",
      },
    },
  })
  .buildPlatform("css")
  .buildPlatform("jsx")
  .buildPlatform("storybook");
