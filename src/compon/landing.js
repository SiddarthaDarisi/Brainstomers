
import React from 'react';
import "./landing.css";
import Backgroundimg from './background.png';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import CheckSignin from './CheckSignin';
import Footer from "./Footer"
//asa
function Landing() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
        console.log("hello")
    }
    return (

        <div className="landing">
            <header>
                {<Navbar />}
            </header>
            <body id="body">
                <div className='topp' >
                    <div id="image1">
                        <img src={Backgroundimg} alt="background" id='backgroundimg' />
                    </div>

                    <p id="tagline" >Learn faster through <br />structured training</p>
                    <button id="getstarted" onClick={routeChange} onHove>Get started</button>
                </div>
                <div id="rest">
                    <div id="master-box">
                        <div id='head'>
                            <h2>
                                Meet our master
                        </h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa
                        </p>
                    </div>
                </div>
                <div id="rest2">
                    <div id="master-box">

                        <h2>
                            Meet our master
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa <br /> <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa
                        </p>
                    </div>
                </div>


            </body>
            <footer>
                <Footer />
            </footer>
        </div>

    );
};
export default Landing;