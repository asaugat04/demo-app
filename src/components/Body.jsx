import { Box, Container } from '@mui/material';
import { sizing } from '@mui/system';

import React from 'react'
import { useContext, useState } from "react";
import BodyLeft from "./BodyLeft";
import BodyMiddle from "./BodyMiddle";
import BodyRight from "./BodyRight"
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { appContext } from '../appContext';

import "./styles/body.css"

const useStyles = makeStyles({
    noPadding: {
        paddingLeft: "0 !important",
        paddingTop: "0 !important",

    }
})





const Body = () => {


    const matches = useMediaQuery('(max-width:810px)');
    const classes = useStyles()

    const [clicked,setClicked]=useState(false)

    const handleChatClick = (data) => {
        console.log(data)
        setClicked(true)
    }


    return (
        // <Box className="body" >
        //     <BodyLeft   />
        //     <BodyMiddle sx={{
        //     }} />


        //     <BodyRight />
        // </Box>
        <Grid container xs={12} spacing={2} m={0} p={0} >

            <appContext.Provider
                value={{
                    handleChatClick,
                    clicked
                    // productsList,
                    // isLoading
                }}

            >

                <Grid item flex={1} sm={12} md={3} className={matches ? classes.noPadding : ""} >
                    <BodyLeft />
                </Grid>

                <Grid item sm={12} md={6} >
                    <BodyMiddle />
                </Grid>
            </appContext.Provider>
                <Grid item sm={3} md={3}>
                    <BodyRight />
                </Grid>


        </Grid>
    )
}


export default Body