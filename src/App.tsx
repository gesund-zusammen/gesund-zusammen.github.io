import React from "react";

import AppTheme from "./Theme";
import LandingPage from "./components/LandingPage";

class App extends React.Component {
  render = () => {
    return (
      <AppTheme>
        <LandingPage />
      </AppTheme>
    );
  };
}

export default App;
