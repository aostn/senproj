import React from "react";
import './nav.css'
import logo from '../logo.png'

const Nav = () =>(

    <nav className="main-nav">
        <img src={logo} className="logo" />
        <ul className="navList">
            <li className="navItem"><a href="#">Modules</a></li>
            <li className="navItem"><a href="#">Discord Bot</a></li>
            <li className="navItem"><a href="#">Contact</a></li>
            <li className="searchBox"><input type='text' placeholder="Search.."></input></li>
        </ul>
    </nav>


)

export default Nav