/* eslint import/no-webpack-loader-syntax: "off" */

// Import React
import React from "react";
import TodoMVC from "./todomvc";
import ThreeExample from "./3d";
import * as codeSamples from "./codeSamples";
import styled from "react-emotion";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Appear,
  Fill,
  Fit,
  CodePane,
  Image,
  Magic
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const FillWithPadding = styled(Fill)`
  padding: 20px;
`;

const SmallCodePane = styled(CodePane)`
  font-size: 0.7em !important;
`;

const MediumCodePane = styled(CodePane)`
  font-size: 0.85em !important;
`;

const NoWrapText = styled(Text)`
  white-space: nowrap;
`;

const BottomRightImage = styled(Image)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const theme = createTheme(
  {
    primary: "white",
    secondary: "#0F1E45",
    tertiary: "#19D291",
    quartenary: "#CECECE",
    lightText: "white"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

theme.screen.components.codePane.fontSize = "1em";

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        contentWidth={1200}
      >
        <Slide bgImage="images/bg1.jpg" align="flex-start center">
          <Heading
            size={1}
            caps
            lineHeight={1}
            textColor="lightText"
            textAlign="left"
          >
            React
          </Heading>
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            bold
            textAlign="left"
          >
            Declarative Web UIs
          </Text>
        </Slide>
        <Slide>
          <Heading fit textColor="secondary">
            Imperative
          </Heading>
          <CodePane theme="light" lang="jsx" source={codeSamples.imperative} />
          <Appear>
            <div>
              <Heading fit>Declarative</Heading>
              <CodePane
                theme="light"
                lang="jsx"
                source={codeSamples.declarative}
              />
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Text fit textColor="white">
            React allows you to use
          </Text>
          <Heading fit caps>
            Declarative
          </Heading>
          <Text fit textColor="white">
            in environments that are
          </Text>
          <Heading fit caps>
            Imperative
          </Heading>
          <Text textColor="white">(in a really fast way!)</Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading fit textColor="tertiary">
            React Declarative Components
          </Heading>
          <Text textColor="white">get turned into a</Text>
          <Heading textColor="tertiary">Virtual DOM</Heading>
          <Text textColor="white">tree which is diffed with the</Text>
          <Heading textColor="tertiary">Actual DOM</Heading>
          <Text textColor="white">tree resulting in</Text>
          <Heading fit textColor="tertiary">
            Imperative Changes
          </Heading>
        </Slide>
        <Slide className="extraWide" bgColor="secondary">
          <Layout>
            <Fill>
              <Text textAlign="left" textColor="white">
                React translates this...
              </Text>
              <SmallCodePane
                theme="dark"
                lang="jsx"
                source={codeSamples.reactStage1}
              />
            </Fill>
            <Fill>
              <Text textAlign="left" textColor="white">
                ...into this
              </Text>
              <SmallCodePane
                theme="dark"
                lang="jsx"
                source={codeSamples.reactStage1Result}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading margin="0 0 200px 0" fit textColor="secondary">
            Why Declarative?
          </Heading>
          <Appear>
            <div>
              <Heading fit bold caps textColor="tertiary">
                State Management!
              </Heading>
              <Text>Consistency Is Key</Text>
            </div>
          </Appear>
        </Slide>
        <Slide bgColor="white">
          <Heading>λ</Heading>
          <Text fit>Functional Programming</Text>
          <Image src="images/functional.png" />
        </Slide>
        <Slide bgColor="white">
          <Image width="300" src="images/purity.jpg" />
          <Text>Deterministic</Text>
          <Text>Side Effect Free</Text>
          <CodePane
            className="codepane-centered"
            theme="light"
            lang="jsx"
            source={`(input) => output`}
          />
          <Appear>
            <div>
              <Text textColor="tertiary" caps>
                Cacheable!
              </Text>
              <Text textColor="tertiary" caps>
                Testable
              </Text>
            </div>
          </Appear>
        </Slide>
        <Slide>
          <Heading>Composable</Heading>
          <CodePane
            className="codepane-centered"
            theme="light"
            lang="jsx"
            source={codeSamples.composable}
          />
          <Image width="700" src="images/tree.svg" />
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit caps>
            React is functional!
          </Heading>
          <CodePane
            className="codepane-centered"
            theme="dark"
            lang="jsx"
            source={codeSamples.reactFunctional}
          />
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit caps>
            React is composable!
          </Heading>
          <CodePane
            className="codepane-centered"
            theme="dark"
            lang="jsx"
            source={codeSamples.reactComposable}
          />
          <Image width="700" src="images/treeDark.svg" />
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit caps>
            Who cares?!
          </Heading>
        </Slide>
        <Slide>
          <TodoMVC />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="white">
            How in the...?<br />
            <br />
          </Heading>
          <Layout>
            <Fill>
              <Text textColor="white">State In</Text>
            </Fill>
            <Fill>
              <Text textColor="white">UI Out</Text>
            </Fill>
          </Layout>
          <Image width="700" src="images/tree.svg" />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading fit textColor="white">
            Server Side Rendering<br />
            <br />
          </Heading>
          <Layout>
            <Fill>
              <Text textColor="white">Server - Node.js</Text>
              <Text textSize="75%" textColor="white">
                (creates initial state)
              </Text>
              <Image src="images/tree.svg" />
            </Fill>
            <Fill>
              <Text textColor="white">Client - SPA</Text>
              <Text textSize="75%" textColor="white">
                (consumes initial state)
              </Text>
              <Image src="images/tree.svg" />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgImage="images/derivesystems.com.png" />
        <Slide>
          <Heading>Imperative</Heading>
          <Text>does not have to mean</Text>
          <Heading textColor="secondary">DOM API</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Layout>
            <Fill>
              <MediumCodePane
                theme="light"
                lang="jsx"
                source={codeSamples.threejs}
              />
            </Fill>

            <Fit>
              <ThreeExample />
            </Fit>
          </Layout>
        </Slide>
        <Slide>
          <Heading>React Native</Heading>
          <Text>React ➜ Swift</Text>
          <Text>React ➜ Java</Text>
        </Slide>

        <Slide bgImage="images/billy-mays.png" textColor="tertiary">
          <Heading fit textColor="white" caps>
            But wait, there's more!
          </Heading>
        </Slide>
        <Slide bgImage="images/blessed.gif">
          <Heading>Console Apps</Heading>
        </Slide>
        <Slide>
          <Heading>Windows Apps</Heading>
          <Image src="images/react-native-windows.png" />
        </Slide>
        <Slide>
          <Image height="600" src="images/office-365.png" />
        </Slide>
        <Slide>
          <Image src="images/netflix.jpg" />
        </Slide>
        <Slide>
          <BottomRightImage height="400" src="images/all-the-things.jpg" />
          <List>
            <ListItem>react-dom (Web)</ListItem>
            <ListItem>react-native (iOS and Android)</ListItem>
            <ListItem>react-native-windows (UWP)</ListItem>
            <ListItem>react-native-desktop (OS X)</ListItem>
            <ListItem>react-vr (3D)</ListItem>
            <ListItem>react-three-renderer (3D)</ListItem>
            <ListItem>react-tv (WebOS)</ListItem>
            <ListItem>react-blessed (CLI)</ListItem>
            <ListItem>ink (CLI)</ListItem>
          </List>
        </Slide>
        <Slide
          transitionIn={["fade"]}
          transitionOut={["none"]}
          bgImage="images/bg1.jpg"
          align="flex-start center"
        >
          <Heading
            size={1}
            caps
            lineHeight={1}
            textColor="lightText"
            textAlign="left"
          >
            React
          </Heading>
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            bold
            textAlign="left"
          >
            Declarative Web UIs
          </Text>
        </Slide>
        <Slide
          transitionIn={["fade"]}
          bgImage="images/bg1.jpg"
          align="flex-start center"
        >
          <Heading
            size={1}
            caps
            lineHeight={1}
            textColor="lightText"
            textAlign="left"
          >
            React
          </Heading>
          <Text
            margin="10px 0 0"
            textColor="tertiary"
            size={1}
            bold
            textAlign="left"
          >
            Declarative <strike>Web</strike> Everything UIs
          </Text>
        </Slide>
      </Deck>
    );
  }
}
