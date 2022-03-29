import React from "react";
import './nav.css'
import logo from '../logo.png'

const Nav = () =>{
    const homeOrModules = window.location.pathname === '/';

    return(
        <nav className="main-nav">
            <a href="/"><img src={logo} className="nav-logo" /></a> 
            <div className>
                <ul className="navList">
                    <li className="navItem"><a href={homeOrModules ? "/modules":"/"}>{homeOrModules ? "Modules" : "Home"}</a></li>
                    <li className="navItem"><a href="#">Discord Bot</a></li>
                    <li className="navItem"><a href="/about">About Us</a></li>
                    <li className="navItem"><a href="#">Contact</a></li>
                    <li className="searchBox"><input type='text' placeholder="Search.."></input></li>
                </ul>
            </div>
        </nav>
    )
        
};


export default Nav