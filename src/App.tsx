import React from "react";
import ReactGA from "react-ga";

import AppTheme from "./Theme";
import Page from "./components/Page";

import "./i18n";

const { GA_TRACKING_ID } = process.env;

class App extends React.Component {
  constructor(props: {}) {
    super(props);
    if (GA_TRACKING_ID) {
      ReactGA.initialize(GA_TRACKING_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }

  render = () => {
    return (
      <AppTheme>
        <Page />
      </AppTheme>
    );
  };
}

export default App;
