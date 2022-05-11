import '../../src/token-default-improvements.scss'

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

export default {
  title: "Landingpage",
};

const Page = () => (
  <>
    <Section
      headline={{
        content: "Lorem ipsum",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        align: "center",
        level: "h1",
      }}
      spaceAfter="small"
    >
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="small"
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
      headline={{
        content: "Lorem ipsum dolor sit",
        level: "h4",
        align: "center",
      }}
      width="default"
    >
      <LogoTiles
        logos={[
          {
            alt: "Shopify",
            src: "https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png",
          },
          {
            alt: "Contentful",
            src: "https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png",
          },
          {
            alt: "Gatsby",
            src: "https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png",
          },
          {
            alt: "Bigcommerce",
            src: "https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png",
          },
          {
            alt: "Shopify",
            src: "https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png",
          },
          {
            alt: "Contentful",
            src: "https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png",
          },
          {
            alt: "Gatsby",
            src: "https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png",
          },
          {
            alt: "Bigcommerce",
            src: "https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png",
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      spaceBefore="small"
      spaceAfter="small"
    >

      <Visual
        box={{
          background: 'transparent',
          enabled: true,
          headline: {
            align: null,
            content: 'Lorem Ipsum dolor',
            level: 'p',
            pageHeader: false,
            spaceAfter: 'none',
            styleAs: 'h2'
          },
          horizontal: 'center',
          indent: false,
          link: {
            enabled: true,
            fillAnimation: false,
            href: 'https://example.com',
            iconAfter: false,
            iconAnimation: false,
            iconBefore: false,
            label: 'Lorem Ipsum',
            newTab: false,
            size: 'medium',
            variant: 'outline-inverted'
          },
          text: 'Hic maxime sed eos non. Consequatur ut qui amet accusantium nesciunt.',
          vertical: 'bottom'
        }}
        height="default"
        media={{
          image: {
            indent: 'none',
            src: 'https://images.unsplash.com/photo-1647762654274-a9c92a2eced2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            srcDesktop: 'https://images.unsplash.com/photo-1647762654274-a9c92a2eced2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            srcMobile: 'https://images.unsplash.com/photo-1647762654274-a9c92a2eced2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            srcTablet: 'https://images.unsplash.com/photo-1647762654274-a9c92a2eced2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          },
          mode: 'image',
          video: {
            srcDesktop: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            srcMobile: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
            srcTablet: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4'
          }
        }}
      />
    </Section>
    <Section
      width="wide"
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
          vAlign: "right",
        }}
        image={{
          source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Humaaans-sitting-1.svg/1200px-Humaaans-sitting-1.svg.png",
          order: {
            desktopImageLast: true,
          },
        }}
      />
    </Section>
    <Section
      width="wide"
      spaceBefore="small"
      spaceAfter="small"
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
      background="dark"
    >
      <Quote
        image="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        source="Max Mustermann, ABC GmbH"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      />
    </Section>
    <Section
      width="wide"
      headline={{
        content: "lorem ipsum",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TeaserBox
        topic="lorem ipsum"
        text="A business transformation is really just a series of smaller changes rolling out one after the other. It’s about getting the right information to people when they need it. What started as an Airtable calendar very quickly became the solution that we use to manage everything."
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
        text="Smaller changes rolling out one after the other. It’s about getting the right information to people when they need it. What started as an Airtable calendar very quickly became the solution that we use to manage everything."
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
      headline={{
        content: "Trusted by teams from all industries",
        styleAs: "h1",
        spaceAfter: "small",
      }}
    >
      <Storytelling
        full
        backgroundColor="white"
        box={{
          link: {
            label: "read more",
            variant: "outline",
          },
          headline: {
            content: "Lorem Ipsum dolor",
            subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
            level: "h3",
            styleAs: "h3",
          },
          text: "A business transformation is really just a series of smaller changes rolling out one after the other. It’s about getting the right information to people when they need it. What started as an Airtable calendar very quickly became the solution that we use to manage everything.",
          hAlign: "center",
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
      width="max"
      headline={{
        content: "lorem ipsum",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        align: "center",
      }}
    >
      <ContentBox
        image="data:image/png;base64,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"
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "solid",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        image="data:image/png;base64,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"
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "solid",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        image="data:image/png;base64,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"
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "solid",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        image="data:image/png;base64,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"
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "solid",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <ContentBox
        image="data:image/png;base64,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"
        topic="lorem ipsum"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          enabled: true,
          label: "lorem ipsum",
          variant: "solid",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
    </Section>
    <Section
      background="dark"
      width="wide"
    >
      <Storytelling
        full
        box={{
          link: {
            label: "read more",
            variant: "solid",
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
      background="dark"
      width="wide"
      spaceBefore="small"
      headline={{
        content: "lorem ipsum",
        subheadline: "At vero eos et accusam et justo duo dolores et ea rebum.",
        level: "h2",
        align: "center",
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
export const Landingpage = Template.bind({});
