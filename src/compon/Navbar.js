//write a login page
import "./navbar.css"
import React, { useState } from 'react';
import logo from '../image/logo.png';
// import { Link } from '@mui/material';
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import { Button, TextField, Typography, } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { ThemeConsumer } from "styled-components";


//import "./css/bootstrap.min.css"
function Navbar(props) {

    return (
        // <Container>
        //     <Toolbar>
        //         <Typography>
        //             Brainstormers
        //         </Typography>
        //         <Box >
        //             {["Pricing", "Curriculum", "Contact"].map((menuOption) => (
        //                 <Link component='button'
        //                     variant="body1"
        //                     className={menuOption}

        //                 >
        //                     {menuOption}
        //                 </Link>
        //             ))}
        //         </Box>
        //     </Toolbar>
        // </Container >
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