import React from "react"
import '../components/layout.scss'
import './about.scss'
import Photos from "../utils/photos"

const  AboutPage = () => {
    return( 
        <div className = "aboutSection" id = "aboutID">

            <div className = "aboutTitle">
                <mark class="title"> <h3> About Me </h3> </mark>
            </div>
            <hr/>
            
            <div className = "aboutText">
                Hi there! I'm Anirudh Ahuja, a Software Engineer in the Bay Area, California. <br/> <br/>
                Solving complex problems has now become one of my primary hobbies because of the joy 
                I feel when I manage to implement the ideas floating around in my head. <br/> <br/>
                As for what I'm into, I am extensively into front-end web development because of the 
                creative freedom the platform offers and game development because I find it new and engaging. <br/> <br/>
                Here's some stuff I've been working with recently/learning more about! <br/> <br/>
                <div className = "imageofMe"> <Photos /> </div>
            </div>

            <div className = "aboutList">
                    <ul class = "a">
                        <li> Java </li>
                        <li> C# / C </li>
                        <li> ReactJS </li>
                    </ul>
                    <ul class = "a">
                        <li> Python </li>
                        <li> PostgreSQL </li>
                        <li> HTML & (S)CSS </li>
                    </ul>        
            </div>
            
        </div>
    )
}

export default AboutPage;