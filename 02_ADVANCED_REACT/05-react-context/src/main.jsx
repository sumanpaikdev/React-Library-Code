import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeContext from "./themeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContext.Provider value={"dark"}>
    <App />
  </ThemeContext.Provider>
);
