import React from "react";
import './index.css';
import ppic from './profile-pic.png';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const AboutPage = () =>{
    
    return(
        
      
        <div>
            <div className="main-container">
                <div className="header-bg">
                    <h1 className="title-1">What is Tickr?</h1>
                    <p className="description-1">
                        Stock market information already exists everywhere. 
                        However, self-learning everything about the market can be too much for new users as they have no guidance on where to 
                        start or know what information is relevant to them. We set ourselves apart by having learning modules that will guide a user 
                        through what they need to know and what they want to learn more about. We aim to educate the user in a way where their 
                        learning is tailored to their needs. The tools we offer will be revolutionary as they will all be in one space rather 
                        than spread out across the internet like a scavenger hunt. We will bring everything that one needs to further their 
                        knowledge under a holistic setting using new technologies such as a Discord bot. Our website will aim to serve as an all-in-one 
                        learning tool for anyone who is interested in the stock market.
                    </p>
                </div>
                

                <h2 className="title-2">This is Our Mission</h2>
                <p className="description-2">
                    The goal for our project is to help educate a wide audience, whether they are still in school or 
                    even if they are a full-time working adult. With our target audience in mind, the learning modules will 
                    be tailored towards their lifestyles and their behaviors to create a learning space that will be not only 
                    interactive but dynamic so it can encourage learning and a deeper understanding of the stock market. 
                    The medium we have chosen for our project is the Internet, which will provide accessibility for those who have 
                    online access. In addition to the dedicated website, a Discord bot will also be programmed in order to act as an accompanying 
                        tool to help novice investors.
                </p>

                <h2 className="title-3">Meet the Team!</h2>
                <div className="team-members">
                    <div className="member">
                        <img src={ppic} class="img-responsive img-thumbnail" alt="Responsive image" />
                        <div class="name">Austin Nguyen
                        <br />Engineer</div> 
                    </div>
                    <div className="member">
                        <img src={ppic} class="img-responsive img-thumbnail" alt="Responsive image" />
                        <div class="name">Name
                        <br />Description</div> 
                    </div>
                    <div className="member">
                        <img src={ppic} class="img-responsive img-thumbnail" alt="Responsive image" />
                        <div class="name">Name
                        <br />Description</div> 
                    </div>
                    <div className="member">
                        <img src={ppic} class="img-responsive img-thumbnail" alt="Responsive image" />
                        <div class="name">Name
                        <br />Description</div> 
                    </div>
                </div>
            </div>
            
        </div>
        
    )
};

export default AboutPage