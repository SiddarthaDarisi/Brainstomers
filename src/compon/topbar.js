
  
//write a login page
import React, { useState } from 'react';
import logo from './logo.png';
import {Link} from "react-router-dom";

function topbar(){ 
    return(
    <div className="top-bar">
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
        </div>
    );}
export default topbar;