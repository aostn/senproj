import React from "react";
import './nav.css'
import logo from '../logo.png'

const Nav = () =>(

    <nav className="main-nav">
        <img src={logo} className="logo" />
        <ul>
            <li><a href="#">Modules</a></li>
            <li><a href="#">Discord Bot</a></li>
            <li><a href="#">Contact</a></li>
            <li><input type='text' placeholder="Search.."></input></li>
        </ul>
    </nav>


)

export default Nav