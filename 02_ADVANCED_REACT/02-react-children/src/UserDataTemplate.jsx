import React from "react";

export default function UserDataTemplate(props) {
    return(
        <div className="userinfo">
            {props.children}
        </div>
    )
}