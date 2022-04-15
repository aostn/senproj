import React from "react";
import './module.css'
import modules from "../../ModulesPage/modules";

const Modules = () =>{
    return(
        <div>
            <header className="title">Our Most Popular Learning Modules</header>
            <ul className="itemsList">
                <div className="item">
                    <li className="item1"><a href="/modules"><h3>Module 1:</h3> {modules.module1.title}</a></li>
                    <li className="item2"><a href="/modules"><h3>Module 2:</h3> {modules.module2.title}</a></li>
                    <li className="item3"><a href="/modules"><h3>Module 3:</h3> {modules.module3.title}</a></li>
                </div>
            </ul>
        </div>
        
    )

}

export default Modules;