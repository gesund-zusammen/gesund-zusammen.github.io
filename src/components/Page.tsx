import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";

import { translated } from "../util";

import LayoutLanding from "./layouts/Landing/Main";
import LayoutSubPage from "./layouts/Sub/Main";

import Landing from "./content/Landing";
import Partners from "./content/Partners";
import Faq from "./content/Faq";
import PrivacyPolicy from "./content/Privacy";

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
        </Switch>
      </Router>
    );
  };
}

export default Page;
