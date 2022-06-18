import { Box, Container } from '@mui/material';
import { sizing } from '@mui/system';

import React from 'react'
import { useContext, useState } from "react";
import BodyLeft from "./BodyLeft";
import BodyMiddle from "./BodyMiddle";
import BodyRight from "./BodyRight"
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem'

import "./styles/body.css"

const Body = () => {




    return (
        // <Box className="body" >
        //     <BodyLeft   />
        //     <BodyMiddle sx={{
        //     }} />


        //     <BodyRight />
        // </Box>
        <Grid container xs={12} spacing={2} m={0} sx={{border:"2px solid black"}}>
            <Grid item  sm={12} md={3}>
                <BodyLeft  />
            </Grid>
            <Grid item sm={12} md={6} >
                <BodyMiddle />
            </Grid>
            <Grid item sm={3} md={3}>
                <BodyRight />
            </Grid>


        </Grid>
    )
}


export default Body