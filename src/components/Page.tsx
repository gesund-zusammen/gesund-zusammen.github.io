import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";

import { translated } from "../util";

import LayoutLanding from "./layouts/Landing/Main";
import LayoutInitiativePage from "./layouts/Initiative/Main";
import LayoutSubPage from "./layouts/Sub/Main";

import Landing from "./content/Landing";
import Initiative from "./content/Initiative";
import Partners from "./content/Partners";
import Faq from "./content/Faq";
import PrivacyPolicy from "./content/Privacy";
import Imprint from "./content/Imprint";

import IlluPrivacy from "../images/illu_privacy.svg";
import IlluFaq from "../images/illu_faq.svg";

interface IPageState {
  lang: "de" | "en";
}

const DEFAULT_STATE: IPageState = {
  lang: "de",
};

class Page extends React.Component<{}, IPageState> {
  constructor(props: {}) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleLangChange = (lang: "de" | "en") => {
    this.setState({ lang });
  };

  render = () => {
    return (
      <Router>
        <ScrollMemory />
        <Switch>
          <Route exact={true} default={true} path="/">
            <LayoutLanding
              lang={this.state.lang}
              langChangeCallback={this.handleLangChange}
            >
              <Landing lang={this.state.lang}></Landing>
            </LayoutLanding>
          </Route>
          <Route path="/initiative">
            <LayoutInitiativePage
              lang={this.state.lang}
              langChangeCallback={this.handleLangChange}
              title={translated(this.state.lang).header.nav.initiative}
              content={
                translated(this.state.lang).header.content.initiative.content
              }
            >
              <Initiative lang={this.state.lang}></Initiative>
            </LayoutInitiativePage>
          </Route>
          <Route path="/partners">
            <LayoutSubPage
              lang={this.state.lang}
              langChangeCallback={this.handleLangChange}
              title={translated(this.state.lang).header.nav.supporters}
            >
              <Partners lang={this.state.lang}></Partners>
            </LayoutSubPage>
          </Route>
          <Route path="/faq">
            <LayoutSubPage
              lang={this.state.lang}
              langChangeCallback={this.handleLangChange}
              title={translated(this.state.lang).header.nav.faqs}
              image={IlluFaq}
            >
              <Faq lang={this.state.lang}></Faq>
            </LayoutSubPage>
          </Route>
          <Route path="/privacy">
            <LayoutSubPage
              lang={this.state.lang}
              langChangeCallback={this.handleLangChange}
              title={translated(this.state.lang).footer.nav.privacy}
              image={IlluPrivacy}
            >
              <PrivacyPolicy></PrivacyPolicy>
            </LayoutSubPage>
          </Route>
          <Route path="/imprint">
            <LayoutSubPage
              lang={this.state.lang}
              langChangeCallback={this.handleLangChange}
              title={translated(this.state.lang).footer.nav.imprint}
              image={IlluPrivacy}
            >
              <Imprint></Imprint>
            </LayoutSubPage>
          </Route>
        </Switch>
      </Router>
    );
  };
}

export default Page;
