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

import LayoutAccelerator from "./layouts/Accelerator/Main";
import LayoutDatabasePage from "./layouts/Database/Main";
import LayoutInitiative from "./layouts/Initiative/Main";
import LayoutStart from "./layouts/Start/Main";
import LayoutSubPage from "./layouts/Sub/Main";

import Accelerator from "./content/Accelerator";
import Database from "./content/Database";
import Partners from "./content/Partners";
import Faq from "./content/Faq";
import PrivacyPolicy from "./content/Privacy";
import Press from "./content/Press";
import Imprint from "./content/Imprint";
import Program from "./content/Program";
import PaperForm from "./common/PaperForm";
import Initiative from "./content/Initiative";
import Start from "./content/Start";

import IlluPrivacy from "../images/illu_privacy.svg";
import IlluFaq from "../images/illu_faq.svg";
import IlluProgram from "../images/illu_program.svg";
import IlluPartner from "../images/illu_partner.svg";

import IlluPressContact from "../images/illu_presscontact.svg";
import IlluImprint from "../images/illu_imprint.svg";

import { DEFAULT_LANG } from "../i18n";

interface IPageProps
  extends RouteComponentProps<{ lang: "de" | "en" | "fr" | "it" | "es" }>,
    WithTranslation {}

class Page extends React.Component<IPageProps, {}> {
  componentDidMount = () => {
    if (this.props.match.params.lang !== this.props.i18n.language) {
      setTimeout(() => {
        this.props.i18n.changeLanguage(this.props.match.params.lang);
      });
    }
  };

  render = () => {
    return (
      <Router>
        <ScrollMemory />
        <Switch>
          <Route path="/:lang/initiative">
            <LayoutInitiative>
              <Initiative />
            </LayoutInitiative>
          </Route>
          <Route path="/:lang/accelerator">
            <LayoutAccelerator>
              <Accelerator />
            </LayoutAccelerator>
          </Route>
          <Route path="/:lang/(initiatives|database)">
            <LayoutDatabasePage
              title={this.props.t("header.nav.database")}
              content={this.props.t("initiatives.content")}
            >
              <Database />
            </LayoutDatabasePage>
          </Route>
          <Route path="/:lang/program">
            <LayoutSubPage
              title={this.props.t("program.header.title")}
              image={IlluProgram}
            >
              <Program />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/apply">
            <LayoutSubPage
              title={this.props.t("program.header.title")}
              image={IlluProgram}
            >
              <PaperForm paperform="gesundzusammen" />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/mentor">
            <LayoutSubPage
              title={this.props.t("program.header.title")}
              image={IlluProgram}
            >
              <PaperForm paperform="mentor-gz" />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/support">
            <LayoutSubPage
              title={this.props.t("header.nav.partners")}
              image={IlluPartner}
            >
              <PaperForm paperform="support-gesundzusammen" />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/partners">
            <LayoutSubPage
              title={this.props.t("header.nav.partners")}
              image={IlluPartner}
            >
              <Partners />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/faq">
            <LayoutSubPage
              title={this.props.t("header.nav.faqs")}
              image={IlluFaq}
            >
              <Faq />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/privacy">
            <LayoutSubPage
              title={this.props.t("footer.nav.privacy")}
              image={IlluPrivacy}
            >
              <PrivacyPolicy />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/press">
            <LayoutSubPage
              title={this.props.t("press.title")}
              image={IlluPressContact}
            >
              <Press />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/imprint">
            <LayoutSubPage
              title={this.props.t("footer.nav.imprint")}
              image={IlluImprint}
            >
              <Imprint />
            </LayoutSubPage>
          </Route>
          <Route path="/:lang/" exact={true} default={true}>
            {window.location.hostname === "gesund-zusammen.de" ? (
              <LayoutAccelerator>
                <Accelerator />
              </LayoutAccelerator>
            ) : (
              <LayoutStart>
                <Start />
              </LayoutStart>
            )}
          </Route>
          <Redirect to={`/${DEFAULT_LANG}/`} />
        </Switch>
      </Router>
    );
  };
}

class LangWrapper extends React.Component {
  replaceLang = (pathname: string, lang: "de" | "en" | "it" | "es" | "fr") => {
    const pathSegments = pathname.split("/");
    const [, , ...path] = pathSegments;
    return `/${lang}/${path.join("/")}`;
  };

  render = () => {
    const supportedLanguages = ["de", "en", "it", "es", "fr"];
    return (
      <Router>
        <Switch>
          <Route
            path="/:lang/"
            render={props =>
              supportedLanguages.includes(props.match.params.lang) ? (
                <Translation>
                  {(t, { i18n, lng }, ready) => (
                    <Page {...{ t, i18n, lng, tReady: ready, ...props }} />
                  )}
                </Translation>
              ) : (
                <Redirect to={`/${DEFAULT_LANG}${props.location.pathname}`} />
              )
            }
          />
          <Redirect to={`/${DEFAULT_LANG}/`} />
        </Switch>
      </Router>
    );
  };
}

export default LangWrapper;
