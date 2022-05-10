import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import  {BrowserRouter, Routes, Route} from "react-router-dom";

// import ModulesPage from '../src/ModulesPage/index';
// import HomePage from '../src/homepage/homepage';
// import Nav from '../src/homepage/Nav/nav';
// import Footer from '../src/homepage/Footer/footer';
// import AboutPage from '../src/AboutPage/index';
// import DiscordPage from '../src/DiscordPage/index';
// import ContactPage from '../src/ContactPage/index';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Nav/>
//     <Routes>
//         <Route path="/" element={<HomePage />}></Route>
//         <Route path="modules" element={<ModulesPage />}>
//           <Route href="/modules/1" as="/modules/"  element={<ModulesPage />}/>
//           <Route path="modules/2" element={<ModulesPage homepageId={2}/>}/>
//           <Route path="modules/3" element={<ModulesPage homepageId={3}/>}/>
//         </Route>
//         <Route path='about' element={<AboutPage />}></Route>
//         <Route path='discord' element={<DiscordPage />}></Route>
//         <Route path='contact' element={<ContactPage />}></Route>
//     </Routes>
//     <Footer />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


