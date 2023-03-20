//write a login page
import React, { useState } from 'react';
import Navbar from './Navbar';
import "./curriculum.css"
import { Paper, Typography } from '@mui/material';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import Item from '@mui/material/Grid';
import { Box } from '@mui/system';
import { AccessTime } from "@mui/icons-material"

function curriculum() {

    return (

        <div className='circulum'>

            <div id='navbar'>
                <Navbar />
            </div>


            <Container sx={{ marginTop: 12 }}>

                <Grid container spacing={8} display="flex" direction={{ md: "row", xs: "column" }}>


                    <Grid item xs={4}  >
                        <Paper elevation={3} id='paper' sx={{
                            overflow: 'auto'
                        }}>
                            <Box paddingX={1}>
                                <Typography variant="h4" component="h2">
                                    Beginner
                                </Typography>

                                <Box
                                    sx={{

                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >   <AccessTime sx={{
                                    width: 12.5
                                }} />
                                    <Typography variant="body2" component="p" marginLeft={0.5}>
                                        3 months
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                    <Typography variant="subtitle1" component="subtitle1">
                                        Modules
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Typography variant="body2" component="p" marginLeft={3}>
                                        <ul>
                                            <li>Introduction to chess Arranging the board.</li>
                                            <li>Introduction to pieces and their movement.</li>
                                            <li>Value of pieces</li>
                                            <li>Pin, double attack, skewer</li>
                                            <li>Introduction to chess Arranging the board.</li>
                                            <li>Pawn promotion</li>
                                            <li>Checkmate notation</li>
                                            <li>Checkmate puzzles</li>
                                            <li>Discovered attack</li>
                                            <li>Double check</li>
                                            <li>Opening game rules</li>
                                            <li>Introduction to lichess and playing with other kids</li>
                                            <li>Online chess tournament practice sessions</li>
                                        </ul>
                                    </Typography>
                                </Box>

                            </Box>


                        </Paper>

                    </Grid>

                    <Grid item xs={4} >
                        <Paper elevation={3} id='paper' sx={{
                            overflow: 'auto'
                        }}>
                            <Box paddingX={1}>
                                <Typography variant="h4" component="h2">
                                    Intermediate
                                </Typography>

                                <Box
                                    sx={{

                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >   <AccessTime sx={{
                                    width: 12.5
                                }} />
                                    <Typography variant="body2" component="p" marginLeft={0.5}>
                                        4 months
                                    </Typography>

                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                    <Typography variant="subtitle1" component="subtitle1">
                                        Modules
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Typography variant="body2" component="p" marginLeft={3}>
                                        <ul>
                                            <li>Review of Opening Game Pawn Structure.</li>
                                            <li>Pawn Isolation</li>
                                            <li>Attack and Defend Opening from White Opening From Black Middle Game Forcing Moves (Pawn Break, Check, Capture) Overloaded Piece,</li>
                                            <li>Decoy</li>
                                            <li>Destroy the defender Distract the defender Gain of Material</li>
                                            <li>Play with Clock</li>
                                            <li>Checkmate notation</li>

                                            <li>King and Rook ending Grandmasters Game Analysis</li>
                                            <li>Chess tournaments online</li>
                                        </ul>
                                    </Typography>
                                </Box>
                            </Box>

                        </Paper>
                    </Grid>
                    <Grid item xs={4} >

                        <Paper elevation={3} id='paper' sx={{
                            overflow: 'auto',

                        }}>
                            <Typography>
                                <Box paddingX={1}>
                                    <Typography variant="h4" component="h2">
                                        Advanced
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',

                                            alignItems: 'center'
                                        }}
                                    >   <AccessTime sx={{
                                        width: 12.5
                                    }} />
                                        <Typography variant="body2" component="p" marginLeft={0.5}>
                                            8 months
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            overflow: 'auto',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}>
                                        <Typography variant="subtitle1" component="subtitle1">
                                            Modules
                                        </Typography>
                                    </Box>
                                    <Box sx={{
                                        // maxHeight: 280, overflow: 'auto',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <Typography variant="body2" component="p" marginLeft={3}>
                                            <ul>

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
                                        </Typography>
                                    </Box>
                                </Box>




                            </Typography>
                        </Paper>

                    </Grid>


                </Grid>
            </Container>
        </div>
    );

}
export default curriculum;