import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.linkedin.com/in/xinchen313/" target="black_" rel="noopener noreferrer">
                <FontAwesomeIcon className = "footer-icon" icon = {faLinkedin}/>
            </a>

            <a href="https://www.instagram.com/xinc313/" target="black_" rel="noopener noreferrer">
                <FontAwesomeIcon className = "footer-icon" icon = {faInstagram}/>
            </a>

            <a href="https://github.com/xinc313" target="black_" rel="noopener noreferrer">
                <FontAwesomeIcon className="footer-icon" icon = {faGithub} />
            </a>



        </footer>
    )
}