//write a login page
import React, { useState } from 'react';
import Navbar from './Navbar';
import "./curriculum.css"
function curriculum() {
    return (

        <div>
            <header>
                {<Navbar />}
            </header>
            <body>
                <h1 id='h2'>Curriculum</h1>
                <div id='boxes'>
                    <div id="module-box">
                        <div id='head-text'>
                            <h2>Beginner</h2>
                            <h2>Duration:3 months</h2>

                        </div>

                        <div >
                            <h3>
                                Modules
                            </h3>
                            <p>
                                <ul>
                                    <li>Introduction to chess Arranging the board.</li>
                                    <li>Introduction to pieces and their movement.</li>
                                    <li>Value of pieces</li>
                                    <li>pin, double attack, skewer</li>
                                    <li>Introduction to chess Arranging the board.</li>
                                    <li>pawn promotion</li>
                                    <li>checkmate notation</li>
                                    <li>checkmate puzzles</li>
                                    <li>discovered attack</li>
                                    <li>double check</li>
                                    <li>opening game rules</li>
                                    <li>introduction to lichess and playing with other kids</li>
                                    <li>online chess tournament practice sessions</li>
                                </ul>

                            </p>
                        </div>
                    </div>

                    <div id="module-box">
                        <div id='head-text'>
                            <h2>Intermediate</h2>
                            <h2>Duration:4 months</h2>

                        </div>

                        <div >
                            <h3>
                                Modules
                            </h3>
                            <p>
                                <ul>
                                    <li>Review of Opening Game Pawn Structure.</li>
                                    <li>Pawn Isolation</li>
                                    <li>Attack and Defend Opening from White Opening From Black Middle Game Forcing Moves (Pawn Break, Check, Capture) Overloaded Piece,</li>
                                    <li>Decoy</li>
                                    <li>Destroy the defender Distract the defender Gain of Material</li>
                                    <li>Play with Clock</li>
                                    <li>checkmate notation</li>
                                    <li>King and Pawn</li>
                                    <li>King and Rook ending Grandmasters Game Analysis</li>
                                    <li>Chess tournaments online</li>

                                </ul>

                            </p>
                        </div>
                    </div>
                    <div id="module-box">
                        <div id='head-text'>
                            <p id='modulehead-text'>Advanced</p>
                            <p>Duration:8 months</p>

                        </div>

                        <div >
                            <h3>
                                Modules
                            </h3>
                            <p>
                                <ul>
                                    <li>Introduction to tournament FIDE Rule
                                        Chess Awareness about Competitive circuit
                                        Chess Strategy (X-ray, zugzwang, Square Vacation, Line Opening, Line Closing, Windmill)</li>
                                    <li>Introduction to different chess opening like Scotch,
                                        Ruy-Lopez, Sicilian, French, Caro-Kann, Modern & Pirc,
                                        Kings Indian defence, Nimzo Indian defence, Queens Indian defence etc.</li>
                                    <li>Checkmate in 1,2,3</li>
                                    <li>Introduction to Greek Sacrifice</li>
                                    <li>Introduction to Forcing Moves</li>
                                    <li>introduction to different strategies in chess like Prophylaxis,
                                        King safety,
                                        weak squares,
                                        weak pieces,
                                        backward pawns, pawn majority etc</li>
                                    <li>Calculation Tactics</li>
                                    <li>Visualization</li>
                                    <li>Positional Chess</li>
                                    <li>Analysis of GM games</li>
                                    <li>Introduction to rook endgames and discussion in detail</li>
                                    <li>Analysis of Individual Game</li>
                                    <li>Coaching on individual to develop their game</li>
                                    <li>Tell Players their mistake, weakness, and strength</li>
                                    <li>Participate in local tournament</li>
                                    <li>How to attack an uncastled king.</li>
                                    <li>How to attack a castled king.</li>
                                    <li>Chess tournament Practise Sessions</li>























                                </ul>

                            </p>
                        </div>
                    </div>


                </div>

            </body>
        </div>

    );

}
export default curriculum;