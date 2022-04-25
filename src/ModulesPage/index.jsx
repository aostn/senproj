import react, {useState, useEffect} from "react";
import modules from "./modules";
import './index.css'

const TableOfContents = () =>{
    const [activeModule, setActiveModule] = useState(0);
    console.log(modules)

    const handleClick = (num) => {
        
        if(num === activeModule) setActiveModule(0)
        setActiveModule(num);
    }


    const subtopics = () => {

        switch(activeModule){
            case 1:
                return (
                    <ul>
                        <li>Stocks</li>
                        <li>Stock Rules</li>
                    </ul>
                );
                

            case 2:
                return(
                    <ul>
                        <li>Calls</li>
                        <li>Puts</li>
                    </ul>
                );
            

            case 3:
                return(
                    <ul>        
                        <li>EMA</li>
                        <li>Most Common EMA</li>
                    </ul>
                );
            
            default: console.log("default")
        }
    };


    return(
        <div className="table-of-contents_container">
            <ul>
                <h2 className="table-of-contents_header">Table of Contents</h2>

                <li onClick ={() => {handleClick(1)}}>Intro to Stocks</li>
                    {activeModule === 1 ? subtopics(activeModule) : null}

                <li onClick ={() => {handleClick(2)}}>Intro to Options</li>
                    {activeModule === 2 ? subtopics(activeModule) : null}

                <li onClick ={() => {handleClick(2)}}>Technical Analysis</li>
                    {activeModule === 3 ? subtopics(activeModule) : null}
            </ul>
        </div>
    );
}

const Module = () =>{

    // next, prev
    // router.push(/1)

    const moduleId = window.location.pathname;
    return(
        <div className="modules__container">
            {/* <h1 className='modules__header'>Modules.id[1]</h1> */}
            <h1 className='modules__header'>{modules.module3.title}</h1>
            <p className='modules__text'>{modules.module3.description}</p>
            <img className='modules__img'src="https://media.istockphoto.com/photos/close-up-business-people-meeting-to-discuss-the-situation-on-the-picture-id1089222846?k=20&m=1089222846&s=612x612&w=0&h=pxRm90xIK-0ozE0GpjPThDBbx0KXgdW3BnCsZDRLFh4=" alt="" />
            
        </div>
    );
};

const SubTopic = () => (
    <div className="sub-topic__container">
        {/* <h2>{modules.module1.subtopic.subTopic1}</h2> */}
        <h2 className="sub-topic-header">{modules.module3.subtopic1.subTitle}</h2> 
        <p className="sub-topic__text">{modules.module3.subtopic1.subDescription}</p>
        <img className="sub-topic__img" src="https://www.fidelity.com/bin-public/060_www_fidelity_com/images/LC/EMA_602x345.png" alt="" />
        <h3>Key Take Aways</h3>
        <p className = "key-takes">
            <ul className="key-list">
                <li>Exponential moving averages are designed to see price trends over specific time frames such as 50 or 200 days.</li>
                <li>Compared to simple moving averages, EMAs give greater weight to recent (more relevant) data.</li>
                <li>Computing the exponential moving average involves applying a multiplier to the SMA (simple moving average).</li>
                <li>Moving average ribbons allow traders to see multiple EMAs at the same time.</li>
                <li>EMA positioning varies on time frames (The bigger the time frame, the more important the level).</li>
            </ul>
        </p>
        <h2 className="sub-topic-header">{modules.module3.subtopic2.subTitle}</h2> 
        <p className="sub-topic__text">{modules.module3.subtopic2.subDescription}</p>
        <img className="sub-topic__img" src="https://www.investopedia.com/thmb/DF6YOUYxTcCK3LDl4NITK0al8fI=/1536x868/filters:no_upscale():max_bytes(150000):strip_icc()/GoldenCross-5c6592b646e0fb0001a91e29.png" alt="" />

    </div>
);

const ModulesPage = () => {
    return(
        <div className="modules-page">
            <TableOfContents />
            <div className="content">
                <Module />
                <SubTopic />
            </div>
            
        </div>
    );
};


export default ModulesPage;


// style the page fully
// add an on hover effect and style that
// create modules and make routing to the modules page dynamic
// create subtopics
