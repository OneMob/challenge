import React from "react";
import ReactDOM from "react-dom";
import { ToastProvider } from "react-toast-notifications";

import Home from "./Home";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <ToastProvider>
      <Home />
    </ToastProvider>,
    document.body.appendChild(document.createElement("div"))
  );
});
