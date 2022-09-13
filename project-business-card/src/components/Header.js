import react from "react"
import profileLogo from "../images/profile-logo.jpg"

export default function Header() {
    return(
        <div className="header--container">
            <img src={profileLogo} alt="" width="317px" height="280px"/>
        </div>
    )
}