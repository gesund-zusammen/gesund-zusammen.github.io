import React from "react";
import { CssBaseline } from "@material-ui/core";

import AppTheme from "./Theme";
import Page from "./components/Page";

import "./i18n";

class App extends React.Component {
  render = () => {
    return (
      <AppTheme>
        <CssBaseline>
          <Page />
        </CssBaseline>
      </AppTheme>
    );
  };
}

export default App;
