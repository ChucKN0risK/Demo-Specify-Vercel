import '../../src/rheinhessische/token-overrides.scss'
import '../../src/rheinhessische/token-default-improvements.scss'
import '../../src/rheinhessische/bug-fixes.scss'

import {
  TextMedia,
  Headline,
  ContentBox,
  TeaserBox,
  Section,
  Button,
  RichText,
} from "@kickstartds/base";

import {
  Quote,
  LogoTiles,
  Storytelling,
} from "@kickstartds/content";

import { Inline } from "@bedrock-layout/primitives";

export default {
  title: "Landingpage",
};

const Page = () => (
  <>
    <Section
      level="h1"
      styleAs="h1"
      mode="list"
      gutter="none"
    >
      <Headline
        content="Content is Data"
        subheadline="Sanity.io is the unified content platform that powers better digital experiences"
        align="center"
        level="h1"
      />

      <Inline noStretchedColumns gutter="xs" align="center" justify="center" >
        <Button
          label="Start building"
        />

        <Button
          variant="outline"
          label="Get a demo"
        />
      </Inline>
    </Section>
    <Section
      spaceBefore="none"
      spaceAfter="small"
      headline={{
        content: " ",
        subheadline: "POWERING EXCEPTIONAL DIGITAL EXPERIENCES EVERYWHERE",
        level: "h4",
        styleAs: "h4",
        className: "c-headline--mono",
        align: "center",
      }}
    >

      <LogoTiles
        logos={[
          {
            alt: 'National Geographic',
            src: 'https://www.sanity.io/static/images/client-logos/national_geographic.svg'
          },
          {
            alt: 'Netlify',
            src: 'https://www.sanity.io/static/images/client-logos/netlify.svg'
          },
          {
            alt: 'Nike',
            src: 'https://www.sanity.io/static/images/client-logos/nike.svg'
          },
          {
            alt: 'Figma',
            src: 'https://www.sanity.io/static/images/client-logos/figma.svg'
          },
          {
            alt: 'Sonos',
            src: 'https://www.sanity.io/static/images/client-logos/sonos.svg'
          },
          {
            alt: 'Flex',
            src: 'https://www.sanity.io/static/images/client-logos/flex.svg'
          },
          {
            alt: 'Movember',
            src: 'https://www.sanity.io/static/images/client-logos/movember.svg'
          },
          {
            alt: 'Remarkable',
            src: 'https://www.sanity.io/static/images/client-logos/remarkable.svg'
          },
          {
            alt: 'Conde Nast',
            src: 'https://www.sanity.io/static/images/client-logos/conde_nast.svg'
          },
          {
            alt: 'Cloudflare',
            src: 'https://www.sanity.io/static/images/client-logos/cloudflare.svg'
          },
          {
            alt: 'Brex',
            src: 'https://www.sanity.io/static/images/client-logos/brex.svg'
          },
        ]}
      />
    </Section>

    <Section
      width="wide"
      spaceBefore="none"
      spaceAfter="none"
    >
      <TextMedia
        media={[
          {
            image: {
              height: 853,
              src: 'video_screenshot.png',
              width: 1280
            }
          }
        ]}
      />
    </Section>
    <Section
      width="wide"
      spaceBefore="small"
    >
      <Storytelling
        full
        box={{
          hAlign: "top",
          headline: {
            content: "Built to be built on",
            subheadline: "THE PLATFORM FOR UNIFIED CONTENT",
            className: "c-headline--mono",
          },
          text: `Sanity is the most flexible platform for building data driven content solutions.
  
    npm install -g @sanity/cli
    sanity init`
        }}
        image={{
          source: "https://cdn.sanity.io/images/3do82whm/next/55236b64b6509be5d1723a5f44a53fc4edcefd37-554x473.svg?h=473&fit=max&auto=format",
          order: {
            desktopImageLast: true,
            mobileImageLast: false,
          },
        }}
      />
    </Section>
    <Section
      width="wide"
      mode="tile"
      spaceBefore="none"
    >
      <ContentBox
        topic="Content Lake"
        className="c-content-box--icon"
        text={`
Use **structured content** to integrate across organizations and disciplines, assembling your infrastructure from the best components.
        `}
        image="content-lake.svg"
        link={{
          enabled: true,
          label: "Explore The Content Lake",
          variant: "clear",
          iconAfter: true,
          size: "small",
          icon: {
            icon: "arrow-right",
          }
        }}
      />
      <ContentBox
        topic="Sanity Studio"
        className="c-content-box--icon"
        text={`
**Collaborate and customize.** Sanity Studio is a real-time toolkit for creating efficient data-driven content applications.`}
        image="sanity-studio.svg"
        link={{
          enabled: true,
          label: "Read more about the Sanity Studio",
          variant: "clear",
          iconAfter: true,
          size: "small",
          icon: {
            icon: "arrow-right",
          }
        }}
      />
      <ContentBox
        topic="Developer Experience"
        className="c-content-box--icon"
        text={`
**By developers, for developers.** Our open and flexible platform uses tooling you already know so you feel right at home, right away.`}
        image="developer-experience.svg"
        link={{
          enabled: true,
          label: "How we think about DX",
          variant: "clear",
          iconAfter: true,
          size: "small",
          icon: {
            icon: "arrow-right",
          }
        }}
      />

    </Section>
    <Section
      width="narrow"
      background="dark"
    >
      <Quote
        image="https://cdn.sanity.io/images/3do82whm/next/386ff204b121fa77c56f4f12f9cb9ecf19e56402-288x288.png?w=288&h=288&fit=clip&auto=format"
        source="Wes Bos"
        byline="Javascript developer + Syntax.FM host"
        text="Sanity is a perfect mix of ease-to-use paired with the ability to customize almost anything you want"
      />
    </Section>
    <Section
      headline={{
        content: "Everyone on the same page. For real.",
        subheadline: "Sanity is the first content platform to empower teams of all sizes with real-time collaboration, advanced version control and more.",
        level: "h2",
        styleAs: "h2",
        align: "center",
      }}
      align="center"
      spaceAfter="small"
    >
      <div>
        <Button
          size="small"
          label="Start working, together"
        />
      </div>
    </Section>
    <Section
      width="wide"
    >

      <TextMedia
        media={[
          {
            image: {
              src: 'https://cdn.sanity.io/images/3do82whm/next/c19ffc2d0fc5aa8d9998203514cf5d7d8d117319-2512x1580.png?rect=0,0,2512,1579&w=800&h=503&fit=clip&auto=format',
              width: 711,
              height: 447,
            }
          }
        ]}
        mediaAlignment="beside-left"
        text={`
### Really real-time collaboration
Real-time collaboration, live multi-user editing, track changes. With Sanity you’re never blocked and never locked out. Work together like never before.`}
      />
    </Section>
    <Section
      width="wide"
    >
      <TextMedia
        media={[
          {
            image: {
              src: 'https://cdn.sanity.io/images/3do82whm/next/08a6f897cc27fba22af0ef337cbb97604b46ae94-2836x1508.png?rect=0,0,2836,1507&w=800&h=425&fit=clip&auto=format',
              width: 711,
              height: 447,
            }
          }
        ]}
        mediaAlignment="beside-right"
        text={`
### Fit your team
Empower your team with customized editing environments that work like they think.`}
      />
    </Section>
    <Section
      width="wide"
    >
      <TextMedia
        media={[
          {
            image: {
              src: 'https://cdn.sanity.io/images/3do82whm/next/0cbb9c1a369267344f0b3748934c156bd5653cbe-2560x1532.png?rect=1,0,2559,1532&w=800&h=479&fit=clip&auto=format',
              width: 711,
              height: 447,
            }
          }
        ]}
        mediaAlignment="beside-left"
        text={`
### Come together
Let content creators, designers and developers come together, while separating content from presentation. Develop, review, ship and iterate.`}
      />
    </Section>
    <Section
      width="narrow"
    >
      <Quote
        image="https://cdn.sanity.io/images/3do82whm/next/b7ff8c9d97e1222852825b45cf726be921841709-512x512.png?w=512&h=512&fit=clip&auto=format"
        source="Adina Ong"
        byline="Web Development Manager, Cornerstone OnDemand"
        text="Sanity has helped us transform the way we deliver content. It’s easy to customize and extend to meet our growing business needs."
      />
    </Section>
    <Section
      background="dark"
      headline={{
        content: "Make magic",
        subheadline: "When you’re no longer blocked by your tools, you’ll be amazed at what you can create.",
        align: "center",
        spaceAfter: "small"
      }}
      width="wide"
      spaceAfter="small"
    >
      <TeaserBox
        darkStyle
        image="https://cdn.sanity.io/images/3do82whm/next/98207d99e70275cc8188a4124875c2c0f3c4e034-1600x900.jpg?rect=0,50,1600,800&w=600&h=300&fit=clip&auto=format"
        topic="Rich Brilliant Willing"
        text="A lighting configurator with more than 75,000 combinations of form and finish"
        link={{
          label: "lorem",
          hidden: true,
          href: "#",
        }}
      />
      <TeaserBox
        darkStyle
        image="https://cdn.sanity.io/images/3do82whm/next/85a1ec7a7892721d2160aee938cd00941806997d-3800x2690.jpg?rect=0,395,3800,1900&w=600&h=300&fit=clip&auto=format"
        topic="Cornerstone OnDemand"
        text="Multilingual content marketing for software used in over 192 countries"
        link={{
          label: "lorem",
          hidden: true,
          href: "#",
        }}
      />
      <TeaserBox
        darkStyle
        image="https://cdn.sanity.io/images/3do82whm/next/99cd8f94e38b5c6220b132334a26080d646932cf-980x549.jpg?rect=0,29,980,490&w=600&h=300&fit=clip&auto=format"
        topic="Cloudflare"
        text="A blazing fast showcase for their global serverless product"
        link={{
          label: "lorem",
          hidden: true,
          href: "#",
        }}
      />
    </Section>
    <Section
      background="dark"
      align="center"
      width="narrow"
      spaceBefore="none"
    >
      <div>
        <Button
          enabled
          label="See all case studies"
          variant="clear"
          size="large"
          iconAfter
          icon={{
            icon: "arrow-right",
          }}
        />
      </div>
    </Section>
    <Section
      width="wide"
      spaceAfter="small"
      background="dark"
      gutter="small"
      headline={{
        content: "Content Velocity, Unlocked",
        level: "h3",
        styleAs: "h3",
      }}
    >
      <TeaserBox
        darkStyle
        image="marketing.svg"
        topic="Marketing sites"
        text="Better stories. To more people. With less effort."
        imageSpacing
        link={{
          label: "lorem",
          hidden: true,
          href: "#",
        }}
      />
      <TeaserBox
        darkStyle
        image="e-commerce.svg"
        topic="E-commerce sites"
        text="Better product + content experiences"
        imageSpacing
        link={{
          label: "lorem",
          hidden: true,
          href: "#",
        }}
      />
      <TeaserBox
        darkStyle
        image="mobile-apps.svg"
        topic="Mobile apps"
        text="Structured content for every native OS"
        imageSpacing
        link={{
          label: "lorem",
          hidden: true,
          href: "#",
        }}
      />
      <TeaserBox
        darkStyle
        image="products-services.svg"
        topic="Products & services"
        text="Innovate and automate from the inside out"
        imageSpacing
        link={{
          label: "lorem",
          hidden: true,
          href: "#",
        }}
      />
    </Section>
    <Section
      align="center"
      spaceBefore="none"
      background="dark"
    >
      <div>
        <Button
          label="See all solutions"
          variant="clear"
          size="large"
          iconAfter
          icon={{
            icon: "arrow-right"
          }}
        />
      </div>
    </Section>
    <Section
      spaceBefore="small"
      gutter="small"
      width="wide"
      headline={{
        content: " ",
        subheadline: "DON’T JUST TAKE OUR WORD FOR IT",
        level: "h4",
        className: "c-headline--mono",
        align: "center",
      }}
    >
      <TeaserBox
        topic="Sanctuary Computer"
        image="https://cdn.sanity.io/images/3do82whm/next/1cfcaef0cd27e886f24af7026f53c66e6aeb562b-400x400.png?w=96&h=96&fit=max&auto=format"
        text={`Between u and me, [@sanity_io](https://twitter.com/sanity_io?s=20&t=kJcJItwfbyrhgzU4nbvnYw) is the best and most futuristic CMS we’ve ever used, we can’t imagine using anything else`}
        className="c-teaser--tweet"
        imageSpacing
      />
      <TeaserBox
        topic="Kelly Quantrill"
        image="https://cdn.sanity.io/images/3do82whm/next/4d47b40e0256e3e67c528745bbdd70ad791bd4d2-303x303.png?w=96&h=96&fit=max&auto=format"
        text="Getting started with [@sanity_io](https://twitter.com/sanity_io?s=20&t=kJcJItwfbyrhgzU4nbvnYw) and I love their i-made-this Slack channel. It's motivating seeing other people's integrations and projects."
        className="c-teaser--tweet"
        imageSpacing

      />
      <TeaserBox
        topic="Alex Bruns"
        image="https://cdn.sanity.io/images/3do82whm/next/3d06d4afdedae8db4524c27531aa0442a59d7182-400x400.jpg?w=96&h=96&fit=max&auto=format"
        text="After trying nearly every headless CMS under the sun, I’ve come to the conclusion that [@sanity_io](https://twitter.com/sanity_io?s=20&t=kJcJItwfbyrhgzU4nbvnYw) is ~2 years ahead of the closest competitor. It’s just so much more thought-out than most."
        className="c-teaser--tweet"
        imageSpacing

      />
      <TeaserBox
        topic="Eivind Lindbråten"
        image="https://cdn.sanity.io/images/3do82whm/next/68e15ce5ffbef28767f902d3bed9e2b2523cfcb8-400x400.png?w=96&h=96&fit=max&auto=format"
        text={`I'm using [@sanity_io](https://twitter.com/sanity_io?s=20&t=kJcJItwfbyrhgzU4nbvnYw) with Next.js, and I just tell clients "this is what I work with, and what I can guarantee lets me build the best products".`}
        className="c-teaser--tweet"
        imageSpacing
      />

    </Section>
    <Section
      width="narrow"
      background="dark"
    >
      <Quote
        image="https://cdn.sanity.io/images/3do82whm/next/ea665abbc01862bbf36a947fb1181bb0d153810b-538x561.png?w=538&h=561&fit=clip&auto=format"
        source="Jon Wheeler"
        byline="Senior Product Marketing Engineer, InVision" text="Sanity enabled us to dial up our velocity to 11 with maximum ease and a value to match. The ship of engineers, designers, editors, and stakeholders has never sailed so fast."
      />
    </Section>
    <Section
      mode="list"
      gutter="none"
    >
      <Headline
        level="h3"
        content="Build beyond your expectations"
        align="center"
      />
      <Inline noStretchedColumns gutter="xs" align="center" justify="center" >
        <Button
          label="Start building"
        />
        <Button
          variant="outline"
          label="Get a demo"
        />
      </Inline>
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Landingpage = Template.bind({});
