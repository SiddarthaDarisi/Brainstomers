//write a login page
//import "./navbar2.css"
import "./navbar.css"
import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
function Navbar2() {

    return (
        <div className="navbar">
            <header className="App-header">

                <nav className="navbar">
                    <Link to="/dashboard">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>

                    <div id="rnav">

                        <div id="pricing">
                            <Link to="/dashboard/PricingPage" className="btn btn-primary" style={{ textDecoration: 'none' }} id="pricing-text" >Payments</Link>
                        </div>
                        <div id="curriculum">
                            <Link to="dashboard/schedule" className="btn btn-primary" style={{ textDecoration: 'none' }} id="curriculum-text">Schedule</Link>
                        </div>
                        <div id="login">
                            <Link to="dashboard/profile" className="btn btn-primary" style={{ textDecoration: 'none' }} id="login-text">Profile</Link>
                        </div>
                    </div>



                </nav>

            </header>

        </div>
    );

}

export default Navbar2;