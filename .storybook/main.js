const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    // "../node_modules/@kickstartds/*/lib/*/*.stories.mdx",
    "../node_modules/@kickstartds/*/lib/*/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-a11y",
    // "@kickstartds/storybook-addon-component-tokens",
    "@whitespace/storybook-addon-html",
    "storybook-design-token"
  ],
  features: {
    postcss: false,
  },
  framework: "@storybook/react",
  staticDirs: ["../static"],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, '../src'),
    });

    return config;
  },
};
