//write a login page
import "./navbar2.css"
import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
function Navbar2() {

    return (
        <div className="navbar2">
            <header className="App-header">

                <nav className="navbar">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>

                    <div id="rnav">

                        <div id="pricing">
                            <Link to="/Dashboard/PricingPage" className="btn btn-primary" style={{ textDecoration: 'none' }} id="pricing-text" >Payments</Link>
                        </div>
                        <div id="curriculum">
                            <Link to="/Dashboard/PricingPage" className="btn btn-primary" style={{ textDecoration: 'none' }} id="curriculum-text">Schedule</Link>
                        </div>
                        <div id="login">
                            <Link to="/" className="btn btn-primary" style={{ textDecoration: 'none' }} id="login-text">Profile</Link>
                        </div>
                    </div>



                </nav>

            </header>

        </div>
    );

}
export default Navbar2;