import React from "react";
import './discord.css';
import disc from '../discord-mascot.png'

const Discord = () =>{
    return(
        <div className="discSec">
            <header className="titleD">Try Out Our Discord Bot!</header>
            <p1 className="verbage" align="center">
                <img src={disc} className="discIMG" align="left"/>
                Want to try looking at stocks and charts? Use our Tickr Discord Bot to call stock charts and quotes directly into your personal private servers! 
            </p1>
        </div>
    )
}
export default Discord;