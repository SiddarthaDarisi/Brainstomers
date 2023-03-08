import Landing from './compon/landing.js';
import Login from './compon/login.js';
import Pricing from './compon/pricing.js';
import Curriculum from './compon/curriculum.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import logo from './logo.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <nav class="navbar">
                <Link to="/">
                <img src={logo}className="App-logo" alt="logo"/>
                </Link>
                 
                <div id="rnav">
                                
                  <div id="pricing">
                    <Link to ="/pricing" className="btn btn-primary"style={{ textDecoration: 'none' }} id="pricing-text">Pricing</Link>
                  </div>
                  <div id="curriculum">
                     <Link to ="/curriculum" className="btn btn-primary"style={{ textDecoration: 'none' }} id="curriculum-text">Curriculum</Link>
                  </div>
                  <div id="login">
                      <Link to ="/login" className="btn btn-primary"style={{ textDecoration: 'none' }} id="login-text">Login</Link>
                  </div>
                </div>                     
        
              
         
        </nav>
      </header>

       <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Routes>
      </div>
      );
      

}

export default App;