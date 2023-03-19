import React from 'react';
import "./footer.css";
import { Container } from '@mui/material';
import { bgcolor, Box, fontSize } from '@mui/system';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
function Footer() {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ bgcolor: "#28424C", color: "#DBCDB6", height: "5rem" }}
        >

            <Grid item >
                <Typography>
                    ©All Rights Reserved
                </Typography>
            </Grid>

        </Grid>
    )
};
export default Footer