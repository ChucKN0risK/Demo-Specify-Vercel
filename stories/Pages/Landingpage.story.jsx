import { Columns, Column, Split, Stack } from "@bedrock-layout/primitives";
import "../../src/token-default-improvements.scss";
import "../../src/individualisation.scss";
import { InlineSvgPictureProvider } from "../../src/inline-svg-picture/InlineSvgPicture";
import { Blimp } from "../../src/images/Blimp";
import { Building } from "../../src/images/Building";
import { Alien } from "../../src/images/Alien";
import { Angel } from "../../src/images/Angel";
import { Atom } from "../../src/images/Atom";
import { Unicorn } from "../../src/images/Unicorn";
import { CommentCheck } from "../../src/images/CommentCheck";
import { Dialogue } from "../../src/images/Dialogue";
import { DesignData } from "../../src/images/DesignData";
import { Hangout } from "../../src/images/Hangout";
import { Noted } from "../../src/images/Noted";
import { Researching } from "../../src/images/Researching";

import {
  Headline,
  ContentBox,
  TeaserBox,
  Section,
  Button,
} from "@kickstartds/base";

import { Quote, Storytelling } from "@kickstartds/content";

import { TextField } from "@kickstartds/form";

export default {
  title: "Landingpage",
};

const Page = () => (
  <>
    <Section width="full" spaceAfter="none" >
      <InlineSvgPictureProvider>
        <Storytelling
          backgroundImage="bg.svg"
          full
          box={{
            link: {
              label: "Lift up with us",
              variant: "solid",
            },
            headline: {
              content: "Token are our dream come true",
              subheadline: "You'll ultimately fall in love with us too",
              level: "h1",
              styleAs: "h1",
              spaceAfter: "small",
            },
            text: "One unique source of love where your design decisions are documented and easily distributed though the platform you choose",
            hAlign: "center",
            vAlign: "left",
          }}
          image={{
            source: Blimp,
            order: {
              desktopImageLast: false,
            },
          }}
        />
      </InlineSvgPictureProvider>
    </Section>

    <Section width="full" spaceBefore="none">
      <InlineSvgPictureProvider>
        <Storytelling
          backgroundImage="bg_2.svg"
          full
          box={{
            link: {
              label: "Turn off the lights!",
              variant: "solid",
            },
            headline: {
              content: "From morn to midnight",
              subheadline: "From dusk to dawn",
              level: "h1",
              styleAs: "h1",
              spaceAfter: "small",
            },
            text: "This title goes further than the silent expressionist film directed by Karlheinz Martin. Synchronizing tokens is easier  than any drama and comes in less than five acts.",
            hAlign: "right",
            vAlign: "center",
          }}
          image={{
            source: Building,
            order: {
              desktopImageLast: true,
            },
          }}
        />
      </InlineSvgPictureProvider>
    </Section>
    <Section
      ks-inverted="true"
      headline={{
        align: "center",
        content: "kickstartDS ❤️ Design Tokens. And so will you.",
        subheadline:
          "No matter which tool you use, Figma, Visual Code or our CLI, tokens can be used for more than you might think in the first degree. We color backgrounds, type and even animated SVGs. you can setup shadows, spacings, radiuses, alphas and so much more",
        level: "h2",
        spaceAfter: "small",
      }}
      spaceAfter="default"
      mode="list"
      spaceBefore="default"
    >
      <InlineSvgPictureProvider>
        <Split switchAt="25rem" gutter="var(--ks-spacing-m)">
          <ContentBox
            image={Unicorn}
            topic="A new unicorn?"
            text="The sky above the port was the color of television, tuned to a dead channel."
          />
          <ContentBox
            image={Alien}
            topic="or an alien?"
            text="`It's not like I'm using,' Case heard someone say, as he shouldered his way through the crowd around the [door of the Chat](http://example.com/)."
          />
        </Split>
        <Split switchAt="25rem" gutter="var(--ks-spacing-m)">
          <ContentBox
            image={Angel}
            topic="Maybe an angel? "
            text="Sprawl voice and a Sprawl joke. The Chatsubo was a bar for professional expatriates; you could drink there for a week and never hear two words in Japanese."
          />
          <ContentBox
            image={Atom}
            topic="It just splits the atom!"
            text="Ratz was tending bar, his prosthetic arm jerking monotonously as he filled a tray of glasses with draft Kirin."
          />
        </Split>
      </InlineSvgPictureProvider>
    </Section>
    <Section width="wide">
      <InlineSvgPictureProvider>
        <Storytelling
          full
          box={{
            link: {
              label: "Start measuring now",
              variant: "outline",
            },
            headline: {
              content: "Telemetry is heaven, too.",
              subheadline:
                "Design System adoption and engagement at scale",
              spaceAfter: "small",
            },
            text: "The black clinics of Chiba were the cutting edge, whole bodies of technique supplanted monthly, and still they couldn't repair the damage he'd suffered in that Memphis hotel.",
            hAlign: "top",
            vAlign: "right",
          }}
          image={{
            source: DesignData,
            order: {
              desktopImageLast: true,
            },
          }}
        />
      </InlineSvgPictureProvider>
    </Section>
    <Section
      background="accent"
      width="default"
      headline={{
        content: "What others say",
        spaceAfter: "small",
      }}
    >
      <Quote
        image="https://cdn.shopify.com/s/files/1/2046/8557/articles/yellow-octopus-minions-quotes_1024x1024.jpg?v=1611880825"
        source="Jerry, ACME Corp."
        text="My mind is like my web browser. 29 tabs are open, 3 are frozen and I have no idea where the music is coming from."
      />
    </Section>
    <Section width="wide" spaceBefore="small" spaceAfter="small">
      <InlineSvgPictureProvider>
        <ContentBox
          image={Noted}
          topic="Measure"
          text="is a science fiction novel by American-Canadian writer William Gibson, originally published in 1986."
          link={{
            enabled: true,
            label: "Count Zero",
            variant: "clear",
            iconAfter: true,
            icon: {
              icon: "chevron-right",
            },
          }}
        />
        <ContentBox
          image={Researching}
          topic="Build"
          text="It is the second volume of the Sprawl trilogy, which begins with Neuromancer and ..."
          link={{
            enabled: true,
            label: "Sync and deploy",
            variant: "clear",
            iconAfter: true,
            icon: {
              icon: "chevron-right",
            },
          }}
        />
        <ContentBox
          image={Hangout}
          topic="Learn"
          text="... concludes with Mona Lisa Overdrive, and is an example of the cyberpunk subgenre."
          link={{
            enabled: true,
            label: "Reflect it",
            variant: "clear",
            iconAfter: true,
            icon: {
              icon: "chevron-right",
            },
          }}
        />
      </InlineSvgPictureProvider>
    </Section>
    <Section
      background="accent"
      width="wide"
      headline={{
        content: "Trusted by animals all over the planet",
        styleAs: "h1",
        spaceAfter: "small",
      }}
    >
      <Storytelling
        ks-inverted="true"
        full
        backgroundColor="var(--ks-background-color-primary-inverted-interactive)"
        box={{
          link: {
            label: "More cute kittens",
            variant: "outline",
          },
          headline: {
            content: "A story without a cute kitten is no story",
            subheadline:
              "There re so many kittens out there. Time to discover",
            level: "h3",
            styleAs: "h3",
            spaceAfter: "small",
          },
          text: "Taken from Medium. There once were two cats who lived across the road from the school in a small town near you. One of them, named Fluff, lived in a nice house and her best friend, Kat, lived next door in a rather old and ugly house. The owners of the cats were best friends too.",
          hAlign: "center",
        }}
        image={{
          source:
            "https://images.unsplash.com/photo-1554344056-54906b85f9d7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211",
          order: {
            desktopImageLast: false,
          },
          ratio: "1:1",
        }}
      />
    </Section>
    <Section
      width="default"
      headline={{
        content: "If you need to decide ... ",
        subheadline: "... which would be your prefered William Gibson trilogy?",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <InlineSvgPictureProvider>
        <TeaserBox
          topic="The Sprawl series "
          text="he Sprawl trilogy is William Gibson's first set of novels, composed of Neuromancer (1984), Count Zero (1986), and Mona Lisa Overdrive (1988)."
          image={CommentCheck}
          imageSpacing
          link={{
            hidden: false,
            label: "First trilogy was best",
            variant: "solid",
            iconAfter: true,
            icon: {
              icon: "chevron-right",
            },
          }}
        />
        <TeaserBox
          topic="The Idoru trilogy"
          text="The trilogy comprises the novels Virtual Light (1993), Idoru, (1996) and All Tomorrow's Parties (1999)."
          image={Dialogue}
          imageSpacing
          link={{
            hidden: false,
            label: "The newer the better",
            variant: "solid",
            iconAfter: true,
            icon: {
              icon: "chevron-right",
            },
          }}
        />
      </InlineSvgPictureProvider>
    </Section>


    <Section width="wide">
      <Storytelling
        backgroundColor="var(--ks-background-color-accent)"
        full
        box={{
          link: {
            label: "More cute kittens!",
            variant: "solid",
          },
          headline: {
            content: "The story of the cute kitten continues",
            subheadline:
              "A short story for children of all ages",
            spaceAfter: "small",
          },
          text: "One year both cats had kittens at the same time. The first kitten born to Fluff was pretty little white cat. She was bigger than her brothers and sisters and her owners named her Beauty. Everyone who saw her felt that her name fit her perfectly.",
          hAlign: "center",
        }}
        image={{
          source:
            "https://miro.medium.com/max/1400/0*52iMzZDkmr7bvXfU",
          ratio: "1:1",
          order: {
            desktopImageLast: true,
          },
        }}
      />
    </Section>
    <Section
      width="wide"
      spaceBefore="small"
      headline={{
        content: "Where do you prefer to get your books?",
        subheadline: " ",
        level: "h2",
        align: "center",
        spaceAfter: "small",
      }}
    >
      <TeaserBox
        topic="Local book shop"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="Borrow from friends"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="Library"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="Buy online"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="Book circle"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: true,
          label: "lorem ipsum",
          variant: "clear",
          iconAfter: true,
          icon: {
            icon: "chevron-right",
          },
        }}
      />
      <TeaserBox
        topic="I don't read"
        text="At vero eos et accusam et justo duo dolores et ea rebum.
              At vero eos et accusam et justo duo dolores et ea rebum."
        link={{
          hidden: true,
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
      width="wide"
      ks-inverted="true"
      spaceBefore="small"
      spaceAfter="small"
    >
      <Columns columns="3" switchAt="40rem">
        <Column offsetStart="1">
          <Stack gutter="var(--ks-spacing-m)">
            <Stack gutter="var(--ks-spacing-s)">
              <Headline content="Sign up for updates" level="h3" align="center" />

              <TextField
                inputMode="text"
                label="Est dolore a debitis"
                hideLabel
                placeholder="Email"
                type="text"
              />
              <TextField
                inputMode="text"
                label="Name"
                hideLabel
                placeholder="Name"
                type="text"
              />
            </Stack>
            <Button label="Sing up" />
          </Stack>
        </Column>
      </Columns>
    </Section>
  </>
);

const Template = (args) => <Page {...args} />;
export const Landingpage = Template.bind({});