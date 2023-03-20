import React from 'react';
import { Box, Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import xssize from '../image/xs_bg.png';
import mdsize from '../image/md_bg.png';
import lgsize from '../image/lg_bg.png';
import { Height } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
function ResponsiveImage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/contact`;
    navigate(path);
    console.log("hello")
  }
  const isXs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));

  let imageSrc;
  if (isXs) {
    imageSrc = xssize;

  } else if (isMd) {
    imageSrc = mdsize;
  } else {
    imageSrc = lgsize;
  }

  return (
    <Box>

      <Box
        component="img"
        src={imageSrc}
        sx={{
          width: '100%',

          pointerEvents: 'none',

        }}
        alt="Backgroundimg"
      />

      <Box sx={{
        left: {
          xs: "3%",
          sm: "4%",
          md: "5%",
          lg: "6%",
          xl: "6%"
        },
        position: "absolute",
        top: {
          xs: "10%",
          sm: "20%",
          md: "30%",
          lg: "40%",
          xl: "40%"
        }
      }}>
        <Typography variant="h2" color={"#DBCDB6"}
        >Learn faster through<br /> Structured training</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={routeChange} sx={{ bgcolor: "#4B94B0", color: "#28424C", fontSize: "1.2rem", fontWeight: "bold", borderRadius: "0.5rem", width: "10rem", height: "3rem" }}>Contact Us</Button>
        </Box>
      </Box>



    </Box>

  );
}

export default ResponsiveImage;