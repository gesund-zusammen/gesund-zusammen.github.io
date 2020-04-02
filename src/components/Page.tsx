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

import { DEFAULT_LANG } from "../i18n";

interface IPageProps
  extends RouteComponentProps<{ lang: "de" | "en" }>,
    WithTranslation {}

class Page extends React.Component<IPageProps, {}> {
  handleLangChange = (lang: "de" | "en") => {
    this.props.i18n.changeLanguage(lang, () => {
      const pathSegments = this.props.location.pathname.split("/");
      const [, , ...path] = pathSegments;
      this.props.history.push(`/${lang}/${path.join("/")}`);
    });
  };

  render = () => {
    const layoutProps = {
      ...this.props,
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
              <Initiatives></Initiatives>
            </LayoutInitiativePage>
          </Route>
          <Route path="/:lang/partners">
            <LayoutSubPage
              {...layoutProps}
              title={this.props.t("header.nav.supporters")}
            >
              <Partners></Partners>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/faq">
            <LayoutSubPage
              {...layoutProps}
              title={this.props.t("header.nav.faqs")}
              image={IlluFaq}
            >
              <Faq></Faq>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/privacy">
            <LayoutSubPage
              {...layoutProps}
              title={this.props.t("footer.nav.privacy")}
              image={IlluPrivacy}
            >
              <PrivacyPolicy></PrivacyPolicy>
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/press">
            <LayoutSubPage
              langChangeCallback={this.handleLangChange}
              title={this.props.t("press.title")}
              image={IlluPressContact}
            >
              <Press></Press>
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
