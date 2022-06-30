/* eslint-disable react/display-name */
import React from "react";
import ReactDOM from "react-dom";

import App from './app'

export default () => <App />;

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  ); 