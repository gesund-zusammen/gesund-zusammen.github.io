import "core-js";
import "raf/polyfill";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const target = document.getElementById("root");
if (target) {
  ReactDOM.render(<App />, target);
}
