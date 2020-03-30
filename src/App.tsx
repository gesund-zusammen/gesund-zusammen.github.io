import React from "react";
import ReactGA from "react-ga";

import AppTheme from "./Theme";
import Page from "./components/Page";

const { NODE_ENV } = process.env;

class App extends React.Component {
  constructor(props: {}) {
    super(props);
    let gaTrackingId = "UA-000000-01";
    if (NODE_ENV === "production") {
      gaTrackingId = "UA-162148086-1";
    }
    ReactGA.initialize(gaTrackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
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
