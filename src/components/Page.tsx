import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";

import { translated } from "../util";

import LayoutLanding from "./layouts/Landing/Main";
import LayoutInitiativePage from "./layouts/Initiatives/Main";
import LayoutSubPage from "./layouts/Sub/Main";

import Landing from "./content/Landing";
import Initiatives from "./content/Initiatives";
import Partners from "./content/Partners";
import Faq from "./content/Faq";
import PrivacyPolicy from "./content/Privacy";
import Press from "./content/Press";
import Imprint from "./content/Imprint";

import IlluPrivacy from "../images/illu_privacy.svg";
import IlluFaq from "../images/illu_faq.svg";
import IlluPressContact from "../images/illu_presscontact.svg";
import IlluImprint from "../images/illu_imprint.svg";

const getBootLang = (): "de" | "en" => {
  const userLang: string = window.navigator.language;
  if (userLang.substr(0, 2) === "de") {
    return "de";
  }
  return "en";
};

const DEFAULT_LANG = getBootLang();

class Page extends React.Component<
  RouteComponentProps<{ lang: "de" | "en" }>,
  {}
> {
  handleLangChange = (lang: "de" | "en") => {
    const pathSegments = window.location.pathname.split("/");
    const [, , ...path] = pathSegments;
    this.props.history.push(`/${lang}/${path.join("/")}`);
  };

  render = () => {
    const props = {
      lang: this.props.match.params.lang,
      langChangeCallback: this.handleLangChange,
    };
    return (
      <Router>
        <Switch>
          <Route path="/:lang/initiatives">
            <LayoutInitiativePage
              {...props}
              title={
                translated(this.props.match.params.lang).header.nav.initiatives
              }
              content={
                translated(this.props.match.params.lang).header.content
                  .initiatives.content
              }
            >
              <Initiatives lang={this.props.match.params.lang}></Initiatives>
            </LayoutInitiativePage>
          </Route>
          <Route path="/:lang/partners">
            <LayoutSubPage
              {...props}
              title={
                translated(this.props.match.params.lang).header.nav.supporters
              }
            >
              <Partners lang={this.props.match.params.lang}></Partners>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/faq">
            <LayoutSubPage
              {...props}
              title={translated(this.props.match.params.lang).header.nav.faqs}
              image={IlluFaq}
            >
              <Faq lang={this.props.match.params.lang}></Faq>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/privacy">
            <LayoutSubPage
              {...props}
              title={
                translated(this.props.match.params.lang).footer.nav.privacy
              }
              image={IlluPrivacy}
            >
              <PrivacyPolicy
                lang={this.props.match.params.lang}
              ></PrivacyPolicy>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/press">
            <LayoutSubPage
              lang={this.props.match.params.lang}
              langChangeCallback={this.handleLangChange}
              title={translated(this.props.match.params.lang).press.title}
              image={IlluPressContact}
            >
              <Press lang={this.props.match.params.lang}></Press>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/imprint">
            <LayoutSubPage
              {...props}
              title={
                translated(this.props.match.params.lang).footer.nav.imprint
              }
              image={IlluImprint}
            >
              <Imprint></Imprint>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/" exact={true} default={true}>
            <LayoutLanding
              lang={this.props.match.params.lang}
              langChangeCallback={this.handleLangChange}
            >
              <Landing lang={this.props.match.params.lang}></Landing>
            </LayoutLanding>
          </Route>
          <Redirect to={`/${DEFAULT_LANG}/`}></Redirect>
        </Switch>
      </Router>
    );
  };
}

class LangWrapper extends React.Component {
  render = () => {
    const supportedLanguages = ["de", "en"];
    return (
      <Router>
        <ScrollMemory />
        <Switch>
          <Route
            path="/:lang/"
            render={props =>
              supportedLanguages.includes(props.match.params.lang) ? (
                <Page {...props}></Page>
              ) : (
                <Redirect to={`/${DEFAULT_LANG}/`} />
              )
            }
          ></Route>
          <Redirect to={`/${DEFAULT_LANG}/`}></Redirect>
        </Switch>
      </Router>
    );
  };
}

export default LangWrapper;
