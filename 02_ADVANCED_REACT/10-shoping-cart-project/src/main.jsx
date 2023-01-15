import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import  {pictureContextProvider} from "./pictureContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <pictureContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </pictureContextProvider>
);
