import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NatureContextProvider } from "./NatureContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <NatureContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NatureContextProvider>
);
