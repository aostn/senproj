import react, {useState, useEffect, useRef} from "react";
import modules from "./modules";
import './index.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const RenderRow = ({module, setModuleToShow, setShowModuleCompoenent}) => {

    // const [showSubTopic, setShowSubTopic] = useState(false);
    

    // const handleClick = () =>{
    //     setShowSubTopic(!showSubTopic);
    // }

    const checkForQuertParam = () => {
        let string = window.location.pathname;

        if(Number(string[string.length - 1])){
            const newStr = string.replace(`/${string[string.length - 1]}`, "");
            window.location.pathname = newStr;
        }
    };
    const scrollTo = (el) => {
        let element = document.getElementById(el);
        element?.scrollIntoView({behavior : "smooth"});

        
    };

    const handleTitleClick = () =>{
        checkForQuertParam();

        setModuleToShow(module);
        setShowModuleCompoenent(true);
    };

    const handleSubTopicClick = (el) =>{
        checkForQuertParam();
        setModuleToShow(module);
        setShowModuleCompoenent(true);
        setTimeout(() => scrollTo(el), 150);
    };

    return (
        <div className="modules-nav__items">
            <li className="modules-nav__title" onClick={handleTitleClick}>{
                module.title}
            </li>
            <ol>
                {module.subtopics.map(subtopic => (
                    <li className="modules-nav__subtopic-title" onClick={() => handleSubTopicClick(subtopic.title)}>
                        {subtopic.title}
                    </li>
                ))}
            </ol>
            
        </div>
    );
}

const TableOfContents = ( {setModuleToShow,setShowModuleCompoenent}) => {

    return (
        <Box sx={{  height: '60%', 
                    maxWidth: '20%', 
                    bgcolor: 'background.paper', 
                    borderStyle: 'solid', 
                    margin: '2%',
                    minWidth: '20%',
                    position: 'sticky',
                    top: '5px',
                
                }}>
                <ul className="toc-content">
                    {modules.map(module => (
                    <RenderRow 
                        module={module} 
                        setModuleToShow={setModuleToShow} 
                        setShowModuleCompoenent={setShowModuleCompoenent}
                        
                    />
                    ))}</ul>

        </Box>
    );
}

const Module = ({module}) =>{
    const {hasList} = module;
    if(!module) return;

    return(
        <div className="modules__container">
            <h1 className='modules__header'>{module.title}</h1>
            <p className='modules__text'>{module.description}</p>

            {module?.subtopics.map((subtopic) => 
                (<SubTopic subTopic={subtopic} hasList={module.hasList}/>
            ))}

            {hasList && (
                <div className="module__takeaways">
                    <h3>Key Takeaways</h3>
                    <ol >
                        {module?.takeaways?.map((takeaway) => <li>{takeaway}</li>)}
                    </ol>
                </div>
            )}
        </div>
    );
};



const SubTopic = ({subTopic, hasList}) => {

    console.log(subTopic)
    

    return(
        <div className="sub-topic__container" id={subTopic.title}>
            <h2 className="subtopic__title">{subTopic.title}</h2>
            <p className="subtopic__text">{subTopic.description}</p>

            {subTopic.image ?? (

                <div>
                    {subTopic?.images?.map(image => 
                        <div className="sub-topic__image__sec">
                            <img className="sub-topic__images" src={image.image} />
                            {image.caption ?? <p className="sub-topic__cap">{image.caption}</p>}    
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

// const  testModules = () => {
//     modules.forEach((module) => console.log(module.title));
// };

const ModulesWelcomePage = () =>(
    <div className="modules-welcome">
        <h1>Welcome to the Learning Modules Section!</h1>
        <p>
            We understamd that learning about stocks can be overwhelming, so we are here to make it a little easier to get the ball rolling. 
            We offer a number of learning modules. Please select one lessons from the side menu to begin your stock learning journey.
        </p>
        <p>
            We recommend starting with these 3 modules:
        </p>
    </div>
)

console.log(modules);

const ModulesPage = ({ props }) => {
    const [showModuleComponent, setShowModuleCompoenent] = useState(false);
    const [moduleToShow , setModuleToShow] = useState(null);
    const subTopicRef = useRef(null);
    // const navigation = useNavigate();

    // const renderFromLink = () =>{
    //     // const foundModule =  modules.find((foundModule) => foundModule.id === homepageId);
    //     return <Module module={foundModule}/>

    // };

    const RenderHomePage = () =>{
            return showModuleComponent ? (
                <Module module={moduleToShow} />
            ): 
                (<ModulesWelcomePage />);
            
            // showModuleComponent ? (
            //     <Module module={moduleToShow} />) 
            //     : (<ModulesWelcomePage />
            // );  
    };
    if(!module){
        return;
    }

    return(
        <div className="modules-page">
            <TableOfContents 
                setModuleToShow={setModuleToShow} 
                setShowModuleCompoenent={setShowModuleCompoenent}
                subTopicRef={subTopicRef}
            />
            <div className="modules-content">
                <div classnName="content">
                    <RenderHomePage />
                </div>
                
            </div>
            
        </div>
    );
};


export default ModulesPage;


// style the page fully
// add an on hover effect and style that
// create modules and make routing to the modules page dynamic
// create subtopics
