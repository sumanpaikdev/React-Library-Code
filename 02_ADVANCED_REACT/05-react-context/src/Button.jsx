import React from "react";
import ThemeContext from "./themeContext";

function Button(props) {
    return(
        <ThemeContext.Consumer>
            {
                (updateTheme) => {
                    return(
                        <button className={`${updateTheme}-theme`}>Switch Theme</button>
                    )
                }
            }
        </ThemeContext.Consumer>
        
    )
}
export default Button