import Backgroundimg from './background.jpg'
import React from 'react';  
import "./landing.css";

function landing() {
    return (
        <div className="landing">
            <div className='topp' >
            <img src={Backgroundimg} alt="background" id="backgroundimg" />
            <p id="tagline" >Learn faster through <br/>structured training</p>
            <button id="getstarted">Get started</button>
            </div>
        </div>
    );
};
export default landing;