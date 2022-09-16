// import react from "react"
// import profileLogo from "../images/"

export default function Header(props) {
    return(
        <div className="header--container">
            <img src={props.img} alt="" />
            {/* <img src={`../images/${props.img}`} alt="" /> */}
        </div>
    )
}