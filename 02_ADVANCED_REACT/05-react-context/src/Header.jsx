import React from "react";
import ThemeContext from "./themeContext";

function Header() {
  return (
    <ThemeContext>
      {(updateTheme) => (
        <div className={`${updateTheme}-theme`}>
          <h1>{updateTheme === "light" ? "Light" : "Dark"} Theme</h1>
        </div>
      )}
    </ThemeContext>
  );
}
export default Header;
