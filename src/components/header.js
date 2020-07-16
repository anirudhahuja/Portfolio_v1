import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import './layout.scss'

//Smooth Scrolling
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}

const Header = () => { 
    
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const html = document.querySelector('html')
        window.onscroll = function() {myFunction()};
        // Get the header
        var header = document.getElementById("headerID");
        // Get the offset position of the navbar
        var sticky = header.offsetTop;
        // Get the offset for Y position
        var prevScrollpos = window.pageYOffset;
        
        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        // While scrolling down, hide header, when scroll up, show header.
        function myFunction() {
            var currentScrollPos = window.pageYOffset;
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("headerID").style.top = "0";
            } else {
                document.getElementById("headerID").style.top = "-50px";
            }
            prevScrollpos = currentScrollPos;
        }
        { open ? (html.style.overflow = "hidden") : (html.style.overflow = "visible")};
    });

    return (
        <div className = "headerSection">
            <header class = "SiteHeader" id = "headerID" style = {{
                background: 'rgb(74, 78, 102)',
                padding: `0.2rem`,
            }}>
                <div className = "InsideLinks">
                    <div> <mark class="blueColor"> I. </mark> <Link to = "#"> Home </Link> </div>
                    <div> <mark class="blueColor"> II.  </mark> <Link to = "/#aboutID"> About </Link> </div>
                    <div> <mark class="blueColor"> III. </mark>  <Link to = "/#portfolioID"> Portfolio </Link> </div>
                    <div> <mark class="blueColor"> IV. </mark> <Link to = "/#contactID"> Contact </Link> </div>
                    <div>
                        <button class="Resume_Button">
                            <a class = "blueColor" href = "Resume.pdf" target = "_blank" rel = "noopener noreferrer"> Resume </a>
                        </button>
                    </div>      
                </div>

                <div className = "Menu">
                    <button class = "Menu-Button" onClick = {() => setOpen(!open)}>
                        {open ? <FaTimes color = 'white' size = '1em'/> : <FaBars color = 'white' size = '1em'/>}
                    </button>   
                </div>
                <nav class = {open ? "navbar" : "navbar-hidden"}>
                    <ul class = "navbar-nav">  
                        <div> <mark class="blueColor"> I. </mark> <Link to = "#" onClick = {() => setOpen(!open)}> Home </Link> </div>
                        <div> <mark class="blueColor"> II.  </mark> <Link to = "/#aboutID" onClick = {() => setOpen(!open)}> About </Link> </div>
                        <div> <mark class="blueColor"> III. </mark>  <Link to = "/#portfolioID" onClick = {() => setOpen(!open)}> Portfolio </Link> </div>
                        <div> <mark class="blueColor"> IV. </mark> <Link to = "/#contactID" onClick = {() => setOpen(!open)}> Contact </Link> </div>
                        <div>
                            <button class="Resume_Button">
                                <a class = "Resume_Button" href = "Resume.pdf" target = "_blank" rel = "noopener noreferrer"> Resume </a>
                            </button>
                        </div>      
                    </ul>
                </nav>
                <div className = "OutsideLinks">     
                    <div>
                        <a href="https://github.com/anirudhahuja" target = "_blank" rel = "noopener noreferrer"> <FaGithub color = 'white' size = '1em'/> </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/anirudhahuja/" target = "_blank" rel = "noopener noreferrer"> <FaLinkedin color = 'white' size = '1em'/> </a>
                    </div>
                </div>
                
            </header>
        </div>
    )
}


export default Header