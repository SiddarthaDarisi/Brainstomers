
import React from 'react';
import "./landing.css";
import Backgroundimg from './background.png';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import CheckSignin from './CheckSignin';
import Footer from "./Footer"
import profilepic from "./pro_pic.jpg"
import kidpic from "./kid_image.jpg"
//asa
function Landing() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/contact`;
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
                        <div id='master-head'>
                            <h2 id='master-title'>
                                Meet our master
                            </h2>
                        </div>
                        <div id='master-image'>
                            <img src={profilepic} alt="background" id='profile-pic' />
                            <h3 id='profile-name'>Ivana Maria Furtado</h3>
                        </div>
                        <div id='master-text'>
                            <p id='para'>
                                Ivana Maria Furtado a master in the game of chess.
                                Ivana is a seasoned chess player with years of experience and a wealth of knowledge in the game.
                                She has competed in numerous national and international tournaments, earning various titles and accolades along the way.
                                As a chess tutor, she is committed to sharing her expertise with aspiring chess players and enthusiasts.
                                <br /> <br />
                                Ivana's credentials include winning the Under-8 World Youth Chess Championship twice in a row,
                                earning the title of Woman International Master by FIDE, and holding a Elo rating of 2139 as of March 2019.
                                She has also won several gold medals in international and national competitions,
                                including the Asian Junior Chess Championship in 2012, the Commonwealth Chess Championship in 2009,
                                and the Asian Schools Championship in 2006 and 2007.
                            </p>
                        </div>

                    </div>
                </div>
                <div id="rest2">
                    <div id="master-box2">
                        <div id='kids-head'>
                            <h2 id='master-title'>
                                Benifits of chess for kids
                            </h2>
                        </div>

                        <div id='para2'>
                            <ul>
                                <li id='kids-text'>Build and improve your child’s memory.</li>
                                <li id='kids-text'>Develops Logic, Critical Thinking, and Creativity.</li>
                                <li id='kids-text'>Teach your child to achieve success, accept defeat with grace, and comprehend that choices have repercussions.</li>
                                <li id='kids-text'>Teach your child how mindset and values affect performance.</li>
                            </ul>
                        </div>
                        <div id='kids-image'>
                            <img src={kidpic} alt="background" id='kid-pic' />
                        </div>
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