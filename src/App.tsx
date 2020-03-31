import React from "react";

import AppTheme from "./Theme";
import Page from "./components/Page";

class App extends React.Component {
  render = () => {
    return (
      <AppTheme>
        <Page />
      </AppTheme>
    );
  };
}

export default App;
