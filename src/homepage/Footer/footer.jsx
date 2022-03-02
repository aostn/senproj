import React from "react";
import './footer.css';
import logo from '../logo.png'

const Footer = () =>{
    return(
        <div className="footer-section">
            <div className="footer-title">
                <header className="footer-name"> Tickr &copy;</header>
                <img src={logo} className="footer-logo"/>
                <div className="slogan">
                    <p>The market doesn't stop.</p>
                </div>
            </div>
            
            <div className="links">
                <ul>
                    <li className="foot-link"><a href="#">About Us</a></li>
                    <li className="foot-link"><a href="#">Discord Bot</a></li>
                    <li className="foot-link"><a href="#">Contact Us</a></li>
                    <li className="foot-link"><a href="#">Careers</a></li>
                </ul>
            </div>
        </div>
        
    )
}

export default Footer;