import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import ScrollMemory from "react-router-scroll-memory";
import { Translation, WithTranslation } from "react-i18next";

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

interface IPageProps
  extends RouteComponentProps<{ lang: "de" | "en" }>,
    WithTranslation {}

class Page extends React.Component<IPageProps, {}> {
  handleLangChange = (lang: "de" | "en") => {
    const pathSegments = this.props.location.pathname.split("/");
    const [, , ...path] = pathSegments;
    this.props.history.push(`/${lang}/${path.join("/")}`);
    this.props.i18n.changeLanguage(lang);
  };

  render = () => {
    const layoutProps = {
      ...this.props,
      lang: this.props.match.params.lang,
      langChangeCallback: this.handleLangChange,
    };
    return (
      <Router>
        <ScrollMemory />
        <Switch>
          <Route path="/:lang/initiatives">
            <LayoutInitiativePage
              {...layoutProps}
              title={this.props.t("header.nav.initiatives")}
              content={this.props.t("header.content.initiatives.content")}
            >
              <Initiatives lang={this.props.match.params.lang}></Initiatives>
            </LayoutInitiativePage>
          </Route>
          <Route path="/:lang/partners">
            <LayoutSubPage
              {...layoutProps}
              title={this.props.t("header.nav.supporters")}
            >
              <Partners lang={this.props.match.params.lang}></Partners>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/faq">
            <LayoutSubPage
              {...layoutProps}
              title={this.props.t("header.nav.faqs")}
              image={IlluFaq}
            >
              <Faq lang={this.props.match.params.lang}></Faq>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/privacy">
            <LayoutSubPage
              {...layoutProps}
              title={this.props.t("footer.nav.privacy")}
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
              title={this.props.t("press.title")}
              image={IlluPressContact}
            >
              <Press lang={this.props.match.params.lang}></Press>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/imprint">
            <LayoutSubPage
              {...layoutProps}
              title={this.props.t("footer.nav.imprint")}
              image={IlluImprint}
            >
              <Imprint></Imprint>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/" exact={true} default={true}>
            <LayoutLanding {...layoutProps}>
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
  replaceLang = (pathname: string, lang: "de" | "en") => {
    const pathSegments = pathname.split("/");
    const [, , ...path] = pathSegments;
    return `/${lang}/${path.join("/")}`;
  };

  render = () => {
    const supportedLanguages = ["de", "en"];
    return (
      <Router>
        <Switch>
          <Route
            path="/:lang/"
            render={props =>
              supportedLanguages.includes(props.match.params.lang) ? (
                <Translation>
                  {(t, { i18n, lng }, ready) => (
                    <Page
                      {...{
                        t,
                        i18n,
                        lng,
                        tReady: ready,
                        ...props,
                      }}
                    ></Page>
                  )}
                </Translation>
              ) : (
                <Redirect to={`/${DEFAULT_LANG}${props.location.pathname}`} />
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
