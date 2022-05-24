const StyleDictionary = require("style-dictionary");
const { config } = require("@kickstartds/core/design-tokens");

module.exports = StyleDictionary.extend(config).extend({
  source: [
    "tokens/**/*.json",
    "node_modules/@kickstartds/core/source/design-tokens/icons/*.svg"
  ],
  platforms: {
    jsx: {
      buildPath: '.storybook/'
    },
    storybook: {
      buildPath: '.storybook/'
    },
    js: {
      transforms: ["attribute/cti", "name/cti/pascal", "size/rem", "color/css"],
      buildPath: ".storybook/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
        },
      ],
    },
  },
});
