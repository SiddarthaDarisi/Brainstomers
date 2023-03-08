
import React from 'react';  
import "./landing.css";
import Backgroundimg from './background.jpg';
function Landing() {
     return (
      
         <div className="landing">
             <div className='topp' >
            <img src={Backgroundimg} className="clip-me" alt="background" id="backgroundimg" /> 
            <p id="tagline" >Learn faster through <br/>structured training</p>
             <button id="getstarted">Get started</button>
             </div>
        </div>
    );
};
export default Landing;