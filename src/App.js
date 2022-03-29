import './App.css';
import Nav from './homepage/Nav/nav'
import Hero from './homepage/Hero/hero'
import Homepage from './homepage/homepage'
import Modules from './Components/module/module'
import Discord from './homepage/Discord/discord'
import Footer from './homepage/Footer/footer'
import ModulesPage from './ModulesPage/index'
import AboutPage from './AboutPage';
import { Router } from 'react-router-dom';


const renderPath = () =>{
  if(window.location.pathname === '/'){
    return <Homepage />;
  } else if (window.location.pathname === '/modules'){
    return <ModulesPage />;
  } else if (window.location.pathname === '/about'){
    return <AboutPage />;
  }
}
 

function App() {
  return (
    <div>
      {/* <Nav />
    <Hero />
    <Modules />
    <Discord />
    <Footer />
    <Homepage /> */}
    <Nav />
    {renderPath()}
    <Footer />
 
    </div>
    
  );
}

// function App(){
//   return <div>{renderPath()}</div>;
// }

export default App;
