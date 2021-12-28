import React from "react";
import Nav from './Nav/nav';
import Hero from './Hero/hero';
import Modules from './Components/module/module'

const Homepage = () =>{
    const modulesTitles = ['Module 1', 'Module 2', 'Module 3']
    return(
        <div>
            {/* Nav*/}
            <Nav />

            {/* hero photo */}
            <Hero />

            {/* Modules */}
            {
                modulesTitles.forEach(title => <Modules title={title}/>)
            }
        </div>
        
        //Cover photo
        //Modules
        //Discord bot 
        //Footer
    )
}

export default Homepage