//write a login page
//import "./navbar2.css"
import "./navbar.css"
import React from 'react';
import CheckSignin from './CheckSignin';
import logo from '../image/logo.png';
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
async function signOut() {
    try {
        await Auth.signOut({ global: true });
    } catch (error) {
        console.log('error signing out: ', error);
    }
}


async function checkUser() {
    let user = await Auth.currentUserInfo();


}
function Navbar2({ signout }) {

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
                            <Link to="/dashboard/schedule" className="btn btn-primary" style={{ textDecoration: 'none' }} id="curriculum-text">Schedule</Link>
                        </div>
                        <div id="login">
                            <button className="btn btn-primary" onClick={signOut} id="login-text">logout</button>
                        </div>
                    </div>



                </nav>

            </header>

        </div>
    );

}

export default Navbar2;