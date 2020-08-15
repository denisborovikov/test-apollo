import React from "react";
import ReactDOM from "react-dom";
import data from "./transcript.json";

import App from "./App";

console.log(data);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
