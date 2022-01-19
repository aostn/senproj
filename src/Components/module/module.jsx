import React from "react";
import './module.css'

const Modules = () =>{
    return(
        <div>
            <header className="title">Our Most Popular Learning Modules</header>
            <ul className="itemsList">
                <li className="item"><a href="#">Module 1</a></li>
                <li className="item"><a href="#">Module 2</a></li>
                <li className="item"><a href="#">Module 3</a></li>
            </ul>
        </div>
        
    )

}

export default Modules;