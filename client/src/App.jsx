import React from "react";

import "./App.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing'
import Help from "./components/Landing/Help";
import Contact from "./components/Landing/Contact";
import TermsPolicy from "./components/Landing/TermsPolicy";

// import FirstTemplate from "./components/Landing/Templates/FirstTemplate";

function App() {
 

  return (
     <BrowserRouter>
      {/* <Navbar /> */}
      <Routes> 
       <Route path='/' element={<Landing />} /> 
       <Route path='/termspolicy' element={<TermsPolicy />} /> 
       <Route path='/help' element={<Help />} /> 
       <Route path='/contact' element={<Contact />} /> 
      

     </Routes> 
     {/* <Footer/>  */}
    </BrowserRouter>
  
  );
}

export default App;
