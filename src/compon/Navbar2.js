//write a login page
import "./navbar2.css"
import React, { useState } from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
function Navbar2(props) {

    return (
        <div className="navbar">
            <header className="App-header">

                <nav className="navbar">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>

                    <div id="rnav">

                        <div id="pricing">
                            <Link to="/pricing" className="btn btn-primary" style={{ textDecoration: 'none' }} id="pricing-text" >Payments</Link>
                        </div>
                        <div id="curriculum">
                            <Link to="/curriculum" className="btn btn-primary" style={{ textDecoration: 'none' }} id="curriculum-text">schedule</Link>
                        </div>
                        <div id="login">
                            <Link to="/login" className="btn btn-primary" style={{ textDecoration: 'none' }} id="login-text">profile pic</Link>
                        </div>
                    </div>



                </nav>

            </header>

        </div>
    );

}
export default Navbar2;