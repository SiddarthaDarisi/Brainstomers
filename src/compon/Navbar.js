// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import logo from '../image/logo.png';
// import './navbar.css';
// const pages1 = ['Pricing', 'Curriculum'];
// const pages2 = ['Contact'];
// //import "./css/bootstrap.min.css"
// function Navbar(props) {

//     return (
//         // <Container>
//         //     <Toolbar>
//         //         <Typography>
//         //             Brainstormers
//         //         </Typography>
//         //         <Box >
//         //             {["Pricing", "Curriculum", "Contact"].map((menuOption) => (
//         //                 <Link component='button'
//         //                     variant="body1"
//         //                     className={menuOption}

//         //                 >
//         //                     {menuOption}
//         //                 </Link>
//         //             ))}
//         //         </Box>
//         //     </Toolbar>
//         // </Container >
//         //   <nav className="navbar">
//         //         <Link to="/">
//         //             <img src={logo} className="App-logo" alt="logo" />
//         //         </Link>

//         //         <div id="rnav">

//         //             <div>
//         //                 <Link to="/PricingPage" className="btn btn-primary" style={{ textDecoration: 'none' }} id="pricing-text" >Pricing</Link>
//         //             </div>
//         //             <div >
//         //                 <Link to="/Curriculum" className="btn btn-primary" style={{ textDecoration: 'none' }} id="curriculum-text">Curriculum</Link>
//         //             </div>
//         //             <div>
//         //                 <Link to="/Contact" className="btn btn-primary" style={{ textDecoration: 'none' }} id="login-text">Contact</Link>
//         //             </div>
//         //         </div>



//         //     </nav> 
//         <AppBar position="static"  >
//             < Container maxWidth="xl" >
//                 <Toolbar disableGutters>
//                     <Box >
//                         <Box id="App-logo1"
//                             component="img"

//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'flex', md: 'none' },
//                                 flexGrow: 1,

//                             }}
//                             src={logo}></Box>
//                         {/* This is for big size */}


//                         <Box noWrap
//                             id="App-logo2"
//                             component="img"

//                             sx={{
//                                 mr: 2,
//                                 display: { xs: 'none', md: 'flex' },
//                                 flexGrow: 1,

//                             }}
//                             src={logo}>

//                         </Box>
//                         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                             {pages1.map((page) => (
//                                 <Button
//                                     key={page}
//                                     // onClick={handleCloseNavMenu}
//                                     sx={{ my: 2, color: 'black' }}
//                                 >
//                                     {page}
//                                 </Button>
//                             ))}
//                         </Box>

//                     </Box>

//                 </Toolbar>
//             </Container >
//         </AppBar >
//     );

// }
// export default Navbar;





import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/system';
import { useNavigate } from "react-router-dom";
import { navigate } from 'react-router';
const pages = ['Pricing', 'Curriculum', 'Contact'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    // const theme = createTheme({
    //     palette: {
    //         primary: {
    //             main: '#28424C',
    //         }
    //     }
    // })
    let navigate = useNavigate();
    return (

        <AppBar elevation={0} sx={{ bgcolor: "#28424C" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Box id="App-logo1"
                            onClick={() => navigate('/')}
                            noWrap
                            component="img"

                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },


                            }} src={logo}
                        >

                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={page === 'Pricing' ? () => { navigate('/PricingPage') } :
                                    page === 'Curriculum' ? () => { navigate('/Curriculum') } :
                                        page === 'Contact' ? () => { navigate('/Contact') } : null}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Box

                            noWrap
                            component="img"
                            id="App-logo2"
                            sx={{

                                display: { xs: 'flex', md: 'none' },


                            }} src={logo}
                        >

                        </Box>
                    </Box>
                    <Box mt={1} mr={3} sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={
                                    page === 'Pricing' ? () => { navigate('/PricingPage') } :
                                        page === 'Curriculum' ? () => { navigate('/Curriculum') } :
                                            page === 'Contact' ? () => { navigate('/Contact') } : null
                                }
                                sx={{ my: 2, color: '#DBCDB6', display: 'block', fontFamily: "raleway" }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>





                    </Box>
                </Toolbar>
            </Container>
        </AppBar >

    );
}
export default Navbar;