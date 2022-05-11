import { LinkContext } from "@kickstartds/base/lib/link";
import LinkTo from "@storybook/addon-links/react";

const PagesLink = ({ href, ...props }) => (
  <LinkTo kind="pages" story={href} {...props} />
);

const LinkProvider = (props) => (
  <LinkContext.Provider value={PagesLink} {...props} />
);

export default {
  title: "Pages",
  parameters: {
    layout: "fullscreen",
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
    controls: { disable: true },
  },
};

export { Landingpage } from "./Landingpage.story";
export { BackgroundStyles } from "./BackgroundStyles.story";
