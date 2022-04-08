import react, {useState, useEffect} from "react";
import modules from "./modules";
import './index.css'

const TableOfContents = () =>{
    const [activeModule, setActiveModule] = useState(0);
    console.log(modules)
    const subtopics = () => {

        switch(activeModule){
            case 1:
                return (
                    <ul>
                        <li>Highs</li>
                        <li>Lows</li>
                    </ul>
                );
                

            case 2:
                return(
                    <ul>
                        <li>Stocks are cool</li>
                        <li>Dips</li>
                    </ul>
                );
            

            case 3:
                return(
                    <ul>        
                        <li>AMC</li>
                        <li>Gamestop</li>
                    </ul>
                );
            
            default: console.log("default")
        }
    };


    return(
        <div className="table-of-contents_container">
            <ul>
                <h2 className="table-of-contents_header">Table of Contents</h2>
                <li 
                    onClick ={() => {
                        setActiveModule(1);
                        // subtopics(activeModule);
                    }}
                >
                    Mod 1
                </li>
                {activeModule === 1 ? subtopics(activeModule) : null}
                <li 
                    onClick ={() => {
                        setActiveModule(2); 
                        // subtopics(activeModule);
                    }}
                >
                    Mod 2
                </li>
                {activeModule === 2 ? subtopics(activeModule) : null}
                <li 
                    onClick ={() => {
                        setActiveModule(3); 
                        // subtopics(activeModule);
                    }}
                >
                    Mod 3
                </li>
                {activeModule === 3 ? subtopics(activeModule) : null}
            </ul>
        </div>
    );
}

const Module = () =>(

    <div className="modules__container">
        <h1 className='modules__header'>Buying your first stock</h1>
        <p className='modules__text'>
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Nesciunt et ullam voluptatibus dicta.
            Et aut enim provident quas delectus doloremque laboriosam 
            dignissimos necessitatibus eum assumenda consequatur, nostrum 
            accusantium nisi culpa.
        </p>
        <img className='modules__img'src="https://i.ytimg.com/vi/if-2M3K1tqk/maxresdefault.jpg" alt="" />
    </div>
    
);

const SubTopic = () => (
    <div className="sub-topic__container">
        <h2>Selling your first stock </h2>
        <p className="sub-topic__text">
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Nesciunt et ullam voluptatibus dicta.
            Et aut enim provident quas delectus doloremque laboriosam 
            dignissimos necessitatibus eum assumenda consequatur, nostrum 
            accusantium nisi culpa.
        </p>
        <img className="sub-topic__img" src="https://deadline.com/wp-content/uploads/2019/05/amc.jpg" alt="" />
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
