//write a login page
import "./navbar.css"
import React, { useState } from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
//import "./css/bootstrap.min.css"
function Navbar(props) {

    return (
        <nav className="navbar">
            <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
            </Link>

            <div id="rnav">

                <div>
                    <Link to="/PricingPage" className="btn btn-primary" style={{ textDecoration: 'none' }} id="pricing-text" >Pricing</Link>
                </div>
                <div >
                    <Link to="/Curriculum" className="btn btn-primary" style={{ textDecoration: 'none' }} id="curriculum-text">Curriculum</Link>
                </div>
                <div>
                    <Link to="/Contact" className="btn btn-primary" style={{ textDecoration: 'none' }} id="login-text">Contact</Link>
                </div>
            </div>



        </nav>

    );

}
export default Navbar;