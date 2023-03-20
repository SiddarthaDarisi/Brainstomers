
import React from 'react';
import "./landing.css";
import { styled } from '@mui/material/styles';
import Backgroundimg from '../image/background.png';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import CheckSignin from './CheckSignin';
import Footer from "./Footer"
import profilepic from "../image/pro_pic.jpg"
import kidpic from "../image/kid_image.jpg"
import { Container, Grid, List } from '@mui/material';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { Item } from "@mui/material/ListItem"


// import { Box } from '@mui/system';
// import ResponsiveImage from './ResponsiveImage';
// import ResponsiveImgMaterialUi from 'responsive-responsive-img-material-ui';
// import { useMediaQuery } from '@mui/material';
// import md_size from '../image/md_bg.jpg';
import { Box } from '@mui/system';
import ResponsiveImage from './ResponsiveImage';
// import xs_size from '../image/xs_bg.jpg';
function Landing() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/contact`;
        navigate(path);
        console.log("hello")
    }
    const Item = styled(List)(({ theme }) => ({

        padding: theme.spacing(1),
        textAlign: 'Left',
        marginBottom: '1rem',




    }));
    const theme = createTheme({
        typography: {
            h2: {
                fontSize: '1.5rem',
                '@media (min-width:800px)': {
                    fontSize: '2.0rem',
                },
                '@media (min-width:1000px)': {
                    fontSize: '2.6rem',
                },
            },
            h4: {
                fontSize: '1.2rem',
                '@media (min-width:600px)': {
                    fontSize: '1.5rem',
                },
            },
            h6: {
                fontSize: '1rem',
                '@media (min-width:600px)': {
                    fontSize: '1.25rem',
                },
            },
            subtitle2: {
                fontSize: '0.55rem',
                '@media (min-width:340px)': {
                    fontSize: '0.65rem',
                },
                '@media (min-width:500px)': {
                    fontSize: '0.8rem',
                },
                '@media (min-width:780px)': {
                    fontSize: '1rem',
                },

            },
        },
    });
    return (

        <ThemeProvider theme={theme}>
            <div className="landing">
                <header>
                    {<Navbar />}
                </header>
                {/* <body id="body">
                <div className='topp' >
                    <div id="image1">
                        <img src={Backgroundimg} alt="background" id='backgroundimg' />
                    </div>

                    <Typography>Learn faster through <br />structured training</Typography>
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
                                Ivana Maria Furtado is a seasoned chess player with years of experience and a wealth of knowledge in the game.
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
            </footer> use above code and write material ui code */}
                <Grid container spacing={2} marginTop={4} marginBottom={5}>
                    <Grid item xs={12}>
                        <Box id="topp">
                           
                            <ResponsiveImage />
                        </Box>
                    </Grid>
                </Grid>
                <Container marginTop={"0rem"}>
                    <Grid container spacing={0} sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} sx={{}}>
                            <Paper elevation={3} sx={{ height: "32rem" }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={5} sx={{ height: "5rem" }}>

                                        </Grid>
                                        <Grid item xs={7}>

                                            <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginTop: "0.8rem" }}>Meet our master</Typography>

                                        </Grid>

                                        <Grid item xs={5} sx={{ height: "auto" }}>
                                            <Box
                                                component="img"
                                                src={profilepic}
                                                sx={{
                                                    width: '45%',
                                                    marginLeft: '28%',

                                                    pointerEvents: 'none',

                                                }}></Box>

                                        </Grid>
                                        <Grid item xs={7} sx={{ height: "10rem" }}>
                                            <Typography variant="subtitle2" sx={{ textAlign: "Left", overflow: "auto" }}>
                                                Ivana Maria Furtado is a seasoned chess player with years of experience and a wealth of knowledge in the game.
                                                She has competed in numerous national and international tournaments, earning various titles and accolades along the way.
                                                As a chess tutor, she is committed to sharing her expertise with aspiring chess players and enthusiasts.
                                                <br /> <br />
                                                Ivana's credentials include winning the Under-8 World Youth Chess Championship twice in a row,
                                                earning the title of Woman International Master by FIDE,
                                                and holding a Elo rating of 2139 as of March 2019.
                                                She has also won several gold medals in international and national competitions,
                                                including the Asian Junior Chess Championship in 2012, the Commonwealth Chess Championship in 2009,
                                                and the Asian Schools Championship in 2006 and 2007.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={5}>
                                            <Typography variant="h6" sx={{ textAlign: "center" }} >Ivana Maria Furtado</Typography>
                                        </Grid>
                                        <Grid item xs={7}></Grid>
                                    </Grid>
                                </Box>
                            </Paper>

                        </Grid>
                        <Grid item xs={12} sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
                            <Paper elevation={3} sx={{ height: "30rem" }}>
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={7} >
                                            <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", marginTop: "0.8rem" }}>Benefits of Chess for Kids</Typography>

                                        </Grid>
                                        <Grid item xs={5} sx={{ height: "5rem" }}>


                                        </Grid>
                                        <Grid item xs={8} sx={{ height: "20rem" }}>
                                            <Typography variant="subtitle2" sx={{}}>

                                                <Item>Build and improve your child’s memory.</Item>
                                                <Item>Develops Logic, Critical Thinking, and Creativity.</Item>
                                                <Item>Teach your child to achieve success, accept defeat with grace, and comprehend that choices have repercussions.</Item>
                                                <Item>Teach your child how mindset and values affect performance.</Item>




                                            </Typography>
                                        </Grid>

                                        <Grid item xs={4} sx={{ height: "20rem" }}>
                                            <Box
                                                component="img"
                                                src={kidpic}

                                                sx={{
                                                    width: '95%',


                                                    pointerEvents: 'none',

                                                }}></Box>

                                        </Grid>

                                    </Grid>
                                </Box>
                            </Paper>

                        </Grid>
                    </Grid>
                </Container>

            </div >

            <footer>
                <Footer />
            </footer>
        </ThemeProvider >

    );
};
export default Landing;