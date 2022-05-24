import {
  TextMedia,
  Headline,
  ContentBox,
  TeaserBox,
  Divider,
  Section,
  Button,
} from "@kickstartds/base";

import {
  Visual,
  CollapsibleBox,
  Contact,
  Quote,
  QuotesSlider,
  LogoTiles,
  CountUp,
  Storytelling,
} from "@kickstartds/content";
import { Story } from "@storybook/components";

export default {
  title: "Background Styles",
};

const Page = () => (
  <>
    <Section
      headline={{
        content: "Section Background White",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        align: "center",
        spaceAfter: "small",
        level: "h2",
      }}
      width="narrow"
      mode="tile"
      gutter="small"
    >
      <Button
        label="lorem ipsum"
      />
      <Button
        variant="outline"
        label="lorem ipsum"
      />
    </Section>

    <Section
      background="default"
      width="wide"
      spaceAfter="small"
      headline={{
        content: "lorem ipsum",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
    </Section>
    <Section
      background="default"
      width="wide"
      spaceBefore="small"
      spaceAfter="small"
    >
      <Storytelling
        full
        box={{
          link: {
            label: "read more",
            variant: "outline",
          },
          headline: {
            content: "Lorem Ipsum dolor",
            subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
          },
          text: "At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.",
          hAlign: "top",
        }}
        image={{
          source: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2082&q=80",
          order: {
            desktopImageLast: true,
          },
        }}
      />
    </Section>
    <Section
      background="default"
      width="wide"
      spaceBefore="small"
      headline={{
        content: "lorem ipsum",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        level: "h3",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
    </Section>
    <Section
      background="accent"
      width="wide"
      spaceAfter="small"
      headline={{
        content: "Section Background Accent",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
    </Section>
    <Section
      background="accent"
      width="wide"
      spaceBefore="small"
      spaceAfter="small"
    >
      <Storytelling
        full
        box={{
          link: {
            label: "read more",
            variant: "outline",
          },
          headline: {
            content: "Lorem Ipsum dolor",
            subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
          },
          text: "At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.",
          hAlign: "top",
        }}
        image={{
          source: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2082&q=80",
          order: {
            desktopImageLast: false,
          },
        }}
      />
    </Section>
    <Section
      background="accent"
      width="wide"
      spaceBefore="small"
      headline={{
        content: "lorem ipsum",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        level: "h3",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
    </Section>
    <Section
      ks-inverted="true"
      width="wide"
      spaceAfter="small"
      headline={{
        content: "Section Background Dark",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
    </Section>
    <Section
      ks-inverted="true"
      width="wide"
      spaceBefore="small"
      spaceAfter="small"
    >
      <Storytelling
        full
        box={{
          link: {
            label: "read more",
            variant: "outline",
          },
          headline: {
            content: "Lorem Ipsum dolor",
            subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
          },
          text: "At vero eos et accusam et justo duo dolores et ea rebum. At vero eos et accusam et justo duo dolores et ea rebum.",
          hAlign: "top",
        }}
        image={{
          source: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2082&q=80",
          order: {
            desktopImageLast: true,
          },
        }}
      />
    </Section>
    <Section
      ks-inverted="true"
      width="wide"
      spaceBefore="small"
      headline={{
        content: "lorem ipsum",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        level: "h3",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: false,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
    </Section>

  </>
);

const Template = (args) => <Page {...args} />;
export const BackgroundStyles = Template.bind({});
