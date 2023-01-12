import React from "react";
import Avatar from "./IMG_8647.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default function Info(){
    return (
        <div className="info">
            <img className="info-photo" src={Avatar} alt="xin chen" />
            <h1 className="info-name">Xin Chen</h1>
            <h5 className="info-role">UX Professional</h5>
            <span><a className="info-site" href="http://xin-chen.me">xin-chen.me</a></span>

            <div className="buttons">
                <a href="mailto:xc297@cornell.edu">
                    <button className="buttons-email">
                        <FontAwesomeIcon icon={faEnvelope} className="buttons-icon"/>
                        Email</button>
                </a>
                <a href="https://www.linkedin.com/in/xinchen313/" target="_blank" rel="noopener noreferrer">
                    <button className="buttons-linkedin">
                        <FontAwesomeIcon icon={faLinkedin} className="buttons-icon"/>
                        LinkedIn</button>
                </a>
            </div>
        </div>
    )
}