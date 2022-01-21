import React from "react";
import './module.css'

const Modules = () =>{
    return(
        <div>
            <header className="title">Our Most Popular Learning Modules</header>
            <ul className="itemsList">
                <div className="item">
                    <li className="item1"><a href="#"><h3>Module 1:</h3> Reading Charts</a></li>
                    <li className="item2"><a href="#"><h3>Module 2:</h3> Options</a></li>
                    <li className="item3"><a href="#"><h3>Module 3:</h3> Short Squeeze</a></li>
                </div>
            </ul>
        </div>
        
    )

}

export default Modules;