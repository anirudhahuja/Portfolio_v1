import React from "react"
import '../components/layout.scss'

const ContactPage = () => {
    return(
        <div className = "contactSection">
            <div className = "contactTitle" id = "contactID">
                <mark class="title"> <h3> Get in Touch </h3> </mark>
            </div>
            <hr/>
            <div className = "contactText">
                I'm currently looking for new job opportunities, so if you'd like to discuss something, my inbox is open! 
                Otherwise, if you just want to chat, feel free to reach out as well! 
            </div>
            <a href="mailto:anahuja@ucsc.edu"> <button id="btnOutlook" className = "contactButton"> Contact Me </button> </a>
        </div>
    )
}

export default ContactPage;