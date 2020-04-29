import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxLogger from "redux-logger";
import { CssBaseline } from "@material-ui/core";

import AppTheme from "./Theme";
import Page from "./components/Page";

import "./i18n";
import reducer from "./reducer";

const { NODE_ENV } = process.env;

const reduxMiddleware = [reduxLogger];
const store = createStore(
  reducer,
  NODE_ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...reduxMiddleware))
    : undefined,
);

class App extends React.Component {
  render = () => {
    return (
      <Provider store={store}>
        <AppTheme>
          <CssBaseline>
            <Page />
          </CssBaseline>
        </AppTheme>
      </Provider>
    );
  };
}

export default App;
