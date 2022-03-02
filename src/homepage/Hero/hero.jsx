import React from "react";
import './hero.css'
import heroImg from '../stock_hero.jpg'

const Hero = () =>(
    <div className = "hero_container">
        <img src={heroImg} className="splash" />
        <h1 className = "hero_caption">The market doesn't stop...</h1>
        
    </div>
)

export default Hero;