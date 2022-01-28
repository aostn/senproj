import React from "react";
import Nav from './Nav/nav';
import Hero from './Hero/hero';
import Modules from '../Components/module/module';
import Discord from "./Discord/discord";
import Footer from "./Footer/footer";

const Homepage = () =>{
    
    // const modulesTitles = ['Module 1', 'Module 2', 'Module 3']
    return(
        <div>
            {/* hero photo */}
            <Hero />

            {/* Top Modules */}
            <Modules />

            {/* Discord bot */}
            <Discord />

        </div>
        
        //Cover photo
        //Modules
        //Discord bot 
        //Footer
    )
};

export default Homepage