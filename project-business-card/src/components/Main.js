import react from "react"
import emailLogo from "../images/Mail.png"
import linkedinLogo from "../images/linkedin.png"

export default function Main() {
    return (
        <div className="main--container">
            <h3 className="main--heading main--content">
                Business Card
            </h3>
            <h4 className="main--h4--one main--content">
                Frontend Developer
            </h4>
            <span className="main--span--two main--content">
                Website Link Channel
            </span>


            <div className="btn--class">
            <button className="main--btn btn--email">
                <img src={emailLogo} className="email" />Email
            </button>
            <button className="main--btn btn--linkedin">
                <img src={linkedinLogo} className="linkedin"/>LinkedIn
            </button>
            </div>


            <div className="main--about--interest">
                <h3>About</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet labore optio beatae magnam. Sequi eius eligendi, quis repellendus nihil, libero ab nobis soluta odit tempore autem ut obcaecati maxime. Molestias!</p>
                <h3>Interests</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, vero. Dignissimos ratione ipsam pariatur laudantium iusto sunt aliquam ea assumenda neque, facilis officiis cupiditate ipsum saepe, maxime debitis quas quidem!</p>
            </div>

        </div>
    )
}