import './App.css';
import Nav from './homepage/Nav/nav'
import Hero from './homepage/Hero/hero'
import Homepage from './homepage/homepage'

import Footer from './homepage/Footer/footer'
import ModulesPage from './ModulesPage/index'
import AboutPage from './AboutPage';
import DiscordPage from './DiscordPage';
import ContactPage from './ContactPage';
import { Router } from 'react-router-dom';


const renderPath = () =>{
  if(window.location.pathname === '/'){
    return <Homepage />;
  } else if (window.location.pathname === '/modules'){
    return <ModulesPage />;
  } else if (window.location.pathname === '/about'){
    return <AboutPage />;
  } else if (window.location.pathname === '/discord'){
    return <DiscordPage />;
  } else if (window.location.pathname === '/contact'){
    return <ContactPage />;
  }
}
 

function App() {
  return (
    <div>
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