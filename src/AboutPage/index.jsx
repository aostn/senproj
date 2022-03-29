import React from "react";
import './index.css';
import ppic from './profile-pic.png';


const AboutPage = () =>{
    
    return(
        <div>
            <div className="main-container">
                <h1 className="title-1">What is Tickr?</h1>
                <p className="description-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque 
                    est quibusdam eum, odit non repellendus eos obcaecati alias! Praesentium 
                    tenetur voluptas ipsam accusantium alias magnam amet optio earum corporis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque 
                    est quibusdam eum, odit non repellendus eos obcaecati alias! Praesentium 
                    tenetur voluptas ipsam accusantium alias magnam amet optio earum corporis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque 
                    est quibusdam eum, odit non repellendus eos obcaecati alias! Praesentium 
                    tenetur voluptas ipsam accusantium alias magnam amet optio earum corporis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque 
                    est quibusdam eum, odit non repellendus eos obcaecati alias! Praesentium 
                    tenetur voluptas ipsam accusantium alias magnam amet optio earum corporis.
                </p>

                <h2 className="title-2">This is Our Mission</h2>
                <p className="description-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque 
                    est quibusdam eum, odit non repellendus eos obcaecati alias! Praesentium 
                    tenetur voluptas ipsam accusantium alias magnam amet optio earum corporis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque 
                    est quibusdam eum, odit non repellendus eos obcaecati alias! Praesentium 
                    tenetur voluptas ipsam accusantium alias magnam amet optio earum corporis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque 
                    est quibusdam eum, odit non repellendus eos obcaecati alias! Praesentium 
                    tenetur voluptas ipsam accusantium alias magnam amet optio earum corporis.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore neque 
                    est quibusdam eum, odit non repellendus eos obcaecati alias! Praesentium 
                    tenetur voluptas ipsam accusantium alias magnam amet optio earum corporis.
                </p>

                <h2 className="title-3">Meet the Team!</h2>
                <div className="team-members">
                    <div className="member">
                        <img src={ppic} class="img-responsive img-thumbnail" alt="Responsive image" />
                        <div class="name">Austin Nguyen
                        <br />Computer Engineer</div> 
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