import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}

    {/* <Route path=""> */}
    <App />
    {/* </Route> */}

    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);
